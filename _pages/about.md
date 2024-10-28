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

# About Me
<span class='anchor' id='about-me'></span>

My name is Shaofei Cai, or 蔡少斐 in Chinese. You can contact me at caishaofei@stu.pku.edu.cn. I am currently pursuing my Ph.D. at the School of Intelligence Science and Technology, Peking University, under the supervision of Professor Yitao Liang. My journey began in 2022. Prior to this, I earned my Bachelor's degree from Xi'an Jiaotong University in 2019, followed by a Master's degree from the Institute of Computing Technology, Chinese Academy of Sciences in 2022, under the guidance of Professor Liang Li. My primary research interests involve generative models and sequential control. Currently, I am focused on building generally capable agents in open-world environments, such as Minecraft. 


# 🔥 News
- *2024.10*: &nbsp;🎉🎉 Our paper ''ROCKET-1: Master Open-Wolrd Interaction with Visual-Temporal Context Prompting'' has been realeased! 
- *2024.10*: &nbsp;🎉🎉 Our paper ''OmniJARVIS: Unified Vision-Language-Action Tokenization Enables Open-World Instruction Following Agents'' has been accepted by the Neural Information Processing Systems (NeurIPS) 2024. 
- *2024.01*: &nbsp;🎉🎉 Our paper ''GROOT: Learning to Follow Instructions by Watching Gameplay Videos'' has been accepted by the International Conference on Learning Representations (ICLR) 2024 as a **Spotlight** presentation (Top-5%). 
# 📝 Publications 

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">Arxiv</div><img src='images/ROCKET-1.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**ROCKET-1: Master Open-Wolrd Interaction with Visual-Temporal Context Prompting**

**Shaofei Cai**, Zihao Wang, Kewei Lian, Zhancun Mu, Xiaojian Ma, Anji Liu, Yitao Liang

