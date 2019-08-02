+++
date = "2017-06-06T06:53:54-07:00"
draft = false
title = "上司を分解する"
+++

[Quipper に入社して丸4年が経った](http://blog.kyanny.me/entry/2017/05/29/000000)を読んで思ったことなど。

マネージャーにレポートするエンジニアと、複数のエンジニアからレポートされるマネージャーだと、前者のほうが忙しくなりがちだと思う。アプリケーションサーバーと、書き込まれる MySQL サーバーの違いに似ていて、前者は予算さえあれば「とりあえずもう一台」みたいなことが出来る一方で、後者は増やすのにも色々と作業が必要だ。

### 責務を分解する

TPM (Technical Program Manager), Tech/Team Lead や Product Manager といった横文字職種にマネージャーの役割を委譲するのは、負荷軽減策としてよくみられる方法に思う。

たとえば、[隣の JIRA 職人](http://anemone.dodgson.org/2016/08/16/a-bugtracker-expert/)では、TPM (Technical Program Manager) という職種について

> TPM は「上司」という伝統的な役割を Team Lead や Engineering Manager といった複数の職種に分解するテック企業らしい手口のひとつと言えるのかもしれない。仕事の細分化が良いとは必ずしも思わないけれど、過剰な権力を備えがちな「上司」業を modularize するのは嫌いじゃない。TPM はあまり権力を持っていない。だから頭ごなしに意思決定はできず、関係者を説得しないといけない。このくらいがよさそうじゃん。

と説明している。この「上司を分解する」というのは言い得て妙だ。

ここに出てくる Team Lead というのは、言葉は違うけど、だいたい [Tech Lead（TL/テックリード）の役割](http://d.hatena.ne.jp/higepon/20150806/1438844046)で説明されているものに近いと思う。ここでも

> また Tech Lead を置くことでマネージャの負担がかなり減ることもメリットの1つだ。たいていのチームでは技術的に頼りになるエンジニアがいる。そういう人をマネージャが正式に Tech Lead として任命する。あわせてチームにその役割を共有すると良い。

と、マネージャーの負担を軽減することが、メリットのひとつにあげられている。

Product Manager は、日本だとプランナーとかディレクターとか、企画職と呼ばれている人々に近いと思う。ただ、たとえば[「すべてプレスリリースから考えよ」アマゾンジャパンのPMに学ぶ仕事の流儀とキャリア展望](http://type.jp/et/feature/2191)のリードには

> 昨今、日本でも注目度の高まっているプロダクトマネジャーの仕事。しかし、業界内における人数の少なさから、その職責やジョブディスクリプション、どうすればプロダクトマネジャーになれるのかetc...といった部分はまだまだ不明確だ。

なんて書かれているので、もしかすると別の含意があるのかもしれない。

### チームを分解する

こうやって職種を増やしてマネージャーの役割を委譲していく代わりに、チームを分割してしまう、というもある。[Productivity Hack Of The Week: The Two Pizza Approach To Productive Teamwork](https://www.fastcompany.com/3037542/productivity-hack-of-the-week-the-two-pizza-approach-to-productive-teamwork) ではチームの人数を少なめにすることについて、その利点が説明されている。

チームはどこで分割するべきなのか。複数の小さなサービス (microservices) がすでにあるので、それぞれにチームを割り当てます、というのは平和な分割方法だと思う。たとえば Martin Fowler の [Microservices](https://www.martinfowler.com/articles/microservices.html) では

> The microservice approach to division is different, splitting up into services organized around business capability. Such services take a broad-stack implementation of software for that business area, including user-interface, persistant storage, and any external collaborations. Consequently the teams are cross-functional, including the full range of skills required for the development: user-experience, database, and project management.

と書かれていて、チームもこれに倣って分割するのは良さそうだと思う。一方で、チームを分割するためだけに microservices 化するのは、個人的にはちょっと二の足を踏むところがある。ネットワークがもたらす複雑さを導入するのは最後の手段にしたい。

### キャリアのラダーを乗り換えた意識をもつ

ラダーというのは梯子のことで、エンジニアとして偉くなるのがひとつの梯子を上に登っていくことだとしたら、マネージャーになることは横の梯子に乗り換えてしまうことだと思う。結果として、エンジニアあがりのマネージャーでも、自分のチームのコードは書かない人が多い。

良いことなのか、というとよくわからない。ラダーが別れていて、マネージャーにならなくても給料をあげる道があるのは、良いことだと思う。「マネージャーになってもコードは書けますし、それを前提に負荷を調整します」というのは、言えると良いけど、あんまり現実的ではない気がする。

### まとめ

上司職、とりわけエンジニアのマネージャーを分解して、その負荷を軽減する方法として

* TPM, Tech Lead, Product Manager といった職種のひとに役割の一部を委譲する
* チームを小さく分ける
* マネージャーなのでコードは書かない

というのを紹介しました。

こうやってまとめると我ながら大企業然としていて、こういう普通の人々むけの最適化を無視できるのが、スタートアップや大企業ではない会社の、差別化要因な気もしなくもない。

ただ、最初の刺身さんの話にかぎらず、最近「マネージャーになって忙しくて」というのを読むと、そもそも要求水準が高すぎるのでは、と思うことも無きにしもあらずです。
