---
title: '"Discovering API Usability Problems at Scale" を読んだ'
date: 2019-02-19T00:56:32-08:00
tags: ["Paper"]
---
[Discovering API Usability Problems at Scale](https://ai.google/research/pubs/pub47031) (2018)

編集中のソースコードのスナップショットを定期的に取ることで API のユーザービリティの問題を見つけられるんじゃないか、という Google の人々の論文。著者らは Java のソースコードにおけるメソッド呼び出しの推移、例えば obj.a(...) を obj.b(...) に変更した、という情報を集めることで

* コレクション (例えば ImmutableList) の of/copyOf や、add/addAll のとりちがい
* Protocol Buffers における ByteString に copyFrom ではじまるメソッド多すぎ問題
* Google Guava の Optional vs. Java 8 の Optional
* Android の Logging API 自体は使いづらくないけど、ログレベルを決めるのは難しい

みたいな問題をデータでもって示している。Optional のメソッド群については論文中に推移の有効グラフがあるけれど、これは「fromNullabe あるよね... え? この Optional は Java 8 のほうだから ofNullable なの?」みたいな Java の人々のつらみが出ていて良いです。

Google 社員じゃない身としては、冒頭でふれられる

> For most software development at Google, file versions are recorded automatically by a FUSE-based file system, such that every save from the developer’s editor will be recorded as a separate version. Furthermore, some editors at Google save automatically at regular intervals, such as every 30 seconds.

こういう部分も興味深い。でも FUSE でがんばるのは Mac なラップトップで開発したりするとき困らないのかなあ。
