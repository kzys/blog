---
title: "Nuxt.js + D3 で自分のブログを可視化する"
date: 2018-11-08T22:55:05-08:00
---

[blog.8-p.info](https://blog.8-p.info/) のトップページは、いまも更新している日本語ブログと英語ブログ、さらに過去のブログに投稿した記事のタイトルとリンクを JSON にしたものを読み込んで、目次っぽく表示するようになっている。

このページを Nuxt.js 化したのは去年のはなしだけど、最近ここに D3 で GitHub 風のカレンダーを追加して、あわせて全体のデザインも刷新してみた。可視化してみると、日本語をメインで書いていた年と、英語をメインで書いていた年、ちょっと悲しいけれど徐々にまばらになる投稿量とかが一目瞭然で面白い。

### Nuxt.js

Nuxt.js は去年に blog.8-p.info で使いだして、今年は [8-p.info](https://8-p.info) のほうでも使いだした。

Nuxt.js, というか Vue.js の [Single File Component](https://vuejs.org/v2/guide/single-file-components.html) は見た目が HTML に近くてとっつきやすいのが良い。

React を使っている [Next.js](https://nextjs.org) とか、React + GraphQL の [Gatsby](https://www.gatsbyjs.org) も気になるけれど、数枚の静的ページにヘッダが共通で、くらいのものを書くのに .js の中に JSX を書くのは、個人的にはちょっと大げさすぎるように思う。

### D3

D3 は定期的に使ってみては、しばらくすると完全に使いかたを忘れてしまうライブラリなのだけど、またがんばって使ってみた。

[Thinking with Joins](https://bost.ocks.org/mike/join/) なんていわれるように、データと DOM とを "join" することで DOM の mutation を管理しようとする D3 と、HTML を毎回作り直して、差分を計算することで DOM の mutation を管理しようとする Vue, React 世代のライブラリとの間だと、思想的にちょっとぶつかるところがある。

探してみると、[D3 + Vue.js](https://bl.ocks.org/lorenzopub/02ccce43d708919ca7c0b242fe1c93f2) とか、Vue のテンプレート側で SVG を生成する流派の人もいるけれど、私はそこまで Vue.js 愛が無い。今回は [Watchers](https://vuejs.org/v2/guide/computed.html#Watchers) でプロパティを監視して、更新があったタイミングで D3 を呼び出すようにしてみた。

### Material Design

「ここをクリックすると開きますよ」というのを +/- で表すのはあまりに90年代すぎるかなと思って、この部分は [Material Design](https://material.io/design/components/lists.html) を参考に、V 字のアイコンを [Font Awesome](https://fontawesome.com) を使って表示している。

### まとめ

Nuxt.js + D3 で自分のブログを可視化してみた。

* Nuxt.js はヘッダとフッタを共通化する程度でも、JavaScript をあまり書かなくても便利
* D3 と Vue や React を組み合わせるのは、思想や機能がぶつかるところもあるけど、なんとかなる
* Material Design は UI カタログとしても使える

フロントエンド、仕事では最近あまり触らなくなってしまったけど、たまにやると楽しいですね。やっぱり絵が出るのは良い。
