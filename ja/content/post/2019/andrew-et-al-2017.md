---
title: '"Detecting Argument Selection Defects" を読んだ'
date: 2019-01-04T09:05:51-08:00
---
去年に Twitter で [Kentaro Hara さんが紹介していた](https://twitter.com/xharaken/status/1065050626223042560)

> Googleの2億行のソースコードを解析した結果、関数に渡す引数の順番を間違える系のバグは、引数の個数が6個以上になったときに著しく増えるので、引数の個数は5個以下が望ましいことがわかったという話。

Andrew et al. の [Detecting Argument Selection Defects](https://ai.google/research/pubs/pub46317) を読んだ。

題名の通り「引数の渡し間違いによるバグを見つける」ことに挑んだ論文で、著者らは提案しているアルゴリズムを [Error Prone](https://errorprone.info/) のパターンとして実装し、Google 社内のみならず、オープンソースソフトウェアにもバグを報告、実際に修正させている。ここでの「オープンソースソフトウェア」には、なんと [OpenJDK の ConcurrentHashMap も含まれている](https://bugs.openjdk.java.net/browse/JDK-8176402)。

アルゴリズムはわかりやすい。引数の宣言に使われている名前と、そこに渡されている変数やメソッドの名前とを比較して、文字列同士の編集距離をもって、元々の引数の渡しかたと、静的型的にありえる別の渡しかたについて、どちらが「もっともらしい」かを計算している。

宣言されている引数の名前群を一つの集合、実際に渡されているものの名前群をもう一つの集合として、bipartite graph (二部グラフ) を構築して、Hungarian algorithm (ハンガリアン法) で解いているのが、私にはちょっと新鮮だった。ナップザックに何かをつめるなんてインタビューでしか解かないのでは、なんて思っていてはいけない。

ちなみに、単純なアルゴリズムだけでは false positive が多いらしく、色々とヒューリスティックも実装されている。例えばメソッドやクラスの名前が backwardsFooBar だったら、引数をひっくりかえして渡しているのは意図的かもしれない。論文では「正規表現でそういう名前を見つけます」なんて漢らしいことが書いてあったけれど、Error Prone の Java コード側を見ると、[EnclosedByReverseHeuristic][EBRH] に単語のブラックリストがあった。どちらにしても涙ぐましい。

冒頭で引用した「引数の個数が6個以上」というくだりは、後半の "API DESIGN IMPLICATIONS" に登場する。一方で Error Prone の Java コード側、[ArgumentSelectionDefectChecker][ASDC] を見ると、早速引数を6つ渡していたりする。名前つき引数が無い言語は辛い。

[EBRH]: https://github.com/google/error-prone/blob/11de3e4910b83f420bf22192b58cdbe0465a5679/core/src/main/java/com/google/errorprone/bugpatterns/argumentselectiondefects/EnclosedByReverseHeuristic.java#L36
[ASDC]: https://github.com/google/error-prone/blob/11de3e4910b83f420bf22192b58cdbe0465a5679/core/src/main/java/com/google/errorprone/bugpatterns/argumentselectiondefects/ArgumentSelectionDefectChecker.java#L155