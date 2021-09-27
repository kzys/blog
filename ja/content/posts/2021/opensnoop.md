---
title: "BCC に入っている opensnoop が便利"
date: 2021-09-26T18:17:36-07:00
---
BPF というと、[memcached を速くする](https://www.usenix.org/conference/nsdi21/presentation/ghigoff)とか、[Ruby からコンパイルする](https://rubykaigi.org/2021-takeout/presentations/udzura.html)とか、まず高度な話題を見かける2021年だけど、[BCC](https://github.com/iovisor/bcc) についてくる色々なスクリプトを使うだけでも、色々とトラブルを解決できることがある。

### opensnoop

opensnoop は文字通りシステムで発行されている open(2) をリアルタイムに覗き見できるツールだ。

去年に [containerd/cgroup でメトリクスが来ないバグを直した](https://github.com/containerd/cgroups/pull/147)ときには、そもそも最初はこのパッケージまで絞り込めてなくて、

* なんかメトリクスが来ないんだけど...
* このメトリクスって /sys/gs/cgroup/blkio 以下のファイルから来てるんだよね?
* これって containerd 本体が読んでるんだっけ? 多分 shim のほうだとは思うんだけど...
* runc が読んでるってことはないよねえ?
* ファイルは読まれているけど、中継経路のどこかで落としてしまっているとか?

みたいな状況で strace をかけるにもどのプロセスを見たものか今ひとつわからない。そこで opensnoop をかけると、そもそも誰もファイルを読んでいないじゃないか! というのが即座にわかって便利だった。

### それ bpftrace で出来るの?

ちなみに、open(2) を文字通り全部ログするようなものなら、[bpftrace](https://github.com/iovisor/bpftrace) で書くこともできる。

ただ、例えば opensnoop だと、open(2) の他に [openat(2) と openat2(2)](https://github.com/iovisor/bcc/blob/v0.22.0/tools/opensnoop.py#L261-L267) をハンドルするコードが入っている。

open(2) のことを考えたときに、その亜種のシステムコールもパッと浮かぶくらい Linux に詳しい人だったら全て bpftrace で事足りるのかもしれない。私はそこまで Linux に詳しくないので、BCC についてくるスクリプトから試すことが多い。