**Arxiv** \|
[Paper](https://arxiv.org/pdf/2410.17856) \|
[Cite](https://scholar.google.com/scholar_lookup?arxiv_id=2410.17856) \| 
[Code](https://github.com/CraftJarvis/ROCKET-1) \|
[Page](https://craftjarvis.github.io/ROCKET-1)
</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">Arxiv</div><img src='images/OmniJARVIS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**OmniJARVIS: Unified Vision-Language-Action Tokenization Enables Open-World Instruction Following Agents**

Zihao Wang, **Shaofei Cai**, Zhancun Mu, Haowei Lin, Ceyao Zhang, Xueije Liu, Qing Li, Anji Liu, Xiaojian Ma, Yitao Liang

**NeurIPS 2024** \|
[Paper](https://arxiv.org/pdf/2410.17856) \|
[Twitter](https://x.com/jeasinema/status/1808346701205516395) \| 
[Page](https://omnijarvis.github.io/)
</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">ICLR 2024</div><img src='images/GROOT.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**GROOT: Learning to Follow Instructions by Watching Gameplay Videos**

**Shaofei Cai**, Bowei Zhang, Zihao Wang, Xiaojian Ma, Anji Liu, Yitao Liang

<span style="color:red">Spotlight Presentation (Top-5%)</span>

**ICLR 2024** \|
[Paper](https://arxiv.org/abs/2310.08235) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2310-08235.html?view=bibtex) \| 
[Code](https://github.com/CraftJarvis/GROOT) \|
[Page](https://craftjarvis-groot.github.io/) \|
[Twitter](https://twitter.com/jeasinema/status/1712526192665047493?s=20)

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">arxiv</div><img src='images/jarvis-1.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**JARVIS-1: Open-World Multi-task Agents with Memory-Augmented Multimodal Language Models**


Zihao Wang, **Shaofei Cai**, Anji Liu, Yonggang Jin, Jinbing Hou, Bowei Zhang, Haowei Lin, Zhaofeng He, Zilong Zheng, Yaodong Yang, Xiaojian Ma, Yitao Liang
  
**arxiv** \|
[Paper](https://arxiv.org/pdf/2311.05997.pdf) \|
[Cite](https://arxiv.org/abs/2310.08235) \| 
[Code](https://github.com/CraftJarvis/GROOT) \|
[Page](https://craftjarvis-jarvis1.github.io/) \|
[Twitter](https://twitter.com/jeasinema/status/1723900032653643796) 

</div>
</div>


<div class='paper-box'>
<div class='paper-box-image'><div class="badge">Neurips 2023</div><img src='images/deps.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Describe, Explain, Plan and Select: Interactive Planning with Large Language Models Enables Open-World Multi-Task Agents**

Zihao Wang, **Shaofei Cai**, Xiaojian Ma, Anji Liu, Yitao Liang

<span style="color:red">ICML 2023 TEACH Workshop Best Paper Award</span>

**Neurips 2023** \|
[Paper](https://arxiv.org/pdf/2302.01560.pdf) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2109-10737.html?view=bibtex) \| 
[Code](https://github.com/CraftJarvis/MC-Planner)

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">CVPR 2023</div><img src='images/MC-Controller.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Open-World Multi-Task Control Through Goal-Aware Representation Learning and Adaptive Horizon Prediction**

**Shaofei Cai**, Zihao Wang, Xiaojian Ma, Anji Liu, Yitao Liang

**CVPR 2023** \| 
[Paper](https://arxiv.org/pdf/2301.10034.pdf) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2109-10737.html?view=bibtex) \| 
[Code](https://github.com/CraftJarvis/MC-Controller) 

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">CVPR 2022</div><img src='images/ARGNP.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Automatic Relation-aware Graph Network Proliferation**

**Shaofei Cai**, Liang Li, Xinzhe Han, Jiebo Luo, Zheng-jun Zha, Qingming Huang

<span style="color:red">Oral Presentation (Top-4%)</span>

**CVPR 2022**  \| 
[Paper](https://arxiv.org/abs/2205.15678) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2205-15678.html?view=bibtex) \| 
[Code](https://github.com/phython96/ARGNP) \| 
[Video](https://0633e92166c0a27ea1aa-ab47878a9e45eb9e2f15be38a59f867e.ssl.cf1.rackcdn.com/PJNEQWFQ-2100498-1663000-Upload-1652882468.mp4) \| 
[Poster](https://www.conferenceharvester.com/uploads/harvester/presentations/PJNEQWFQ/PJNEQWFQ-PDF-2100498-1663000-1-PDF(1).pdf) 

</div>
</div>



<div class='paper-box'>
<div class='paper-box-image'><div class="badge">CVPR 2021</div><img src='images/GNAS.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Rethinking Graph Neural Architecture Search from Message-Passing**

**Shaofei Cai**, Liang Li, Jincan Deng, Beichen Zhang, Zheng-Jun Zha, Li Su, Qingming Huang

  **CVPR 2021** \| 
  [Paper](https://openaccess.thecvf.com/content/CVPR2021/papers/Cai_Rethinking_Graph_Neural_Architecture_Search_From_Message-Passing_CVPR_2021_paper.pdf) \|
  [Cite](https://dblp.org/rec/conf/cvpr/Cai0DZZ0H21.html?view=bibtex) \| 
  [Code](https://github.com/phython96/GNAS-MP) 

</div>
</div>


<div class='paper-box'>
<div class='paper-box-image'><div class="badge">TNNLS 2023</div><img src='images/SCDGC.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Semantic and Correlation Disentangled Graph Propagation for Multi-label Image Recognition**

  **Shaofei Cai**, Liang Li, Xinzhe Han, Qi Tian, Qingming Huang


  **IEEE Trans. Neural Netw. Learn. Syst. (TNNLS 2023)** \|
  Paper \|
  Cite 

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'><div class="badge">WACV 2023</div><img src='images/dystyle.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">




**DyStyle: Dynamic Neural Network for Multi-Attribute-Conditioned Style Editing**

 Bingchuan Li*, **Shaofei Cai\***, Wei Liu, Peng Zhang, Miao Hua, Qian He, Zili Yi

**WACV 2023** \|
[Paper](https://arxiv.org/abs/2109.10737) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2301-10034.html?view=bibtex) \| 
[Code](https://github.com/phycvgan/DyStyle) 
</div>
</div>


<div class='paper-box'>
<div class='paper-box-image'><div class="badge">ACM MM 2020</div><img src='images/irgan.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**IR-GAN: Image Manipulation with Linguistic Instruction by Increment Reasoning**

Zhenhuan Liu, Jincan Deng, Liang Li, **Shaofei Cai**, Qianqian Xu, Shuhui Wang, Qingming Huang

<span style="color:red">Oral Presentation</span>

**ACM MM 2020**  \| 
[Paper](https://vipl.ict.ac.cn/uploadfile/upload/2020122810513917.pdf) \|
[Cite](https://dblp.org/rec/conf/mm/LiuDLCXWH20.html?view=bibtex)

</div>
</div>



<div class='paper-box'>
<div class='paper-box-image'><div class="badge">arxiv</div><img src='images/egnas.png' alt="sym" width="100%"></div>
<div class='paper-box-text' markdown="1">

**Edge-featured Graph Neural Architecture Search**

**Shaofei Cai**, Liang Li, Xinzhe Han, Zheng-jun Zha, Qingming Huang

arxiv \|
[Paper](https://arxiv.org/pdf/2109.01356.pdf) \|
[Cite](https://dblp.org/rec/journals/corr/abs-2109-01356.html?view=bibtex)

</div>
</div>




# 🎖 Honors and Awards

| Date    | Award  | Contest & Project |
| ---     | ---    | ---     |     
| 2018.11 | **Gold Medal (Rank: 6th/180)** | 43rd Asia Beijing Regional (ACM-ICPC) |
| 2018.05 | Gold Medal | National Xi'an Invitational (ACM-ICPC) |
| 2019.06 | Outstanding Student Award | Xi'an Jiaotong University |

# 📖 Educations

<div class='school-box'>
<div><img src='images/pku.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2022.09 - now, PhD student

School of Artifical Intelligence

Peking University, Beijing
</div>
</div>

<div class='school-box'>
<div><img src='images/ucas.jpg' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2019.09 - 2022.06, Master

Institute of Computing Technology, Chinese Academy of Sciences

University of Chinese Academy of Sciences, Beijing
</div>
</div>

<div class='school-box'>
<div><img src='images/xjtu.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2015.09 - 2019.06, Undergraduate

Software College

Xi'an Jiaotong University, Xi'an
</div>
</div>

<!-- <img src='images/ucas.jpg' alt="sym" width="100">
*2019.09 - 2022.06*, Master, Institute of Computing Technology, Chinese Academy of Sciences, University of Chinese Academy of Sciences, Beijing. 
<img src='images/xjtu.png' alt="sym" width="100">
*2015.09 - 2019.06*, Undergraduate, Software College, Xi'an Jiaotong University, Xi'an.  -->

<!-- # 💻 Internships

| Date    | Institution  | Group | Role | 
| ---     | ---          | ---   | ---  |
| 2022.06 - now | Beijing Institute for General Artificial Intelligence | Machine learning | Research Assistant |
| 2020.10 - 2021.08 | Beijing Bytedance Technology Co. LTD | Image Generation | Computer Vision Intern | -->

<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=n&d=qb0VJ7w28vitkm94PFolR4u9UYS3XRg5b98SXTdLh-c'></script>