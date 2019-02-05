---
title: '"Code Ownership and Software Quality: A Replication Study" を読んだ'
date: 2019-02-04T09:09:12-08:00
---

[Code Ownership and Software Quality: A Replication Study][Greiler_et_al_2015] を読んだ。マイクロソフトのコードベースを対象に、オーナーシップと品質との相関を調べた論文。先行する研究として

* [Don’t Touch My Code! Examining the Effects of Ownership on Software Quality][Bird_et_al_2011]: マイクロソフトのコードベースを対象に、あるバイナリ (.exe や .dll など) のオーナーシップと品質には負の相関があるというのを調べた論文
* [Code Ownership in Open-Source Software][Matthieu_et_al_2014]: オープンソースなソフトウェア対象に、バイナリではなくファイルと Java パッケージという小さめの粒度で、上記の論文ほどの強い相関はみられなかった、という論文

の二つがあり、この論文はそれらをうけて、1) マイクロソフトのコードベースを対象に 2) バイナリよりも小さい粒度 (ファイルやディレクトリ) で、その相関を調べている。結論からいうと、オーナーシップと品質にはやっぱり負の相関があったらしい。

ソフトウェアないしコンポーネントのオーナーシップというのは、ひとえには決めづらい。論文では

* ownership: もっともコミットした数が多い人が、全コミットのうちに占める割合
* minors: コミット数が50%未満の人の数
* minimals: コミット数が20%未満の人の数
* contributors: コミットした人の数
* avgownership: ownership のディレクトリごとの平均
* manager3: コミットした人々のユニークな Level 3 マネージャーの数

などなど色々なメトリクスでもって、なんとかオーナーシップの強さ、というのを求めて、それとファイルやディレクトリごとのバグの数とを比較するべく、ランク相関 (Spearman 相関) を求めている。ちなみに Level 3 というのは

> For Microsoft, we can infer that managers represent at level 3 company divisions, at level 4 broader product teams, and at level 5 smaller sub teams within product teams.

部長、くらいのところなんでしょうか。

企業からの論文で、かつバグについての話だというのに、Office, Office 365, Exchange, Windows なんてフラッグシップな製品について実名をあげて論じて、さらに

> With Office, we could see that there are two types of weak ownerships: intentional weak ownership, which was due to the aforementioned reasons, and unintentional ownership.

こういう不都合なこともちゃんと書くのは、なかなかえらいなあと思う。

[Greiler_et_al_2015]: https://www.microsoft.com/en-us/research/publication/code-ownership-and-software-quality-a-replication-study/
[Bird_et_al_2011]: https://www.microsoft.com/en-us/research/publication/dont-touch-my-code-examining-the-effects-of-ownership-on-software-quality/
[Matthieu_et_al_2014]: https://hal.archives-ouvertes.fr/hal-00976024/document
