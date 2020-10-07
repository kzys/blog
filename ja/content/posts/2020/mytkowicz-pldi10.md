---
title: '"Evaluating the Accuracy of Java Profilers" を読んだ'
date: 2020-10-06T22:49:50-07:00
tags: ["Paper"]
---
[The Morning Paper](https://blog.acolyer.org/) も [Misreading Chat](https://misreading.chat/) も再開してめでたいので、PLDI '10 [^1] の [Evaluating the Accuracy of Java Profilers](https://plv.colorado.edu/papers/mytkowicz-pldi10.pdf) を読んだ。

著者らは、Xprof, Hprof, JProfiler, YourKit の4つのプロファイラについて、その精度を比較する。結論からいうと、これらのプロファイラは全て JVM から直接情報をもらっているため、

> We determined that all four profilers take samples only at yield points. More specifically, when a profiler wishes to take a sample, it waits for the program’s execution to reach a yield point.
>
> Yield points are a mechanism for supporting quasi-preemptive thread scheduling; they are program locations where it is "safe" to run a garbage collector (e.g., all the GC tables are in a consistent state). 

サンプリングがランダムにならず、結果、精度に悪影響が出てしまっていた。この yield points はなかなか繊細で、プロファイラを JVM の中に読み込むことも、

> The observer effect caused by the different profilers influences where the JIT places yield points.

影響してしまう。これに加えて、プロファイラ由来のバックグラウンドスレッドなどのせいで、4つのプロファイラは、それぞれ結果に差異が出てしまっていた。

### 正しいプロファイルをとるには

著者らは実験として、JVM の外側で動く tprof というプロファイラを開発して、実際にベンチマーク二つを高速化している。

JVM の外からプロファイルすべきでは、というのはまあまあ自明で、Brendan Gregg は、[Java CPU Sampling Using hprof](http://www.brendangregg.com/blog/2014-06-09/java-cpu-sampling-using-hprof.html) (2014) で

> The runnable state issue and yield-based sampling could both be fixed at the same time, by profiling from the system. The best example was developed by Sun: the jstack() action for DTrace, which can sample Java stack traces based on the kernel's understanding of running CPUs, and using reliable system timers.

ex-Sun らしさを見せつけている。2020年的には、これは BPF で出来ますよね。

### 他のランタイムの厚い言語はどうなのか?

こういうのって Go とかにもあるのかなあと調べてみたら、Go のほうは、[Proposal: hardware performance counters for CPU profiling](https://go.googlesource.com/proposal/+/refs/changes/08/219508/2/design/36821-perf-counter-pprof.md) という提案がされていた。

> The Go pprof CPU profiles are quite inaccurate and imprecise due to several limitations related to the operating system (OS) interval timer used as its sampling engine.

Yield points に当たるものは存在しないのか、それ以前にまずサンプリングレートをなんとかしたいという話なのかはよくわからず。知っている人がいたら教えてください。

[^1]: Programming Language Design and Implementation