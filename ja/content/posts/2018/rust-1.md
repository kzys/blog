---
title: '"The Rust Programming Language" を読んでいる'
date: 2018-06-26T23:15:30-07:00
draft: true
---

最近は [The Rust Programming Language](https://doc.rust-lang.org/book/) を読んでいる。13章の [Functional Language Features: Iterators and Closures](https://doc.rust-lang.org/book/second-edition/ch13-00-functional-features.html) まできたので、そろそろ終わりがみえてきた。

変数は基本的には再代入されなくて、Option があって、パターンマッチがあって、という Rust のデザインは、以前に Scala を書いていた身としては親しみやすい。

一方で JVM との互換性なんてものを気にしなくていい故に、null が無かったりするのは良い。6章の [The Option Enum and Its Advantages Over Null Values](https://doc.rust-lang.org/book/second-edition/ch06-01-defining-an-enum.html) では、Option を紹介する際に、Tony Hoare の有名な

> This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.

という発言が引用されていたりする。

GC が問題になるような、Rust で書く意味のある、ライフタイムを細かく気にするコストを、それで得られるリターンが上回るソフトウェアはどのくらいあるのか、という疑問はある。一方で、Rust が必要になるようなソフトウェアだけを書く生活も、会社や製品をえらべば数年くらいは送れるんじゃないか、という淡い期待もある。

### JVM 言語の悲しみ



Rust に賭けるのは、Kotlin や Scala に比べると、まだ仕事で使っている人が少なくて、自分でもある程度は活躍できる余地があるのでは、という打算的な気持ちもだいぶある。


