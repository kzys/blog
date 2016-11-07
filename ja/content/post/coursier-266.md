+++
draft = false
date = "2016-11-07T08:40:45-08:00"
title = "Coursier のバグを直した"
+++

[Dotty](http://dotty.epfl.ch/) は Scala コンパイラを新しく書き直すプロジェクトで、Scala の設計者である Martin Odersky の所属する EPFL (スイス連邦工科大学ローザンヌ校) の人々を中心に開発が進められている。

ソフトウェアの書き直しは議論をよびがちなトピックで、2000年ごろにインターネットにいた人々だと Netscape の死と Joel Spolsky の [Things You Should Never Do, Part I](http://www.joelonsoftware.com/articles/fog0000000069.html) を思い出す人も多いと思う。たとえば、2011年にはてなブログが公開された際には、この Joel の文章をひいた [はてなは「絶対すべきでないこと」をやらかしたのか？](http://www.yamdas.org/column/technique/hatenablog.html) という文章が書かれている。

個人的には、これらの文章は煽りすぎで「ソフトウェアの書き直しをするべきかどうか」という問いには「時と場合による」としか言いようがないと思っている。

ここ数年のはなしをすると、Web アプリケーションのようなクライアント・サーバー型のソフトウェアの流行は、それ以前の明示的なダウンロードと実行をともなうソフトウェアにくらべて、書き直しのリスクを下げたと思う。たとえば、新しいコードをお客様の 10% に解放とか、でもコーナーケースにバグが見つかったから 0% に一瞬で戻すとか、さらに富豪的なものだと、同じリクエストを複数のサーバーに投げて、片側の結果は捨てるとか、こういうことは、クライアント・サーバー型で、かつクライアント側が薄いことがだいぶ助けになっていた。

一方で、最近の世の中は、ブラウザで JavaScript をたくさん実行したり、電話に明示的にソフトウェアをダウンロードさせて実行するような方向に傾いている。こういう環境で Web アプリケーション時代のいろいろなテクニックが使えるかどうかというと、私にはあまり知見がない。

Martin Odersky は、[Scalawags #38](http://scalawags.tv/scalawags-38) で、C# コンパイラの (成功した) 書き直しである Roslyn プロジェクトを引き合いに、Dotty がなぜ書き直しなのかを説明していた。

### Coursier

一方で、以前に趣味で [scala/scala (主に Scaladoc) をいろいろ直していた](https://github.com/scala/scala/commits?author=kzys) 身としては、現状のふたつコンパイラがある状況はなやましい。一方で Scala 2.12.0 の Scaladoc は、EPFL の [Felix Mulder](https://github.com/felixmulder) の変更が入っていて、びっくりするくらい見た目がよくなった。

というわけで、Scala コンパイラ以外で何か面白そうなものはないかなと探していたら、[Coursier](https://github.com/alexarchambault/coursier) を見つけた。Coursier は Maven と Ivy から jar をダウンロードするためのライブラリで、一気に jar を並列ダウンロードするので速い、らしい。

てはじめに、[再帰する pretty print 的な関数がスタックオーバーフローする](https://github.com/alexarchambault/coursier/issues/266) というバグを [深さ優先探索のループにして直すプルリクエスト](https://github.com/alexarchambault/coursier/pull/376) を出していたら、無事にマージされた。


