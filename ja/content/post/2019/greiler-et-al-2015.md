---
title: '"Code Ownership and Software Quality: A Replication Study" を読んだ'
date: 2019-02-04T09:09:12-08:00
---
[Code Ownership and Software Quality: A Replication Study][Greiler_et_al_2015] を読んだ。マイクロソフトのコードベースでオーナーシップと品質の相関を調べたよ、という論文。

先行研究として

* [Don’t Touch My Code! Examining the Effects of Ownership on Software Quality][Bird_et_al_2011]: あるバイナリ (.exe や .dll など) のオーナーシップと品質には相関がある、というのをマイクロソフトのコードベースをもとに調べた論文
* [Code Ownership in Open-Source Software][Matthieu_et_al_2014]: バイナリではなくファイルと Java パッケージという小さめの粒度で、オープンソースなソフトウェアを対象に調べたら、上記の論文ほどの相関はみられなかった、という論文

があり、この論文はそれらをうけて、1) マイクロソフトのコードベースを対象に 2) バイナリよりも小さい粒度 (ファイルやフォルダ) で調べている。

論文内では以下に挙げるようなオーナーシップ関係のメトリクスを、ファイルやフォルダといった粒度で計算して、

* ownership: もっともコミットした数が多い人が、全コミットのうちに占める割合
* minors: コミット数が50%未満の人の数
* minimals: コミット数が20%未満の人の数
* contributors: コミットした人の数

バグとのランク相関 (Spearman 相関) を求めている。論文によると、オーナーシップの強さを表す ownership とバグの数には負の相関が、反対にオーナーシップの弱さを示すような minors, minimals, contributors とバグの数には正の相関がみられたらしい。

企業からの論文で、かつバグについての話だというのに、Office, Office 365, Exchange, Windows なんてフラッグシップな製品について、実名をあげて論じられているのは、さすがマイクロソフトは偉いなあと思う。

[Greiler_et_al_2015]: https://www.microsoft.com/en-us/research/publication/code-ownership-and-software-quality-a-replication-study/
[Bird_et_al_2011]: https://www.microsoft.com/en-us/research/publication/dont-touch-my-code-examining-the-effects-of-ownership-on-software-quality/
[Matthieu_et_al_2014]: https://hal.archives-ouvertes.fr/hal-00976024/document
