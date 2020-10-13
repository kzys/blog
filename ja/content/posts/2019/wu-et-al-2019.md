---
title: '"Machine Learning at Facebook: Understanding Inference at the Edge" を読んだ'
date: 2019-03-18T22:18:25-07:00
tags: ["Paper"]
---

[Machine Learning at Facebook: Understanding Inference at the Edge](https://research.fb.com/publications/machine-learning-at-facebook-understanding-inference-at-the-edge/) (2019)

機械学習というとサーバー側でやるイメージが (少なくとも私には) あったけれど、Facebook は推論なら端末側でもやるんですよ、という話。分量としては Android が辛い話が7割、Oculus のような自分たちで制御できる環境が2割、iOS が1割くらいの感じです。

> However while most Android devices ship with OpenCL drivers, OpenCL is not officially a part of the Android system, and they do not go through the same conformance tests as OpenGL ES and Vulkan. As shown in Figure 5(a), a notable portion of Android devices ship with a broken OpenCL driver. In the worst case, 1% of the devices crash when the app tries to load the OpenCL library. The instability of OpenCL’s library and driver makes it unreliable to use at scale.

つらみ... そもそもモバイルの GPU はそこまで速くないのもあって、推論は CPU で走らせがちらしいです。

> In a median device, the GPU provides only as much theoretical GFLOPS as its CPU. 23% of the SoCs have a GPU at least twice as performant as their CPU, and only 11% have a GPU that is 3 times as powerful than its CPU.
