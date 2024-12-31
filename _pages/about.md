---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

My name is Zhancun Mu, or 牟湛存 in Chinese. You can contact me at muzhancun@stu.pku.edu.cn. 
I am currently a senior student in Tong class, Peking University.
I will be a Ph.D. student at the Institute for Artificial Intelligence, Peking University starting from 2025, under the supervision of Professor Yitao Liang.

My research is focused on developing autonomous agents capable of operating in open-ended, dynamic environments such as Minecraft. To achieve this goal, I concentrate on two key elements: First, designing robust planning systems that enable agents to make complex decisions over long time horizons. This involves developing algorithms for reasoning about uncertain outcomes, decomposing high-level goals into executable subgoals, and continuously revising plans as new information becomes available. Second, creating intuitive controllers that allow agents to seamlessly interact with their environments. This requires integrating perception, decision-making, and low-level control in a unified framework that can handle the rich, multimodal inputs and outputs characteristic of virtual worlds. In addition to these core areas, I am keenly interested in multi-agent systems, exploring how autonomous agents can coordinate their behaviors to accomplish shared objectives. I am also drawn to cognitive reasoning and developing computational models that capture aspects of human-like intelligence. Furthermore, I am excited by the potential of AI to accelerate scientific discovery across domains. My ultimate vision is to develop intelligent agents that can autonomously explore, understand, and shape the open-ended environments they inhabit in pursuit of complex, self-motivated goals.


# 🔥 News
+ *Oct 2024*: 🎉🎉 Our paper ‘‘ROCKET-1: Mastering Open-Wolrd Interaction with Visual-Temporal Context Prompting’’ has been realeased!
+ *Sep 2024*: 🎉🎉 Our latest Vision-Language-Action model OmniJARVIS is accepted by NeurIPS 2024.
+ *Jun 2024*: 🎉🎉 Our paper "A Contextual Combinatorial Bandits Approach to Negotiation" is accepted at ICML 2024.
+ *Jan 2024*: 🎉🎉 [PTGM](https://openreview.net/forum?id=o2IEmeLL9r) is accepted by ICLR 2024 for **oral** presentation (<span style="color:red">top 1.2%</span>).

# 📚 Preprints

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">arXiv</div><img src='images/minestudio.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**MineStudio: A Streamlined Package for Minecraft AI Agent Development**

Shaofei Cai\*, **Zhancun Mu*\***, Kaichen He, Bowei Zhang, Xinyue Zheng, Anji Liu, Yitao Liang

**arXiv** \|
[Paper](https://arxiv.org/abs/2412.18293) \|
[Doc](https://craftjarvis.github.io/MineStudio/) \|
[Code](https://github.com/CraftJarvis/MineStudio) \|
[PyPI](https://pypi.org/project/minestudio/) \|
[Dataset](https://huggingface.co/CraftJarvis)
</div>
</div>


<div class='paper-box'>
<div class='paper-box-image'><div class="badge">arXiv</div><img src='images/globaltomo.jpg' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**GlobalTomo: A global dataset for physics-ML seismic wavefield modeling and full-waveform inversion**

Shiqian Li, Zhi Li, **Zhancun Mu**, Shiji Xin, Zhixiang Dai, Kuangdai Leng, Ruihua Zhang, Xiaodong Song, Yixin Zhu

**arXiv** \|
[Paper](https://arxiv.org/abs/2406.18202) \|
[Page](https://global-tomo.github.io/) \|
[Code](https://github.com/lishiqianhugh/GlobalTomo)
</div>
</div>

# 📝 Publications 

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">NeurIPS 2024-OWA</div><img src='images/ROCKET-1.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**ROCKET-1: Master Open-World Interaction with Visual-Temporal Context Prompting**

Shaofei Cai, Zihao Wang, Kewei Lian, **Zhancun Mu**, Xiaojian Ma, Anji Liu, Yitao Liang

**NeurIPS 2024 Open-World Agent Workshop** \|
[Paper](https://arxiv.org/pdf/2410.17856) \|
[Cite](https://scholar.google.com/scholar_lookup?arxiv_id=2410.17856) \| 
[Code](https://github.com/CraftJarvis/ROCKET-1) \|
[Page](https://craftjarvis.github.io/ROCKET-1)
</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">NeurIPS 2024</div><img src='images/OmniJARVIS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**OmniJARVIS: Unified Vision-Language-Action Tokenization Enables Open-World Instruction Following Agents**

Zihao Wang, Shaofei Cai, **Zhancun Mu**, Haowei Lin, Ceyao Zhang, Xueije Liu, Qing Li, Anji Liu, Xiaojian Ma, Yitao Liang

**NeurIPS 2024** \|
[Paper](https://omnijarvis.github.io/static/pdf/OmniJARViS.pdf) \|
[Twitter](https://x.com/jeasinema/status/1808346701205516395) \| 
[Page](https://omnijarvis.github.io/)
</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">ICML 2024</div><img src='images/neg.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**A Contextual Combinatorial Bandit Approach to Negotiation**

Yexin Li, **Zhancun Mu**, Siyuan Qi

**ICML 2024** \|
[Paper](https://arxiv.org/pdf/2407.00567)
</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">ICLR 2024</div><img src='images/ptgm.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Pre-Training Goal-based Models for Sample-Efficient Reinforcement Learning**

Haoqi Yuan, **Zhancun Mu**, Feiyang Xie, Zongqing Lu

<span style="color:red">Oral Presentation</span>

**ICLR 2024** \|
[Paper](https://openreview.net/forum?id=o2IEmeLL9r) \|
[Page](https://sites.google.com/view/ptgm-iclr/) \|
[Code](https://github.com/PKU-RL/PTGM)
</div>
</div>

# 📖 Educations

<div class='school-box'>
<div><img src='images/pku.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2021.09 - now, Undergraduate

Tong class, Yuanpei College

Peking University, Beijing
</div>
</div>

# 💻 Internships
- *2023.07 - 2023.10*, [BAAI](https://baai.ac.cn/), China.