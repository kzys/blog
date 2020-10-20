---
title: 'Misreading Chat で "From Laptop to Lambda: Outsourcing Everyday Jobs to Thousands of Transient Functional Containers" について話した'
date: 2020-10-19T21:44:46-07:00
tags: ["Paper", "Podcast"]
---
友達のやっている [Misreading Chat](https://misreading.chat/) というポッドキャストで、[From Laptop to Lambda: Outsourcing Everyday Jobs to Thousands of Transient Functional Containers](https://www.usenix.org/conference/atc19/presentation/fouladi) について[話してきました](https://misreading.chat/2020/10/19/87-from-laptop-to-lambda-outsourcing-everyday-jobs-to-thousands-of-transient-functional-containers/)。録音された自分の声を聞くのは慣れないけれど、好きなポッドキャストなので出れてよかった!

以下、収録中にうまく説明できなかったり、調べたりなかった部分の補足です。

### 全体の流れ

GitHub の README.md にも貼られている、[ffmpeg をコンパイルするスクリーンキャスト](https://asciinema.org/a/257545) がわかりやすい。

* `gg init` で `.gg/` ディレクトリを作る。
* `gg infer make` とすると、`gcc` などを、環境変数 PATH を書き換えることで gg のものに置き換えた環境で、`make` を実行する。
  * `gg infer` が対応していれば[^MS]、任意のコマンドが実行できます。
* この時点でローカルに make を実行したときとおなじように `ffmpeg` という実行ファイルができる。
  * でも、これらは `#!/usr/bin/env gg-force-run` というのがついたシェルスクリプトで、本当の実行結果ではない。
  * この時点で gg IR で出来た "thunk" と呼ばれるファイルも、ローカルに作られます。
* ここで `gg force ffmpeg --jobs 2000 --engine lambda` などとすると
  * まずは thunk をクラウドにアップロードして
  * force サブコマンドの引数になっている `ffmpeg` の thunk をクラウド上で評価して
  * それに必要な thunk も再起的に評価されていって
  * 最終的に本物の `ffmpeg` がクラウド上で作られて
* それがクラウドからダウンロードされて、ローカルの `ffmpeg` が本物に入れ替わる

という動作をしています。UI がちょっと凝っていて、実行中に、計算にかかる金銭的なコストが下に出るのがかわいいですね。[^COST]

### 並列数は?

これは 5. Evaluation のところに記載があって、

* コンパイル: Chromium の場合 8,000 (5.2.3)
* ユニットテスト: 8,000 (5.3)
* 動画エンコーディング: 記載なし
* 物体認識: 記載なし

となっています。ちなみに、Lambda 自体の並列数は、[デフォルトで 1,000 だけど、申請すれば "hundreds of thousands" まであげられます](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)。

### 自分のプログラムを gg で動かすのって大変なの?

gg のレポジトリの中に、[フィボナッチ数を計算する](https://github.com/StanfordSNR/gg/tree/master/examples/fibonacci)例があるけれど、これを見ると大体雰囲気がわかると思う。

ここでは、`add` と `fib` という二つの実行ファイルを作って、それを gg で実行している。

`add` のほうはファイルから数字を二つ読み込んで、それを足すだけのプログラムで、特に面白いところはない。

`fib` のほうは gg の SDK を使っていて、`fib(n-1)` を計算する thunk と、`fib(n-2)` を計算する thunk を作って、それを前述の `add` に渡す、という動作をしている。ここで、個々の thunk から再起的にまた thunk が作られていくんだけど、その再帰的に thunk を作る部分がクラウドで実行されていて、ローカルで計算に必要なグラフを作りきらなくてもいいのが、gg の見所のひとつだと思う。

この実行ファイルの切れ目が、そのまま分散して実行されるときの単位になる、というパラダイムにのれれば、自分のプログラムを gg で動かすことはできると思う。

[^COST]: [engine_gcloud.cc](https://github.com/StanfordSNR/gg/blob/62579e141a96f30312cd9a1a2d6f91302e3899d5/src/execution/engine_gcloud.cc#L127) のほうはゼロで決め打ちになっているけど。
[^MS]: 論文では、これを "model substitution" と呼んでいます。[src/models/wrappers](https://github.com/StanfordSNR/gg/tree/master/src/models/wrappers) の下に、例えば gcc という名前だけど model-gcc を呼ぶだけのシェルスクリプトが、その上のディレクトリに実際の model-gcc の実装があります。
