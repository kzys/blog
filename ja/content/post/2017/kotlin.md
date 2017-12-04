---
title: "Kotlin 見てみた感想"
date: 2017-12-04T06:16:13-08:00
---

[ex-mixi Advent Calendar 2017][EXMIXI] に参加して、[Kotlin のコレクションと Mapped Types][KOTLIN] について書いた。Kotlin が喧伝する Java との相互運用性 (interoperability) って実際のところなんなのか? 別に Scala と変わらないじゃないのか? という問いに対して、このコレクションまわりの設計をあげるのは、まあまあ同意してもらえる答えなんじゃないかと思う。

私は一時期 Scala に肩入れしていたので、Android におけるベター Java の位置が Kotlin に取られてしまいそうなのは残念だ。一方で、ランタイムサイズを考えると妥当な選択肢だとも思う。

サーバー側のベター Java の位置は

* Android で Google のお墨付きをえた Kotlin
* Dotty の開発もすすむ Scala
* 6ヶ月ごとのリリースになった Java

どれが来るのか、まだわからない。

そもそも誰もベター Java を必要としていなくて Go というのもありえるけど、個人的には map や fold ができるような言語に流行ってほしい。

[EXMIXI]: https://qiita.com/advent-calendar/2017/ex-mixi
[KOTLIN]: https://qiita.com/kzys/items/0950372c0a3cb2af5dcd
