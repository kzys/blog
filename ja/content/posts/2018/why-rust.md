---
title: "Rust に期待していること"
date: 2018-10-31T22:38:54-07:00
draft: true
---

今年は Rust に入門した年だった。"The Book" とよばれる [The Rust Programming Language](https://doc.rust-lang.org/book/) を読みはじめ、[RustConf](http://rustconf.com/) をきっかけにポートランドに家族で旅行して、職場の近くで開催されている [Seattle Rust Meetup](https://www.meetup.com/Seattle-Rust-Meetup/) にも何度か参加してみた。

変数は基本的には再代入されなくて、Option があって、パターンマッチがあって、という Rust のデザインは、趣味で Scala を書いていた身としては親しみやすい。

一方で JVM との互換性なんてものを気にしなくていい故に、null が無かったりするのは良い。6章の [The Option Enum and Its Advantages Over Null Values](https://doc.rust-lang.org/book/second-edition/ch06-01-defining-an-enum.html) では、Option を紹介する際に、Tony Hoare の有名な

> This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.

という発言が引用されていたりする。

### Rustdoc と doc.rust-lang.org

Rust の公式 ドキュメントジェネレータの Rustdoc は

* Rust コンパイラと同じレポジトリにあり
* コンパイラと比較的密結合で
* ちょっと懐かしさのある DOM を頻繁にさわる JavaScript があり
* テンプレートエンジンなど無しに、Rust のソースコードの中に HTML が埋め込まれている

という、Scala のドキュメントジェネレータである Scaladoc と良くも悪くも似た状況にある。

以前に Scaladoc に頻繁にコミットしていた身としては親しみやすく、一時期は Rustdoc の小さいバグを細かく直し、さらに [doc.rust-lang.org](https://doc.rust-lang.org) にちょっと手を出したりしていた。こういうことをしていると、結局わたしは Web 2.0 世代だなあと思う。

Rustdoc とコンパイラの密結合については、コンパイラの [save-analysis](https://github.com/rust-lang/rust/tree/master/src/librustc_save_analysis) というインターフェースだけを使うようにできないか、という議論がある。そのアイデアと Facebook の [Docusaurus](https://docusaurus.io) に着想を得たという [Doxidize](https://github.com/steveklabnik/doxidize) というのも、まだプロトタイプ段階だけど開発されている。

save-analysis は Rust コンパイラの情報をシリアライズする仕組みで、いまだと主に Visual Studio Code なんかで使われている [Rust Language Server](https://github.com/rust-lang-nursery/rls) が使っている。

### ネットワークまわり

実際に仕事で使うのならサーバーくらい書けたほうがいいなあと思い、最近は [tokio](https://github.com/tokio-rs/tokio) にも手を出している。

Rust のネットワーク周りはまだ色々と発展途上だけど、非同期 IO の足回りとして [mio](https://github.com/carllerche/mio), その上に [tokio](https://github.com/tokio-rs/tokio) を乗せて、HTTP が必要ならさらに [hyper](https://github.com/hyperium/hyper) をかぶせる、あたりまでは定番といっても良いと思う。

ここらへんが標準ライブラリに入っていないのは "battery included" ではなくてちょっと不便に思うときもある。HTTP サーバーくらい何も考えずに書けてほしい。

一方で、"battery included" ってパッケージ管理システムが後付けな時代の売り文句なのではないか、という気持ちもある。これをしたいならこれ、という定番ライブラリはあるとうれしいけど、それがプログラミング言語と一緒にリリースされるとさらにうれしいかというと、どちらかというと個別にアップデートできたりするほうがうれしいかなと思う。

### Rust で何を書くのか

本当はもうちょっとアプリケーションを書くと良いのだけど、Rust で何を書くのが良いか、というのは結構微妙な問題に思う。

GC で困るアプリケーションを書く、というのは王道で、ゲームやブラウザはそういう種類のアプリケーションだと思う。私が仕事で書いているような、分散システムの中にまぎれこんだサーバーは GC で困るのか、というと、正直 GC の遅さって p90 とか p99 とかパーセンタイルの端っこのほうしか出てこないので、呼び出し側で短めにタイムアウトきってリトライ、とかしてしまえば、まあまあ隠せてしまう。

オーナーシップは GC のためのものじゃなくて、例えばマルチスレッドとかでも助かるんですよ、というのはわかる。複数のスレッドから色々を書き換えるアプリケーションを日頃書いているかというと、うーん。まあ "fearless concurrency" ではない世界になれすぎて、日々スレッドを避け過ぎているのかもしれない。

### なんで Rust?

最近 "The Passionate Programmer" を読み返していて、良い本なんだけど、時代を感じるところもある。Ruby がクールで Java がださくて、オープンソースがかっこよかった時代の本だなあと思う。


