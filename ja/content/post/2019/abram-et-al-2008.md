---
title: "Reading Beside the Lines: Indentation as a Proxy for Complexity Metrics" を読んだ
date: 2019-01-05T15:51:07-08:00
draft: true
---
去年に The Pragmatic Bookshelf から出ている "Software Design X-Rays" という本を読んだけど、そこで紹介されていた論文の一つ、[Reading Beside the Lines: Indentation as a Proxy for Complexity Metrics][Abram_et_al_2008] を読んだ。

ソースコードの複雑さを示す指標には McCabe’s Cyclomatic Complexity (循環的複雑度) や Halstead’s complexity metrics (こちらは定訳が無い?) があるけれど、かわりにインデントの深さをみるのはどうでしょう、という論文。著者らは SourceForge から色々な CVS レポジトリをダウンロードしてきて、リビジョンごとの diff に既存の複雑さを示す指標と、提案しているインデントベースの指標を計算して、それらの相関について議論している。

結論からいうと、インデントの総量 (SUM) と、標準偏差 (STD) は比較的高い相関係数を示したとのこと。一方で単純に行数を数えただけ (LOC) でも複雑さを示す指標にそれなりに相関があるのはすこし拍子抜け。

著者の [Abram Hindle][Abram], [Michael W. Godfrey][Michael], [Ric Holt][Ric] は、その後もソフトウェアの開発プロセスに関する論文を色々と書いているので、読んでみるのも面白そう。

[Abram_et_al_2008]: https://plg.uwaterloo.ca/~migod/papers/2008/icpc08-abram.pdf
[Abram]: https://softwareprocess.es/static/SoftwareProcess.es.html
[Michael]: https://plg.uwaterloo.ca/~migod/
[Ric]: https://plg.uwaterloo.ca/~holt/