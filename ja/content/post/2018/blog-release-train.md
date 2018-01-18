---
title: "定期的なブログ更新の良さについて"
date: 2018-01-17T20:28:01-08:00
---

ながらく「ブログなんて、書きたいときに好きなだけ書けばいい」と思っていたんだけど、去年の12月に「週に3回、月曜日と水曜日と金曜日に書く」というのを決めたら結構よかったので、今年もしばらくは「英語のブログは、毎週の月曜日に更新する」というスケジュールで書こうと思っている。日本語は隔週にしようと思っていたけど、先週に忘れてしまったので、3週間ごとになりそう。

定期的ブログ更新の良さの、半分は時間割を決めることの良さだと思う。higepon さんの [勉強方法を勉強して分かった僕に足りなかった３つのこと](http://d.hatena.ne.jp/higepon/20080811/1218456629) (2008) にある通り、

> 勉強をコンスタントに長期的に続けるならば時間割は大変有用。

> 時間割を作り実践してみて分かったが「次に何をやるべきか」に迷う時間は振り返ればとてももったいなかった。

私はまだ道半ばで徹底できてはいないけれど「次に何をやるべきか」は事前に決めてしまったほうがいい。

ふと時間が空いたときに「今日ブログを書くか、書かないか、書くとしたら何について書くか」なんて考え出して、その日のうちに公開までたどり着くのは難しい。その難易度は「ふと空いた時間」が短くなっていくにつれて上がっていく。

残りの半分は、ソフトウェアの定期リリースの良さに似ている。

### 定期リリース

ソフトウェアの定期的なリリースは、最近よくみかけるようになったアイデアで、Rust の [RFC 0507](https://github.com/nox/rust-rfcs/blob/master/text/0507-release-channels.md) (2014) では

> This RFC describes changes to the Rust release process, primarily the division of Rust's time-based releases into 'release channels', following the 'release train' model used by e.g. Firefox and Chrome; as well as 'feature staging', which enables the continued development of unstable language features and libraries APIs while providing strong stability guarantees in stable releases.

「リリーストレイン」モデルとも説明されている[^RT]。電車のたとえは Chrome の [
Release Early, Release Often](https://blog.chromium.org/2010/07/release-early-release-often.html) (2010) でも使われている。

> We basically wanted to operate more like trains leaving Grand Central Station (regularly scheduled and always on time), and less like taxis leaving the Bronx (ad hoc and unpredictable).

従来の「書きたいことがあったらブログを書く」というスタイルは、これまた従来の「リリースに足りる変更があったらリリースする」というスタイルに似ている。

この主観的な判断は、結果としてブログの更新ないしソフトウェアのリリースを遅らせがちだ。それなりに価値のある細々とした情報 (or 細々としたバグの修正) もあるのに、著者独自の視点や良い導入/まとめ (or 目玉となる新機能の追加) が足りないといって、ずるずると公開 (or リリース) を先延ばしにしてしまう。

ブログをしばらく書いていると、こうやってお蔵入りになっている草稿の一つや二つは、誰でも管理画面やローカルのフォルダに残っているんじゃないだろうか。

### 中堅/中年プログラマこそ定期更新がおすすめ

定期的なブログの更新は、自分のなかでブログに求める基準が上がりつつも、一方でブログに費やす時間は減りつつある、中堅/中年プログラマにこそおすすめだと思っている。突然に徹夜してみたり、休日を丸々潰したりできる人なら、こういう細かいことを考えることはない。

上がる基準と、減る時間にどう対処するのか、という観点でまとめると「基準を下げながら、時間を効率的に使う」という方法だとも言える。ただし、基準の部分は更新頻度を減らすことで (例えば、毎週のかわりに毎月としてみることで) 調整可能だとも思う。

「今年こそもっとブログ、できれば月に一回以上は書きたい」という代わりに「今年は毎月第三水曜日にブログを書こう」と決めるの、どうでしょうか?

[^RT]: ただし、単純に「リリーストレイン」とだけ言った場合には、複数のチーム間のリリースの同期に重きが置かれた用例もみられるので、ここでは「定期リリース」という語を主に使っている。