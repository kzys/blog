+++
date = "2017-05-11T22:55:17-07:00"
draft = false
title = "Increment のオンコール特集号"
+++

課金プラットフォームの Stripe が、なぜだか [Increment というオンライン季刊誌](https://increment.com/) をはじめていた。[創刊の辞](https://stripe.com/blog/increment) いわく

> a software engineering magazine dedicated to providing practical and useful insight into what effective teams are doing so that the rest of us can learn from them more quickly.

チームがどうこういわれると、アジャイルとか心理的安全性のはなしを思い浮かべるけど、創刊号の特集はオンコール! ということで読んでみた。

### オンコールとは

オンコール (on-call) をカタカナで検索すると医療関係の説明がよく出てくる。たとえば [専門医局](https://www.senmon-i.net/yougo/detail_14.html) というお医者さん向け転職サイトでは

> 医師をはじめ、救急担当やオペ室看護師など、医療従事者が患者の急変時や、救急搬送時に勤務時間外であっても呼ばれればいつでも対応できるように待機していること。

と説明されている。

ソフトウェア業界でいうオンコールもこれと同じで、リクエスト数が急増したとか、みたことないエラーがログに出ているとか、API の応答時間がすごく遅くなっていたりとか、そういうときに緊急の対応をする役割のことをいう。ローテーションを組んで当番制にしているチームが多いと思う。

### Increment みどころ

Increment のオンコール特集号は、オンコール入門から各企業での事例まで、幅広い話題をカバーしている。

オンコールってなにをすればいいんだろうという人は、入門的な [What happens when the pager goes off?](https://increment.com/on-call/when-the-pager-goes-off/) と、スタートアップから大企業までどういう仕組みが必要かというのをまとめた [On-call at any size](https://increment.com/on-call/on-call-at-any-size/) あたりから読みはじめるのがいいと思う。

すでにオンコールをしている人は、オンコールと大変さを軽減するための [Crafting sustainable on-call rotations](https://increment.com/on-call/crafting-sustainable-on-call-rotations/) と、様々な会社でだれがどうオンコールをしているのかを聞いてまわった [Who owns on-call?](https://increment.com/on-call/who-owns-on-call/) が参考になるだろう。

この冒頭では

> It’s difficult to pinpoint exactly when the industry changed its mind about on-call responsibilities, but the “who”, the “where”, and the “why” are relatively straightforward to uncover and understand. To determine the state of the industry, Increment spoke with over thirty industry leaders about the “who” and the “why”, and what we learned from our conversations about the industry-wide movement to put developers on-call for their software.

開発チームをオンコールにいれるのが業界全体での動きだとされていて、私はちょっとびっくりした。

流行りの SRE (Site Reliability Engineer) 職についても、Google の SRE は大きなサービスだけだとか、Airbnb では SRE だけがオンコールしないとか、いろいろと知らないことがあった。
