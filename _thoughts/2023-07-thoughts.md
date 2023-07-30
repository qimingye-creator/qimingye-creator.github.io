---
title: "CVPR2023 Challenge Occupancy Prediction总结"
collection: thoughts
type: "Undergraduate course"
permalink: /thoughts/2023-07-thoughts
venue: "2023-07-29"
date: 2023-07-29
location: "City, Country"
---

总结一下第一次参加CVPR Challenge和后续工作想法

# 前言


![rank](/images/thoughts/2023-07/rank.jpg)

第一次参加CVPR的比赛，前前后后大概花了2个多月的时间，虽然最后只得到第9名的成绩，但从后面的总结来看，如果做的好一点，
应该是可以到第五左右的名次的，这里将总结文章放到了知乎上:[CVPR2023 Occupancy Prediction比赛方案总结](https://zhuanlan.zhihu.com/p/638481909)。其中第三名方法中使用NeRF的解决思路，确实让我耳目一新，后续也打算沿着这个思路进行研究工作。

# NeRF简述（个人理解）

![nerf结构图](/images/thoughts/2023-07/nerf结构图.png)

NeRF在图形学领域在推出的时候就已经很火了，但其在计算机视觉上的应用，在我的调研里其实相对较少的，起码觉得算不上主流，应该有什么限制了其的发展。

由于NeRF中设计了比较多图形学的知识和一些数理知识，一开始学起来还是比较费劲的，个人认为网络上对NeRF讲的还不错的文章：

* [GAMES101-现代计算机图形学入门-闫令琪](https://www.bilibili.com/video/BV1X7411F744/?spm_id_from=333.337.search-card.all.click)

* [NeRF入门之体渲染 (Volume Rendering)](https://zhuanlan.zhihu.com/p/595117334)

NeRF的本质是使用神经网络，具体的说是用MLP中的参数去表示空间信息，通过网络的反向学习优化，使得MLP中的参数能够表达空间中的信息，使得网络可以利用空间中点和方向的信息，预测出空间中某个位置的密度和颜色信息，所以用数学公式表达，NeRF就是使用MLP来学习一种空间映射关系：

$$
f(x,d) \rightarrow (c,\sigma)
$$

在得到每个点的颜色和密度后，可以通过经典的体渲染(volume rendering)公式来渲染出一个图像，对于每条光线$r(t)=o+td$，其渲染出在2D图像上的颜色值也就是像素值可以如下表示：

$$
C(r) = \int_{tn}^{tf}T(t)\sigma(r(t)c(r(t), d)dt, where \ T(t)=exp(-\int_{tn}^{tf}\sigma(r(s))ds)
$$

其中具体的推导解释可以参考下面的论文：

Tagliasacchi, Andrea, and Ben Mildenhall. Volume Rendering Digest (for NeRF). Aug. 2022.

这里理解为，$T(t)$表示的是光线在t时刻没有撞击粒子的概率，也可以理解为透明度，而$\sigma(t)$为密度，也就是不透明度的概率，$T(t)\sigma(t)$则理解为在t时刻刚好停下的PDF。

在获得2D图像空间中每个像素的值，就可以利用交叉熵损失来衡量渲染出来的图像和真实图像之间的差别：

$$
\mathcal L = \sum_{r\in R}||C_{gt} - C_{render}||^{2}
$$

## NeRF成功的关键以及问题

NeRF的成功之一在于其利用神经网络表达能力强的特点，去建模空间信息，来获得空间中每个点的颜色和密度信息，最后利用体渲染来渲染图像，另一就是其提出的positional encoding，有效的解决了MLP表达对于高频信息缺少的问题。

其问题主要如下：

* 其对于Unbounded场景的表达是有问题的（虽然作者用NDC参数化了unbounded的场景）
* 效率问题，原始NeRF效率很低
* 具有模糊性，原始NeRF中采用光线的方式去建模，对于unbounded场景远处物体容易产生歧义。

# NeRF与Occ

![uniocc结构图](/images/thoughts/2023-07/uniocc结构图.png)

在上面对NeRF有了一定认识后，就对第三名中用NeRF解决Occ问题的思路有了比较清晰的理解。

**可以认为其把原来对于体素化的200x200x16的Occ 3D语义分割头换成了两个MLP头，一个输出密度，一个输出语义信息，这里语义信息可以认为和像素值等价**，那通过NeRF的训练思路，只要有语义标签的图像，就可以进行训练了（由于nuscenes没有2D的语义标签，需要通过一些方法得到，这里先不考虑了）

正常nerf是只需要对于颜色值进行监督的，但这里他还对密度信息，也就是深度信息进行监督，具体效果如何有可能等以后实验验证。

而在推理阶段，根据个人理解，在得到深度（密度）信息$\sigma$和语义信息$s$后，如果某个点是有深度的，则这个点是被占据的，再去查询他的语义信息，得到这个被占据点的类别。

## 优势

个人认为使用NeRF来解决Occ的问题，主要有以下两个好处：

* 内存消耗减少，原来对于Occ问题，都将占据问题，当成3D体素的语义分割问题来对待，当分辨率增加时，$x^{3}$的增加，对于内存消耗是十分巨大的，而NeRF的做法，可以认为就是个二维的表达。

* 可以表达更高维度的信息：原来Occ的思路只是对某个分辨率进行监督，如果降低分辨率或者提高分辨率都会影响结果，但NeRF的思路，预测的本来就是每个点，理论上可以做到非常高的分辨率。

# NeRF室外改进

NeRF其实主要是对