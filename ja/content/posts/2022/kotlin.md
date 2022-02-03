---
title: "Kotlin と Scala の比較"
date: 2022-02-02T23:01:13-08:00
---
水島さんが [Scalaの学習コストについての私見](https://kmizu.hatenablog.com/entry/2022/01/25/093221) で、

> 実際、Scala難しいならKotlinも難しいとなりそうなくらい両者は似ている……というより、KotlinはScalaの主要な機能をほぼ継承しているのですが、その辺りはJetBrainsのマーケティングが上手なのと、ライブラリの互換性を軽視しなかったこと、厳格な立場をとる人があまりいないこと、JetBrainsの政治がうまい辺りが主要因だろうなと感じています（これは悪口ではなくて、逆にLightbendの言語マーケティングが上手くなかったというのが正直な実感です）。

と書いていたけれど、マーケティング、互換性、コミュニティ、政治、といってしまうのは、言語も含めたソフトウェアそのものの違いを無視しすぎていると思うので、そういう話をします。

### Kotlin と Mapped Types

以前に書いた、[Kotlin のコレクションと Mapped Types](https://qiita.com/kzys/items/0950372c0a3cb2af5dcd) (2017) でもふれたはなしだけど、Kotlin はコレクションまわりのクラスをコンパイラの中で特別扱いしている。

[Mapped types](https://kotlinlang.org/docs/java-interop.html#mapped-types)

> Kotlin treats some Java types specifically. Such types are not loaded from Java "as is", but are mapped to corresponding Kotlin types. The mapping only matters at compile time, the runtime representation remains unchanged.

これは、implicit conversion からはじまって、

[scala.collection.JavaConversions](https://www.scala-lang.org/api/2.12.1/scala/collection/JavaConversions$.html)

> The transparent conversions provided here are considered fragile because they can result in unexpected behavior and performance.
>
> Therefore, this API has been deprecated and JavaConverters should be used instead. JavaConverters provides the same conversions, but through extension methods.

それが上手くいかず、結局は明示的に変換しなくてはならなくなった Scala と、だいぶ様子が違っている。

Scala は、言語のほうに最小限の足場となるような機能を用意しておいて、その上に色々を作るのはライブラリでやります、という言語だと思う。言語側に implicit conversion を入れて、Java のコレクションとの相互変換は標準ライブラリとして提供するというのもそうだし、[任意のメソッドをドットや括弧なしで呼び出せるというルールを作って](https://docs.scala-lang.org/ja/tour/operators.html)、その上に演算子オーバーロードを作るのもそう。

これは Scala だけではなく、例えば C++ もそういう指向があったように思う。STL のコンテナはただのライブラリなんですよ、というのは C の配列を知っている身には新鮮で、良いことのように思えたのを覚えている。

### IDE

全く別の話として、Kotlin は IDE ベンダの言語で、IntelliJ IDEA でちゃんと動くことが最初から指向されていたところも大きい。ただ、これは Borland の Delphi から Microsoft の C# までずっと続いていることで、あまり珍しいことでもない。

でも、当時 Scala が好きで、でも Emacs を使っていた私は、IDE の価値にあまり気づいていなかった。個人的な話を続けると、私はそのあと結構 Java を書いて、この「IDE に背中をあずける」感覚というのを実感する。IDE が警告を出したら、それは実際に何か問題がある、というのを前提としている人々にとって、IDE そのものの出来を疑わなくてはいけないのは厳しい。

### 価値観のちがい

そういえば、2018年の Scala By The Bay では、Scala を書いたことがないという Bryan Cantrill が出ていて、[ソフトウェア/プラットフォームには "values" がある](https://www.youtube.com/watch?v=2wZ1pCpJUIM)、という話をしていた。日本語にすると価値観だろうか。

例えば、C は Interoperability, Performance, Portability, Simplicity で、Scala なら Composability, Expressiveness, Interoperability, Integrity, Robustness かな、とこんな感じ。

氏がスライドで上げている色々から選ぶなら、Kotlin は Approachability や Compatibility を、Scala よりは重視していて、それはコミュニティの差というより、言語の設計から、いつ何に投資するかという優先順位づけまでに影響していると思う。
