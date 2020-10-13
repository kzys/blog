---
title: '"The benefits and costs of writing a POSIX kernel in a high-level language" を読んだ'
date: 2019-02-25T06:17:55-08:00
tags: ["Paper"]
---

[The benefits and costs of writing a POSIX kernel in a high-level language](https://www.usenix.org/conference/osdi18/presentation/cutler)

Go で POSIX なカーネルを書いてみたよ、という論文。研究目的で開発されて、高級言語で書かれたカーネルというのは色々あるけれど、それらには研究として新しいアイデアが盛り込まれていたりして、例えば性能の評価をするにしても、言語よりはアイデアの評価という側面が強い。対して、著者らが実装したカーネル Biscuit は伝統的なモノリシックの POSIX/Unix カーネルで、ベンチマークでも Nginx や Redis なんて見知ったプログラムが使われている。

GC があるのは当然なんだけど

> Goroutine scheduling decisions and the context switch implementation live in the runtime, not in Biscuit. One consequence is that Biscuit does not control scheduling policy; it inherits the runtime’s policy. 

Goroutine のスケジューリングが、そのままカーネルのスケジューリングになっているあたりは、Go らしさがあって面白い。

ちなみに、著者のうち2人は Russ Cox と共に [xv6](https://pdos.csail.mit.edu/6.828/2018/xv6.html) の開発にも関わっていて、そのうちの1人 Robert Morris は、あの Morris ワームの Robert Morris です。
