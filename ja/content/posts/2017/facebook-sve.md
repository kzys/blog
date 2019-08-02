---
title: 'Facebook は動画をどう扱っているのか? "SVE: Distributed Video Processing at Facebook Scale" を読んでいる'
date: 2017-12-18T19:22:36-08:00
---

[The Morning Paper で紹介されていた論文][TMP]を読んでいる。全体像について書くと The Morning Paper の翻訳になってしまいそう[^1]なので、個人的に見所だったところだけ紹介。

### スマートフォン時代のクライアント

SVE は動画を GOP (group of pictures) という短い動画に変換して扱っていて、その分割はクライアントの側で行われている。

> The first change is that the client breaks the video up into segments consisting of a group of pictures (GOP), when possible, before uploading the segments to the front-end. Each GOP in a video is separately encoded, so each can be decoded without referencing earlier GOPs.

GOP 分割は必須ではなくて、古いクライアント向けにはフォールバックも用意されている。

> Some older clients cannot split videos into GOP segments before uploading. The preprocessor does the GOP splitting for videos from those clients.

さらにクライアントは動画の再エンコードさえすることもある。

> We decrease the latency for uploads through client-side re-encoding of the video to a smaller size when three conditions are met: the raw video is large, the network is bandwidth constrained, and the appropriate hardware and software support exists on the client device. We avoid re-encoding when a video is already appropriately sized or when the client has a high bandwidth connection because these uploads will already complete quickly. Thus, we prefer to avoid using client device resources (e.g., battery) since they will provide little bene t. Requiring all three conditions ensures we only do client-side re-encoding when it meaningfully decreases pre-sharing latency.

私はいまだに「クライアントは非力で API も少ないし、色々複雑な作業はサーバー側でやったほうが、エラーもログも簡単に収集できるし平和だよね」というクライアント == ブラウザ時代の空気感を暗黙の前提にしてしまいがちで、SVE のクライアント == スマートフォンむけに Java/Objective-C や C++ で書かれているソフトウェアが頑張る感じは新鮮だった。

### HHVM と Hack

Facebook でも、こういうバックエンドのシステムだったら Hack とか使わずに Java なり Python で書くのかな、となんとなく思っていたら

> All workers are equipped with HHVM, a virtual machine supporting just-in-time compilation for all SVE tasks, which in turn are Hack functions deployed continuously from our code repository. During execution, each task is wrapped within framework logic that communicates with SVE components to prepare input, propagate output, and report task results.

普通に HHVM + Hack で動いているらしい。"Hack functions deployed" なんて言い回しはちょっと AWS Lambda っぽくもある。

### To be shared

論文全体に渡って

> Uploading and processing are on the path between when a person uploads a video and when it is shared. Lower latency means users can share their content more quickly.

"used" みたいなぼんやりした動詞ではなくて、ずっと "shared" を使っているのも印象的だった。

> Taken together, these improvements enable SVE to reduce the time between when an upload completes and a video can be shared by 2.3x-9.3x over MES.

単純に「シェアできる状態になる」というのが全体のパイプラインのうち重要なマイルストーンなのかもしれないけど、サービスを特徴づける動詞があって、それをエンジニア側もメトリクスとして使っている、というのは、なんか会社としてちゃんとしていて良いなあと思う。

[^1]: 翻訳を読みたいひともいるかもしれないけど、[プログラマと英語 1: 野良翻訳](http://anemone.dodgson.org/2016/09/10/doing-english-1-translations/)で書かれている色々に同意する部分もあり、自分では翻訳しません。
[TMP]: https://blog.acolyer.org/2017/11/27/sve-distributed-video-processing-at-facebook-scale/