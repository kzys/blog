---
title: "8月ふりかえり"
date: 2019-09-03T17:25:41-07:00
---

[ブログを書き続ける能力](https://karino2.github.io/2019/08/29/0219.html) に

> ブログをある程度コンスタントに書き続ける、というのは、ブログを書く能力の一部な気がする。 書いてないと失われる、というだけでなく、書いている事で続けられるようになる、みたいな部分がある。

なるほどと思ったので、月のふりかえりを書いてみる。

### 仕事

仕事がオープンソースになったので、仕事についてもここに書けるようになったのはめでたい。8月は

* [firecracker-containerd](https://github.com/firecracker-microvm/firecracker-containerd)
* [firecracker-go-sdk](https://github.com/firecracker-microvm/firecracker-go-sdk)

あたりの細々とした問題を直していた。だんだんもう少しテーマをもって仕事したい。

あと、せっかく Firecrakcer まわりで働いているので、[Firecracker 本体の方にも小さいプルリクエスト](https://github.com/firecracker-microvm/firecracker/pull/1232)を送って、これも無事マージされた。

### 趣味

あまり手を広げずに、crates.io をやっている。仕事がオープンソースになったので、趣味のオープンソースはやらなくてもいい気もするけれど、なかなかそうはあきらめられないでいる。

* [Enable FastBoot](https://github.com/rust-lang/crates.io/pull/1715)
* [Use docker-compose to run crates.io inside Travis](https://github.com/rust-lang/crates.io/pull/1814)

前者はそろそろマージされてほしい。後者は仕事の影響でコンテナ力が高まったのを感じる。

### 読んだ本

* 『ケーキの切れない非行少年たち』
* 『老人喰い -- 高齢者を狙う詐欺の正体』
* "Zero to FIve -- 70 Essential Parenting Tips Based on Science"

[にゃるらさんの感想](https://note.mu/nyalra2/n/n39ecbfef9996) をきっかけで前者を読んで、そういえば気になっていたので後者も読んだ。認知に問題のある人が「つい」法に触れることをしてしまうのが前者の世界で、はっきりした認知と計画性でもって老人むけの犯罪をしているのが後者、というわけで対照的な話だった。

"Zero to Five" はところどころ飛ばしつつ、やっと最後まで読めた。これはとても良かったので、Anki とか使って、ちょっと記憶に留める仕掛けを作りたい。

### ポッドキャスト

NPR の [Planet Money](https://www.npr.org/podcasts/510289/planet-money/) と [The Indicator](https://www.npr.org/podcasts/510325/the-indicator-from-planet-money) をメインで聞いている。あと [Changelog](https://changelog.com) 系のいくつかと、友達のやっている [Misreading Chat](https://misreading.chat) も。

Hidden Brain の [Deep Work 回](https://www.npr.org/2019/08/26/754336716/you-2-0-deep-work) と、Changelog の [Entropy 回](https://changelog.com/news/federating-javascripts-language-commons-with-entropic-WRPX) は良かった。

子育てがテーマの [The Longest Shortest Time](https://longestshortesttime.com) が終わってしまうのは残念。残念といいつつあんまりコンスタントには聞けていなかったけど。

### 週報から

* Kubernetes 入門した
* TODO を紙のノートに書き出したらちょっと落ち着いた
* 子供のプールとサッカーが終わった
* [Rudy's](https://rudysbarbershop.com) で髪を切った

Kubernetes は、ちょっとごついけど、Ansible とかの YAML で宣言的にどうこうするのが first-class citizen になっていて、好きな人がいるのもわかるなあという気持ち。

### Twitter

読みすぎた。再三書いているけど、インターネットで間違っている人を見つけて怒ったり悲しんでみたりする必要は全くなく、Twitter はそういう感情をトリガーする割合が自分にとって高いので、そろそろ離れて暮らしたほうがいいような気がしている。

[2019年8月 (syntax-case実装)](https://yhara.jp/2019/08/31/aug-2019-syntax-case) でも書かれているけど、

> Twitter、頑張ってTL構築しても人々の「怒り」みたいのが流れてくるのをもう防げないし、ruby-jp眺めてたほうが目に優しい感じはある

一方でタイムラインを構築するという行為自体が、[TikTokの発明：起動すると始まること](https://youkoseki.com/f/tiktok) にあるように、ユーザーに努力を強いる行為で、もうマス向けではないんだろうなあと思う。
