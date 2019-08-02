---
title: 'パーソナライズ検索ってどうなってるの? "Personalized Ranking Model Adaptation for Web Search" を読む'
date: 2017-12-06T23:59:41-08:00
---

検索について、形態素解析、N-gram, PageRank とか雑多なことは知っているんだけど、例えば「検索をパーソナライズしたい」なんてときに全くわからないので、色々 Google で論文を巡っていた。

[Personalized Ranking Model Adaptation for Web Search][WANG] は University of Illinoi, Microsoft Research, Microsoft Bing の人々の書いた論文で、普通に検索して最初のページをなんとかパーソナライズするのではなく

> Conventional personalization methods learn separate models of user interests and use those to re-rank the results from the generic model.

こう、なんか上手いことやるらしい。読んでみてはいるけど、文字を追っている感じで、色々勉強しないと理解するのは難しそう。[日本語で解説しているスライド][UCHIUMI]はあったけど、それでも難しい。

論文に引用されているものを地味に読んでいくか、Kaggle の [Personalized Web Search Challenge にある論文][KAGGLE]を読んでいったりすると、来年の Q1 くらいには理解できるようになると思いたい。

こういう検索と機械学習を組み合わせた分野は Learning to Rank (ランキング学習) と呼ばれているらしい。これについては [DSIRNLP の発表資料][SUHARA]がわかりやすかった。

[WANG]: https://www.microsoft.com/en-us/research/publication/personalized-ranking-model-adaptation-for-web-search/
[UCHIUMI]: https://www.slideshare.net/uchumik/sigir2013-retrieval-modelsandrankingipub
[KAGGLE]: https://www.kaggle.com/c/yandex-personalized-web-search-challenge#related-papers
[SUHARA]: https://www.slideshare.net/sleepy_yoshi/dsirnlp1
