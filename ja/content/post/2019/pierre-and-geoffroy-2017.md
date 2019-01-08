---
title: '"Writing parsers like it is 2017" を読んだ'
date: 2019-01-07T20:58:30-08:00
draft: true
---

Rust のパーサコンビネーターの一つ、nom についての論文である、[Writing parsers like it is 2017][Pierre_and_Geoffroy_2017] を読んだ。著者らが「2017年らしく」と設定する基準は

* C/C++ ではなく安全な言語を使うこと
* 手書きの parser ではなく parser combinator を使うこと

正直そこまで目新しくはない。

どちらかというと、Rust + nom が実現する C/C++ との親和性とパフォーマンスでもって、既存のアプリケーションの一部を置き換えられることを示すべく、VLC の FLV パーサーや、[Suricata] という IDS (Intrusion Detection System - 侵入検知システム) の TLS パーサーを、実際に Rust で書き直してみせているのが見所かと思う。

いまどきのパーサーがどうあるべきかについては、論文ではないけれど、Aleksey Kladov の [Modern Parser Generator][Matklad] が「IDE のことをちゃんと考える」という視点を持ち込んでいて新鮮だった。

[Pierre_and_Geoffroy_2017]: http://spw17.langsec.org/papers/chifflier-parsing-in-2017.pdf
[Suricata]: https://suricata-ids.org
[Matklad]: https://matklad.github.io/2018/06/06/modern-parser-generator.html
