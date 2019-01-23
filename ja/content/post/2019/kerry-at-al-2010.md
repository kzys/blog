---
title: '"Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications" を読んだ'
date: 2019-01-22T07:42:29-08:00
draft: true
---
[Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications][Kerry_et_al_2010] を読んだ。

従来よく計測されがちな

* Page View
* Uptime
* Latency
* Seven-day Active Users
* Earnings

あたりは、ユーザーエクスペリエンスの観点からいうと低レベル or 求めているものに対して直接的ではない。ページビューが上がったのは、ユーザーに好まれているからか、混乱するのであちこちクリックされているからなのか、わからない。

そこで著者らは

* Happiness: このプロダクトが好きですか、みたいな主観的指標。サーベイなどで取得する。
* Engagement: あるユーザーが何ページ巡ったかや、単位時間あたりの写真アップロード数など。
* Adoption: 新規ユーザー数
* Retention: ユーザーの継続率
* Task Success: ユーザーがタスクを完了するまでにかかった時間や、それまでにみたユーザー向けエラーの量など。

などを測るといいよ、と提案する。

大学との共同研究ではなく、著者らはすべて Google の人々なので、これら一つ一つに「例えば Gmail では」みたいな事例がはいっていて、そこは面白い。一方で、新手法を提案する論文なら出てくるような、同じタスクを一般的な手法と提案手法とでやってみて、これとこれは相関していて、みたいな議論は一切なく、有用性に関しての議論が「Google で使われてます!」だけなのは、ちょっと物足りない。

後半では、ゴール (達成したいこと), シグナル (それが達成できたかを示すなにか) があって、最後にメトリクス (時系列にプロットできるような指標) があるんですよ、という話もしている。

[Kerry_et_al_2010]: https://ai.google/research/pubs/pub36299