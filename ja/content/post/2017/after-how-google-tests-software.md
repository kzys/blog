+++
date = "2017-02-17T09:17:24-08:00"
title = "その後の『テストから見えてくるグーグルのソフトウェア開発』"
draft = false
+++

O'Reilly の [Site Reliability Engineering](https://landing.google.com/sre/book.html) という本が無料になっていた。すこし前に Kindle で買っていて、でもまだ読みきっていなかったので、すこし損した気持ちになる。

SRE 本を読んでいて思い出すのは『[テストから見えてくるグーグルのソフトウェア開発](https://www.amazon.co.jp/ebook/dp/B00IE3B522)』という本のことだ。私は [Google Testing Blog](https://testing.googleblog.com/) を読む程度には Google ウォッチャーなので、この本は原書が出た時点で読んで[ブログ](http://2013.8-p.info/japanese/06-01-how-google-tests-software.html)にも書いた。

一方で『テストから見えてくるグーグルのソフトウェア開発』と "Site Reliability Engineering" には大きな違いもある。

前者は、グーグルのなかでテストに関わるエンジニア職である SET (Software Engineer in Test), TE (Test Engineer) の組織構造や仕事の内容を紹介しつつも、最後にはこれらの職の消滅を予言ないし期待して終わる。一方で、後者は、SRE (Site Reliability Engineer) という職を新しく定義して、これから売り込もうという本のようにみえる。

### その後の James Whittaker とその後の SET

実際に『テストから見えてくるグーグルのソフトウェア開発』の著者のひとりである James Whittaker は、はじめは [Test Director として Google に入社](https://testing.googleblog.com/2009/06/james-whittaker-joins-google.html)し、Google Testing Blog にも精力的に投稿する「テストのひと」だったけど、最終的には Google+ の Development Director というテスト色の薄い ([LinkedIn](https://www.linkedin.com/in/james-whittaker-22987813/) いわく "Engineering Director for Google+ APIs and dev/test tool chain" なのでゼロではないけれど) 仕事につく。

でも、その後には [Google の変化と Google+ に失望](https://blogs.msdn.microsoft.com/jw_on_tech/2012/03/13/why-i-left-google/)して、前職の Microsoft に戻ってしまう。Google Testing Automation Conference 2011 のキーノートが「正しくものを作る以前に、正しいものを作るべきだ」という内容の [Test is Dead](https://www.youtube.com/watch?v=X1jWe5rOu3g) だったことを考えると、Google+ に失望して退職というのは、ちょっと苦味のある話だ。

一方で、James Whittaker なき後の Google では、SET を [SETI (Software Engineer, Tools & Infrastructure) と改名](https://testing.googleblog.com/2016/03/from-qa-to-engineering-productivity.html)する。ここではもう「テスト」は名前に含まれなくなってしまっている。

SET から SETI への変化で、業務や組織構造が実際にどれだけ変わったのかは、Google 社員ではない私にはいまひとつわからない。ただ『テストから見えてくるグーグルのソフトウェア開発』の予言と期待は、部分的には成就したといっても良いのではないかと思う。

### Site Reliability Engineering vs. Site Reliability Engineer

そういう歴史をふまえると、availability と latency と、あと何個かを足して "Site Reliability *Engineering*" と呼ぶのには便利なこともあるかもしれないけど、"Site Reliability *Engineer*" は発展的に解消されないのかと少し疑問に思う。とりあえず本を読んでみます。
