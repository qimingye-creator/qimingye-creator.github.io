---
title: "Local-to-Global Perception Network for Point Cloud Segmentation"
collection: IEEE Transactions on Neural Networks and Learning Systems
permalink: /publication/Local-to-Global Perception Network for Point Cloud Segmentation
excerpt: ''

date: 2023-10-19
venue: '2024 IEEE International Conference on Multimedia and Expo (ICME)'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10687969'
citation: 'Wang H, Wei P, Chen S, et al. Local-to-Global Perception Network for Point Cloud Segmentation[C]//2024 IEEE International Conference on Multimedia and Expo (ICME). IEEE, 2024: 1-6.'
---

Abstract: LiDAR-based point cloud segmentation is a significant and challenging task for 3D scene understanding. 
Recent voxel-based methods are often built on submanifold sparse residual calculation with small kernel size, 
which limits the local feature interactions and neglects the global contextual information. 
In this paper, we propose a local-to-global perception LiDAR-based point cloud segmentation network LGPSeg. 
From the local perspective, 
we design the Dynamic Spatial Aggregation Convolution to expand the receptive field range while avoiding a large increase in the model parameters. 
From the global perspective, we propose the BEV-Voxel Fusion to aggregate the global contextual information on the BEV feature maps through advanced 2D operators. 
By combining the local and global features, the 3D object and background information can be better captured. Our method achieves state-of-the-art results on two large datasets, 
SemanticKITTI and nuScenes, and even outperformed multimodal-based methods.