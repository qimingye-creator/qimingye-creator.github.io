document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('taiji-canvas');
  if (!canvas) {
    console.error('Taiji canvas element not found!');
    return;
  }

  const ctx = canvas.getContext('2d');
  // HTML canvas attributes width/height define the drawing buffer size.
  // CSS width/height define the element's display size on the page.
  // They are set to be the same (550x550) via HTML attributes and container style.
  const width = canvas.width; 
  const height = canvas.height;
  let time = 0;
  const SCALE = 60;
  let animationFrameId = null;

  function drawTile(cx, cy, size, rotation, phase, morph, energy) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    
    // 绘制外圈六边形 - 代表"有"
    ctx.beginPath();
    const points = 6;
    
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2; // Corrected: /
      const r = size * (1 + Math.sin(phase + i) * 0.15);
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    // 阴阳双色系统
    const yinOpacity = (Math.sin(phase) * 0.3 + 0.5) * energy;
    const yangOpacity = (Math.cos(phase) * 0.3 + 0.5) * energy;
    
    ctx.strokeStyle = `rgba(20, 20, 60, ${yinOpacity})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // 绘制内部连接线 - 代表阴阳平衡
    for (let i = 0; i < points; i += 2) {
      const angle1 = (i / points) * Math.PI * 2; // Corrected: /
      const angle2 = ((i + 2) / points) * Math.PI * 2; // Corrected: /
      const r1 = size * (1 + Math.sin(phase + i) * 0.15);
      const r2 = size * (1 + Math.sin(phase + i + 2) * 0.15);
      
      const x1 = Math.cos(angle1) * r1;
      const y1 = Math.sin(angle1) * r1;
      const x2 = Math.cos(angle2) * r2;
      const y2 = Math.sin(angle2) * r2;
      
      // 中心点的波动 - 代表"空"中生"有"
      const midAngle = (angle1 + angle2) / 2; // Corrected: /
      const innerR = size * (0.4 + morph * 0.3) * (1 + Math.sin(phase * 2) * 0.1);
      const xi = Math.cos(midAngle) * innerR;
      const yi = Math.sin(midAngle) * innerR;
      
      // 阴线
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(0, 0, xi, yi);
      ctx.strokeStyle = `rgba(60, 20, 20, ${yangOpacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // 阳线
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.quadraticCurveTo(0, 0, xi, yi);
      ctx.strokeStyle = `rgba(20, 20, 60, ${yinOpacity})`;
      ctx.stroke();
    }
    
    // 绘制中心的太极点 - 代表"无"
    const centerSize = size * 0.1 * (1 + Math.sin(phase * 3) * 0.5);
    ctx.beginPath();
    ctx.arc(0, 0, centerSize, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(40, 40, 40, ${(yinOpacity + yangOpacity) * 0.5})`;
    ctx.fill();
    
    ctx.restore();
  }

  function createTessellationField(offsetX, offsetY, fieldScale, timeOffset) {
    const gridSize = 4;
    const spacing = SCALE * fieldScale * 0.85;
    
    for (let row = -gridSize; row <= gridSize; row++) {
      const rowOffset = (row % 2) * spacing * 0.5;
      
      for (let col = -gridSize; col <= gridSize; col++) {
        const x = (col * spacing * 0.866) + rowOffset + offsetX;
        const y = row * spacing * 0.75 + offsetY;
        const dist = Math.sqrt(x * x + y * y);
        
        if (dist > SCALE * fieldScale * 2.8) continue;
        
        const angle = Math.atan2(y - offsetY, x - offsetX);
        const phase = (time + timeOffset) + dist * 0.008;
        const morph = Math.sin(phase + angle * 2) * 0.5 + 0.5;
        
        // 能量衰减 - 从中心向外
        const energy = 1 - (dist / (SCALE * fieldScale * 3)); // Corrected: /
        
        drawTile(
          width/2 + x,
          height/2 + y,
          SCALE * fieldScale * 0.45 * (0.8 + energy * 0.2),
          angle + (time + timeOffset) * 0.15,
          phase,
          morph,
          Math.max(0.1, energy)
        );
      }
    }
  }

  function animate() {
    time += 0.008;  // 更慢的节奏，体现道的缓慢变化
    
    // 更温暖的背景色调
    ctx.fillStyle = '#F5F3E8';
    ctx.fillRect(0, 0, width, height);
    
    // 主要镶嵌场 - 代表"太极"
    createTessellationField(0, 0, 1.6, 0);
    
    // 阴场 - 逆时针旋转
    ctx.save();
    ctx.translate(width/2, height/2);
    ctx.rotate(Math.PI/5);
    ctx.translate(-width/2, -height/2);
    createTessellationField(-20, -80, 0.75, time * 0.3 + Math.PI/4);
    ctx.restore();
    
    // 阳场 - 顺时针旋转
    ctx.save();
    ctx.translate(width/2, height/2);
    ctx.rotate(-Math.PI/5);
    ctx.translate(-width/2, -height/2);
    createTessellationField(20, 80, 0.75, time * 0.3 - Math.PI/4);
    ctx.restore();
    
    // 添加中心能量涟漪效果
    ctx.save();
    ctx.translate(width/2, height/2);
    for (let i = 0; i < 3; i++) {
      const ripplePhase = time * 2 + i * Math.PI * 0.7;
      const rippleRadius = 80 + Math.sin(ripplePhase) * 30;
      const rippleOpacity = (Math.sin(ripplePhase) * 0.1 + 0.1) * 0.3;
      
      ctx.beginPath();
      ctx.arc(0, 0, rippleRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 60, 40, ${rippleOpacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
    ctx.restore();
    
    animationFrameId = requestAnimationFrame(animate);
  }

  animate(); // Start the animation

  // Cleanup function (optional for static pages, as requestAnimationFrame is usually handled by browser on unload)
  // window.addEventListener('beforeunload', () => {
  //   if (animationFrameId) {
  //     cancelAnimationFrame(animationFrameId);
  //     animationFrameId = null;
  //   }
  // });
});
