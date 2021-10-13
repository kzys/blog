---
title: "モックは必要悪で、しないにこしたことはない"
date: 2021-10-12T22:26:37-07:00
---
[Mockito](https://github.com/mockito/mockito) や [gomock](https://github.com/golang/mock) が使いやすいせいか、単体テストというのはモックするものである、という思い込みがあるのか、人々がモックしすぎているのを時折みかける。

モックは必要悪で、しないにこしたことはない。外部の API サーバーとかはガンガン叩くわけにもいかないけれど、ファイル読み書きくらいは、実際にファイルを作ったり消したりしてしまっていい。`/etc/passwd` を消すとか、1GB のファイルを作るとかだと難しいかもしれないけれど、その場合でも、パスのプレフィックスを指定できるようにして、一時ディレクトリの中の `etc/passwd` を使うとか、ファイルサイズを指定できるようにするとか、逃げ道はいくつもある。そこを飛ばして「ファイル操作は一律モックしましょう」とか頑張りだすと辛いことになりがちだ。

モックの一番の問題は、本番とテストで違うコードが走ることで、これは自動テストの価値をだいぶ下げてしまう。テストが通っているのは、コードが正しいのか、コードがモックと揃っているからなのかわからなくなる。

もう一つの問題は、モックと実装が密結合してしまうことで、後々コードを変更するのが大変になる。実装が変えやすいようにテストを書くのに、実装を変えづらくなっては本末転倒だ。

[Test Double](https://martinfowler.com/bliki/TestDouble.html) の用語を使うと、ダミーオブジェクトは無害で、フェイクオブジェクトは、色々不変条件を足したりできるので、最初は面倒だけど役に立つことが多い。スタブ、スパイ、モックオブジェクトあたりは逆に簡単にはじめられるけれど最終的には後悔しがちだと思う。

### 単体/結合テストという二分法もよくない

Google Testing Blog に [Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html) (2010) という話があって、

> What do you call a test that tests your application through its UI? An end-to-end test? A functional test? A system test? A selenium test? I’ve heard all them, and more. I reckon you have too. Tests running against less of the stack? The same equally frustrating inconsistency. Just what, exactly, is an integration test? A unit test? How do we name these things?

それから10年以上たった今になっても、単体テストとか結合テストとかの用語にみんなが合意できる定義はない、と思う。

ソフトウェアの部分を抜き出して、ここからここまでが単体です、というのは難しい。オブジェクト指向的には一つのクラスが単体なのかもしれないけれど、そこにこだわると、まさしく「ファイル操作は全てインターフェース経由で操作して、テストではモックをコンストラクタから渡しましょう」という方向に進んでしまうので、あまりよくない。

件の記事は、ここから Small, Medium, Large というデータドリブンな定義に進むのだけど、個人的には、この離散的な定義もあんまり好きではない。

実際のところは、自動テストがテストするコードの範囲は、単体テストと結合テストの間のスペクトラムのどこかに位置している。そこに線を引いて「ここからこっちは単体テストです」といってみせることに、あまり意味はないと思う。
