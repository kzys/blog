---
title: "シェルスクリプトを書くのをやめる"
date: 2021-09-15T05:35:12-07:00
---
今年から、できるだけシェルスクリプトを書くのをやめようとしている。私が毎日 zsh に打ち込んでいるのも広義のシェルスクリプトだし、自分用の雑なスクリプトを書くことはあるけれど、チームの他の人も将来に使ったり改変したりするようなものは、なるだけ他の言語を使っている。

シェルスクリプトを書くのは難しいし、その難しさは、学ぶに値しないといったら言い過ぎかもしれないけれど、2021年に初心者が取り組むべき問題とは言い難いと思う。

### シェルは悪いプログラミング言語である

[Bash Strict Mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/) とかを使ってみても、シェルスクリプトには[落とし穴が多すぎる](https://mywiki.wooledge.org/BashPitfalls)。自分で書いたものを自分で使っている分には大丈夫なのだけど、スクリプトがチーム内で使われるようになると、考慮していなかったところ、例えばファイル名に空白文字が含まれるとか、そういうレベルの微妙なところで、ちゃんと書かれていないスクリプトは壊れたりする。

公平をきすためにいっておくと、シェルは、対話的環境でありながら、プログラミング言語でもある。ほとんどのプログラミング言語はこの二つを同時に満たそうとしていないところで、シェルはどちらにもなろうとしている。記号を多用した、文字数の少なさとしての簡潔さは、対話的環境としては正しい。

とはいったものの、その試みはあまり成功していない。普及したという意味では「成功」はしているけれど、例えば過去の遺産の全くない状態で、シェルスクリプトの仕様だけを見て「これ良いですよね?」といわれると、私は言葉を濁してしまう。最近 AWS の Marc Brooker も、

> If sh-style shell programming was invented today, everybody would think it's a sick joke.

と、[Twitter に書いていた](https://twitter.com/MarcJBrooker/status/1349014546577563652)。

プログラミング言語が必要なら、プログラミング言語だけになろうとしている言語を使った方が良い。

### シェルはあまりパワフルではないので、結果として複数の言語を混ぜることになる

シェルスクリプトが一定以上の複雑さになると、だんだん awk やら sed やら、最近だと jq なんかを呼び出すようになる。私と似たような世代/業界の人々は、キャリアのどこかでこれらの言語を学んでいる。こういう小さいソフトウェアを合わせて大きいことをするのは、Unix らしさがあって良い。

一方で、今までこれらの言語を学んでいない人からすると、awk や sed や jq は新たな障壁になる。なんでも知らないよりは知っているほうが良い。ただ、コンピュータに何かをさせるとか、私が書いたスクリプトを理解するときに、簡単な理解でいいので4つ小さなプログラミング言語を学んでください、というのはどうなのかと思う。このスクリプトはそこまで大袈裟なことをしていたっけ?

### シェルが存在しない環境のことを考えると、書いたものも、そこまでポータブルではない

これは他よりはちょっと弱いけれど。

[distroless](https://github.com/GoogleContainerTools/distroless) のような環境では、シェルも単なる一つの依存の一つでしかない。シェルならどこにでもあるから、依存を減らすためにシェルスクリプトを書こう、というのは、必ずしも真ではない。

### じゃあ代わりに何を使うの?

私は Python や Ruby を使うことが多い。個人的には Ruby が好きなのだけど、Amazon Linux 2 とか Python がデフォルトで入っているところだと、とりあえず Python を使っている。

Go や Rust も良いけれど、ビルドの過程を理解できなくても、実行しているものを直接読めるというスクリプト言語の利点は捨てがたい。[zx](https://github.com/google/zx) や [Oil](https://www.oilshell.org/) は気になるけれど、まだ試していない。

### ShellCheck 使えばいいのでは?

(2021-09-16: ここ以降は追記です)

[ShellCheck](https://github.com/koalaman/shellcheck) は良い。ただ、落とし穴を教えてくれるソフトウェアを使ってまで、落とし穴の多い言語を使う必要もないのでは、とも思う。

### Python とか Ruby でシェルスクリプトみたいなことするの面倒くさくないですか?

面倒くさい。でもシェルスクリプトをちゃんと書くのも少し、しばらくみない間に育ってきてしまったシェルスクリプトをがんばって Python や Ruby に書き直すのはかなり面倒なので、だるいなーと思いながら `import subprocess` している。

外部のプロセスをどう呼び出すかという問題、[Go の os/exec が](https://pkg.go.dev/os/exec)、

> Unlike the "system" library call from C and other languages, the os/exec package intentionally does not invoke the system shell and does not expand any glob patterns or handle other expansions, pipelines, or redirections typically done by shells.

`system(3)` の代わりではないですよ、と切り捨てているなか、Julia がシェルスクリプトっぽく書けるけど、空白の扱いなどをよしなにがんばる独自の backtick 文法を作っていて面白い。

[Running External Programs](https://docs.julialang.org/en/v1/manual/running-external-programs/)

> The command is never run with a shell. Instead, Julia parses the command syntax directly, appropriately interpolating variables and splitting on words as the shell would, respecting shell quoting syntax.

良いけど、なぜ Julia がそこを頑張るのかすこし謎。

### Python とか Ruby で書いたときに、依存パッケージとかどうしてますか?

依存パッケージが無いように、言語本体についてくるライブラリだけでがんばって書いている。

これも面倒くさいけど、GNU date 前提に `date --date '3 days ago'` なんてしているのを macOS で動かしたら BSD date ではサポートしてないぞこれ! とかやるのに比べると、もう日付の計算が普通にできるだけでありがたい...。
