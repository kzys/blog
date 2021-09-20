---
title: "構文木のあるものを文字列として扱わない"
date: 2021-09-18T02:24:02-07:00
draft: true
---
ちょっと前に、他のチームの書いたものをセキュリティ的な観点でレビューする、という仕事があった。「SQL インジェクションはありませんか?」みたいなチェックリストを片目に AWS SDK で DynamoDB にアクセスするようなコードをレビューするのは、なかなか隔世の感があった。

私は2000年代の後半から2010年台の頭にかけて、いわゆる Web プログラマ仕事をしていて、Perl から MySQL に SQL を投げて結果を HTML に入れて返すようなものをよく書いていた。当時は SQL インジェクションとか XSS が、よくある脆弱性として語られていた。

この感じ、パブリッククラウドの SQL じゃないデータベースを使っている人々や、最終的には SQL になるけど基本的には OR マッパーを使っている人々、React で HTML を作っているような人々には伝わらないんじゃないかと思う。

### なぜ SQL インジェクションや XSS が起こるのか

SQL インジェクションも XSS も、諸悪の根源は、構造があって構文木のあるような言語 (SQL や HTML) を、その構造を理解してない低レベルな抽象 (文字列) で扱っていることにある。「構造体も最終的にはメモリ上のバイト列だから、普段から `unsigned char[]` にキャストして操作しましょう」なんてことは当時でも滅多になかったのに、HTML や SQL となると「じゃあ文字列に入れましょう」というのは、今になって考えるとなかなか野蛮だ。

最近はこういうことがなくて平和なのだけど、そういえば去年に [Firecracker にエラーメッセージに `"` が含まれると JSON が壊れるというバグがあって](https://github.com/firecracker-microvm/firecracker/pull/1952)、Rust における sprintf である `format!` しているところを [serde](https://serde.rs/) を使うように直したのだった。JSON も構造があって構文木のあるような言語だから、ただの文字列として扱わないほうがいい。

### コマンドインジェクション

プログラミング言語のサブプロセス呼び出し、とりわけ system(3) を真似たものには、同様の問題があり、可能であればシステムのシェルを呼び出さないのが主流になりつつあると思う。シェルを呼び出すと、意図しないところで[コマンドインジェクション](https://www.ipa.go.jp/security/vuln/websecurity-HTML-1_2.html)が起こる可能性がある。

Python だと [subprocess の Security Considerations](https://docs.python.org/3/library/subprocess.html#security-considerations) で

> Unlike some other popen functions, this implementation will never implicitly call a system shell. This means that all characters, including shell metacharacters, can safely be passed to child processes. If the shell is invoked explicitly, via shell=True, it is the application’s responsibility to ensure that all whitespace and metacharacters are quoted appropriately to avoid shell injection vulnerabilities.

デフォルトが安全側に倒れていることが主張されているし、Go の [os/exec](https://pkg.go.dev/os/exec) では

> Unlike the "system" library call from C and other languages, the os/exec package intentionally does not invoke the system shell and does not expand any glob patterns or handle other expansions, pipelines, or redirections typically done by shells. The package behaves more like C's "exec" family of functions. To expand glob patterns, either call the shell directly, taking care to escape any dangerous input, or use the path/filepath package's Glob function. To expand environment variables, use package os's ExpandEnv. 

そもそもシステムのシェルを経由したコマンド呼び出しができない。

Python や Go に比べると、Julia のサブプロセス呼び出しは、文字列を介したサブプロセス呼び出しの書き味を保ちつつ、でもそれを安全に取り扱う、というのを目指していて良い。

[Running External Programs](https://docs.julialang.org/en/v1/manual/running-external-programs/)

> In general, the Julia backtick syntax is carefully designed so that you can just cut-and-paste shell commands as is into backticks and they will work: the escaping, quoting, and interpolation behaviors are the same as the shell's. The only difference is that the interpolation is integrated and aware of Julia's notion of what is a single string value, and what is a container for multiple values.

Julia の作者の一人である Stefan Karpinski は、このあたりの設計の意図についてブログで語っている。

* [Shelling Out Sucks](https://julialang.org/blog/2012/03/shelling-out-sucks/) (2012)
* [Put This In Your Pipe](https://julialang.org/blog/2013/04/put-this-in-your-pipe/) (2013)

### 適材適所論について

先週に書いた、[シェルスクリプトを書かない話](https://blog.8-p.info/ja/2021/09/15/bash/)はよく読まれた。前回の話も、今回の話も「それって適材適所ですよね」と言われがちな話題だと思う。

私は、自分の適材適所判断能力にあんまり信頼を置いていない。「このくらいの HTML なら `sprintf()` したらいいじゃない?」「まあ確かに...」みたいなものがだんだん育ってしまうのをよく見かけた結果、ちょっと面倒だけど後々困らなそうなものを選んでしまう傾向がある。CSV を扱うコードには、いずれ `,` と `"` を投げ込んでくるやつが現れる。終末に備えよ!

この先にあるのは、[FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) であり、スタートアップなのにマイクロサービスやろうとする大企業出身プログラマなので、程々にしないといけないけれど。
