---
title: "また Web3 の話"
date: 2022-07-21T23:11:56-07:00
---
インプレスから出ている、[いちばんやさしいWeb3の教本](https://book.impress.co.jp/books/1121101131)が[良くない](https://twitter.com/tadokoro/status/1549542379157594112)という話からはじまって、

> 「いちばんやさしいWeb3の教本」というのが試し読みできたので開いてみたら、出だしから「Web1の時代は1970年代から80年代にかけて整備され」とめちゃくちゃなことが書いてあってその先を読む気力が失せた。インターネットとWebを混同している? 専門家なのに? いろいろ謎。

そこから、

* [最近のWeb3への雑感](https://yuheinakasaka.github.io/gialog-diary/articles/14)
* [Web3のここがすごい](https://laiso.hatenablog.com)

と、また Web3 の話が盛り上がっている。

私はいわゆる GAFA の一つ (Amazon) に勤めているので、人々の「現状の GAFA はいかがなものか」という話には関心がある。また、インターネットの利用者の一人として、例えば明日 Google や Amazon が私のアカウントを閉じたらすごく困るよな、という懸念はあり、データの可搬性みたいなものが確保されるといいですよね、というのもわかる。

パブリックなブロックチェーンにデータを記録する、というのが一般化したら、データの可搬性に関する問題は少しだけ解決する。データの所有者は私企業ではなく、私企業はデータを読み書きするアプリケーションを提供する。これは、例えば IMAP サーバーにメールがあって、メールを読み書きするソフトウェアは各社が開発していましたよ、という時代に戻るわけで、それをもって「インターネットの真の姿を取り戻す!」ということもできると思う。

### パブリックなブロックチェーンにデータを記録するために解決しなければいけない問題は、解くに値する問題なのか

ただ、パブリックなブロックチェーンにデータを記録する、というのには色々と副作用がある。まず遅い。また、私は自分のメールも、だれと頻繁にメールをやりとりしているかも、他人には知られたくない。むかしに送って後悔しているメールは、手元からだけでも消しておきたい。

ここで、ブロックチェーンに詳しい人なら「速度の問題はロールアップで緩和できるし、ブロックチェーンに記録するデータはもちろん暗号化できます。人間とウォレットは 1:1 ではなく、1:N でいいし、これはナカモトサトシの論文 [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) の6ページ目で検討されていて...」となるのだろう。ただ、私からすると「そもそも、パブリックなブロックチェーンに、プライベートなデータを記録するのは、筋の悪い応用なのでは?」と思ってしまう。

昔々に、Paul Graham は [Hackers and Painters](http://www.paulgraham.com/hp.html) で「間違った前提からはじめると、たくさんの問題が生まれる」と書いていた。

> Nothing yields meaty problems like starting with the wrong assumptions. Most of AI is an example of this rule; if you assume that knowledge can be represented as a list of predicate logic expressions whose arguments represent abstract concepts, you'll have a lot of papers to write about how to make this work. As Ricky Ricardo used to say, "Lucy, you got a lot of explaining to do."

「パブリックなブロックチェーンをもって、データの可搬性を確保します」というところから出発すると、たくさんの解くべき問題がある。それを解く面白さはあるのかもしれないけれど、個人的には「そもそも前提が間違っているのでは」と思っている。

### 相互乗り入れのためのコスト、例えば合意形成の遅さを、我々は受け入れられるのか

また、パブリックなブロックチェーンにデータを記録して可搬性を確保する、というのには、そのデータのかたちには、アプリケーション間で合意がある、という前提がある。ただ、これを実現するのは難しい。例えばあるオンラインゲームでアイテムを買って、これが「すばやさ」を上げるものだとする。これを別のゲームに持ちこんで、同じように「すばやさ」を上げるには、二つのゲームで「すばやさ」という概念を揃えなくてはいけない。

「デジタルなアイテムが NFT なら、他のメタバースやゲームにも持ち込める」という仕様を実装するには、この概念をそろえる作業を参加するゲームなりアプリケーション間でやらないといけない。Signal の Moxie Marlinspike は [My first impressions of web3](https://moxie.org/2022/01/07/web3-first-impressions.html) で、こういった複数のアプリケーションでの合意を取り決めることの難しさ、とりわけ変化の遅さを指摘している。

> A protocol moves much more slowly than a platform. After 30+ years, email is still unencrypted; meanwhile WhatsApp went from unencrypted to full e2ee in a year. People are still trying to standardize sharing a video reliably over IRC; meanwhile, Slack lets you create custom reaction emoji based on your face. 
>
> This isn’t a funding issue. If something is truly decentralized, it becomes very difficult to change, and often remains stuck in time. That is a problem for technology, because the rest of the ecosystem is moving very quickly, and if you don’t keep up you will fail. There are entire parallel industries focused on defining and improving methodologies like Agile to try to figure out how to organize enormous groups of people so that they can move as quickly as possible because it is so critical. 

我々は本当にそのコストを払えるのだろうか。IETF や W3C とか、私の仕事に近い [OCI](https://opencontainers.org) とかはそれぞれ頑張っている。一方で、例えば Slack と Discord の相互乗り入れはいまだに実現していない。

### ところで、日本はどうすればいいのか

わかりません。アメリカでしばらく働いているけれど「ここがちがう! これがあれば日本は復活する!」と思うものは、正直みあたらない。Google, Apple, Facebook, Amazon の前には、Sun Microsystems や DEC があって、そういう歴史の積み重ねと、そこからくる人材の層の厚さが効いているのでは、と思うことはある。でもこれはコピーするのが難しい。アメリカは特異点なのでまずは無視して、カナダにある Shopify とか、オーストラリアの Atlassian とか、アメリカの外の会社を見たほうがいいのでは、とは思う。

こうやって言い淀んでいるところに「Web3 で日本は復活します!」といっている人が来ると、それが頼もしくみえて、話を聞いてしまうのは致し方ないのかもしれない。
