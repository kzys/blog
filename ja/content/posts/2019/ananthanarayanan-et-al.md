---
title: '"Keeping Master Green at Scale" を読んだ'
date: 2019-03-25T23:47:16-07:00
---

[Keeping Master Green at Scale](https://dl.acm.org/citation.cfm?id=3303970) (2019)

Cindy Sridharan さんが [Twitter で紹介していた](https://twitter.com/copyconstruct/status/1109132045517643776)、Uber の分散ビルドシステムに関する論文を読んだ。

> Giant monolithic source-code repositories are one of the fundamental pillars of the back end infrastructure in large and fast-paced software companies.

という力強い宣言からはじまっていて身構えるけど、ほとんどは iOS と Android むけのビルドの話です。

コミットされてからテストを走らせるんじゃなくて、テストが通ったものだけコミットする、というのはそこまで新規性のある話ではないけれど、Uber のシステム --- SubmitQueue の新しいところは、あるコミットが全てのテストを通るかどうかを機械学習でもって予測して、成功しそうなコミットの組み合わせを並列にビルドしてしまう、というところにある。

機械学習といっている部分は素朴で、過去のビルド結果を使った教師つきの logistic regression (ロジスティック回帰) に、変更されたファイル数であるとか、事前に走る (明言されてないだろうけど速い) テストの結果やらを突っ込んでいる。恐ろしいことに、開発者というのも言及されているけど

> Developers also play a major role in determining whether a change may succeed or not.

これはそのあとに

> We also note that while developer features such as the developer name had high predictive power, the correlation varied based on different developers.

とされている。

古の昔に、人々は [Commit-and-Run Is a Crime](https://www.oreilly.com/library/view/97-things-every/9780596800611/ch15.html) なんていったものだけど、こういう最近の成果をみると、Commit-and-Run を許すシステム自体が過去のものになるのかなあと思う。