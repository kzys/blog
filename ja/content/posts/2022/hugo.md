---
title: Hugo で脚注の縦位置をそろえるのが難しくなっている
date: 2022-09-17T00:30:23-07:00
---
Hugo から [Blackfriday が消えてしまっていて](https://github.com/gohugoio/hugo/pull/9945)、Edward Tufte とか [Ink & Switch](https://www.inkandswitch.com) みたいに脚注の縦位置をそろえるのがむずかしくなった。そもそも、複数の投稿が並ぶページだと、リンクのアンカー番号がかぶってしまう。

こういうことがあると、やっぱり Markdown を HTML に変換するくらいは、自分で書くのが良いのかなあと思ってしまう。依存するソフトウェアは少なくて単純なほうがいい。

一方で、[Docusaurus](https://docusaurus.io), [Jupyter Book](https://executablebooks.org/en/latest/), [Quarto](https://quarto.org) みたいな、長い文章を書くためのソフトウェアも気になる。こっちは複雑路線なので、バージョンアップするとちょっと壊れる、みたいなものにつきあう覚悟が必要だけれど。
