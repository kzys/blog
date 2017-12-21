---
title: "AutoValue と Immutables"
date: 2017-12-20T22:26:30-08:00
---

最近は Lombok 以外にも色々あるみたい。

### AutoValue

Google の人々が開発していて、[google-java-format](https://github.com/google/google-java-format) と同じように、設定できるところがあまり無い。出来る/出来ないことについて opinionated で、理由を読んでみると勉強になる。

一方で、[AutoValue with Builders](https://github.com/google/auto/blob/master/value/userguide/builders.md) で

> As explained in the introduction, the AutoValue concept is that you write an abstract value class, and AutoValue implements it. Builder generation works in the exact same way: you also create an abstract builder class, nesting it inside your abstract value class, and AutoValue generates implementations for both.

というように Builder は生成してくれなかったり、[インターフェースから生成はできないの?](https://github.com/google/auto/blob/master/value/userguide/howto.md#interface) という問いに

> Interfaces are not allowed. The only advantage of interfaces we're aware of is that you can omit public abstract from the methods. That's not much.

と冷たく突き放してみたりで、お前はボイラープレートを減らしたいんじゃなかったのか、と存在意義を問いたくなるところもある。

### Immutables

名前に "Immutables" とある割になぜか mutable なものも生成できたり、[@Value.Style](https://immutables.github.io/style.html) で色々設定できたりと、とにかく節操がない。
