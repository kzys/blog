---
title: "定期的なブログ更新の良さについて"
date: 2018-01-17T20:28:01-08:00
---

ながらく「ブログなんて、書きたいときに好きなだけ書けばいい」と思っていたんだけど、去年の12月に「週に3回、月曜日と水曜日と金曜日に書く」というのを決めたら結構よかったので、今年もしばらくは「英語のブログは、毎週の月曜日に更新する」というスケジュールで書こうと思っている。日本語は隔週にしようと思っていたけど、先週に忘れてしまったので、3週間ごとになりそう。

定期的ブログ更新の良さの、半分は時間割を決めることの良さだと思う。higepon さんの [勉強方法を勉強して分かった僕に足りなかった３つのこと](http://d.hatena.ne.jp/higepon/20080811/1218456629) (2008) にある通り、

> 勉強をコンスタントに長期的に続けるならば時間割は大変有用。

> 時間割を作り実践してみて分かったが「次に何をやるべきか」に迷う時間は振り返ればとてももったいなかった。

「次に何をやるべきか」は事前に決めてしまったほうがいい。

残りの半分は、ソフトウェアの定期リリースの良さに似ている。

### 定期リリース

ソフトウェアの定期的なリリースは最近よくみかけるようになったアイデアで、Rust の [RFC 0507](https://github.com/nox/rust-rfcs/blob/master/text/0507-release-channels.md) (2014) では

> This RFC describes changes to the Rust release process, primarily the division of Rust's time-based releases into 'release channels', following the 'release train' model used by e.g. Firefox and Chrome; as well as 'feature staging', which enables the continued development of unstable language features and libraries APIs while providing strong stability guarantees in stable releases.

「リリーストレイン」モデルとも説明されている。電車のたとえは Chrome の [
Release Early, Release Often](https://blog.chromium.org/2010/07/release-early-release-often.html) (2010) でも使われている。

> We basically wanted to operate more like trains leaving Grand Central Station (regularly scheduled and always on time), and less like taxis leaving the Bronx (ad hoc and unpredictable).

従来の「書きたいことがあったらブログを書く」というスタイルは、これまた従来の「リリースに足りる変更があったらリリースする」というスタイルに似ている。

この主観的な判断は、結果としてブログの更新ないしソフトウェアのリリースを遅らせがちだ。それなりに価値のある細々とした情報 (or 細々としたバグの修正) もあるのに、著者独自の視点や良い導入/まとめ (or 目玉となる新機能の追加) が足りないといって、ずるずると公開 (or リリース) を先延ばしにしてしまう。

ブログを書いていると、こうやってお蔵入りになっている草稿の一つや二つは、誰でも管理画面やローカルのフォルダに残っているんじゃないかと思う。

### 中堅/中年プログラマこそ定期更新がおすすめ

定期的なブログの更新、自分のなかでブログに求める基準が上がりつつも、一方でブログに費やす時間がなくなっている、中堅/中年プログラマにこそおすすめだと思っている。もちろん基準は下げざるをえなくなってしまうんだけど、そこは諦める。

「今年こそもっとブログを書きたい」という代わりに「今年は毎月第三水曜日はブログを書こう」と決めるの、どうでしょうか?
