---
title: "エンジニアを育てる環境と、生存バイアスについて"
date: 2018-09-05T21:31:12-07:00
---
https://twitter.com/tkihira/status/1037116983760760833

> 昨日の飲みで、某CTOが「エンジニアを育てるって言うけど、紀平さん誰かに育てられました？自分で育ったでしょ？だからエンジニアに対しては、頑張れ、としか言いようがないと思うんですよね」って話をしていて、まあ確かにそうだと思った。自分はしかし親に環境を用意してもらったな。本とかPCとか。

https://twitter.com/dmikurube/status/1037218819687759872

> エンジニアの成長について「自分は自力で育った」「今まで見てきた人は誰かに育てられたというより自力で育ってきてた」は観察としてたぶん真なんだけど、「だからこれからもそれでいい」は明確に偽だと思うんだよなー。それって各種の職人業が次々廃れてるのと同じことを再現するだけのような気がする

エンジニアを「育てる」はなし、自分も大学で情報工学を学ぶまえに多少はプログラミングができたほうなので、独学で「育った」傾向があるんだけど、後続の人々も同じパスを通るべきかといわれると、そうとは思わない。

性格や環境が私と似通った人だったら、同じパスを通ってもいいとは思う。本やインターネットから色々情報を集めて色々試すのは私にとっては楽しいことだったし、それをする時間的な余裕もあった。自分でやったんだという自負が自信につながっている部分もある。

ただ、世の中には自分とは違った性格や環境で、かつエンジニアを目指しているひとも沢山いるはずで、そういう人々には他のパスのほうが適しているかもしれない。いまの教育やコミュニティのありかたが、ある種の人々、たとえば女性を、不必要にフィルタリングしてしまっている可能性はあると思う。

### Increasing Rust's Reach

最近みて感心したのは、Rust というプログラミング言語の人々がやっている [Increasing Rust's Reach](http://reach.rust-lang.org/) というプログラムだ。

> This program matches Rust team members from all parts of the project with individuals who are underrepresented in Rust's community and the tech industry for a partnership of three (3) months, from mid-May to mid-August. Each partnership agrees to a commitment of 3–5 hours per week working on a Rust Project.

ここでは、Rust チームのメンバーと、Rust コミュニティであまりみかけない (underrepresented な) 人々とをつないで、定期的なミーティングの機会や、カンファレンスへの渡航費の支援なんかを行っている。

"underrepresented" というのは明確には定義されていないけれど、[今年の参加者](http://reach.rust-lang.org/2018/participants) をみると、ジェンダー・人種・国籍あたりが考慮されているのだろうと思う。

Rust は比較的新しいプログラミング言語で、コミュニティを広げるまえに、言語やライブラリに対してやることがあるだろうという意見もあるかもしれないけれど、その二つを対立するものではなく、両輪として進めるのが、今風なんだろう。

### Recurse Center の Social Rules

もう少し草の根で、個人でも注意できるようなものには、Recurse Center の [Social Rules](https://www.recurse.com/social-rules) がある。

Recurse Center はプログラミングができる人むけに、より学ぶための場を提供している施設ないしプログラムで、以前は Hacker School という名前だった。実際になにが行われているかについては、[ニューヨークのエンジニアコミュニティについて。Hacker Schoolでプログラミング修行中](https://note.mu/kenzan100/n/n33b8bacebb54) がわかりやすい。

Recurse Center の Social Rules は4つの禁止事項からなっている。

* No well-actually's (それは実は…で話を遮らない)
* No feigning surprise (知らないんですか! と驚いたふりをしない)
* No backseat driving (会話に突然割り込まない)
* No subtle -isms (お母さんでも使える、みたいな微妙な差別をしない)

ここで禁止されているコミュニケーションのいくつかは、もしかすると、コミュニティによっては許容されているかもしれない。

私も、勉強会なんかで、発表している人の話を突然さえぎって間違いを指摘する人がいても「勉強会は相互に学びあう場であるし、間違いを指摘されるのは別に恥ずかしいことではない」とかなんとか許容してしまっていたように思う。「モヒカン族から手斧が飛んできた」なんて外野が盛り上がりそうな場面ではある。

どこからがだめなのか、という線引きの難しさについては Recurse Center も自覚的で、冒頭に

> One thing that often confuses people about the social rules is that we expect people to break them from time to time. This means they’re different and totally separate from our code of conduct.

と但し書きがある。

コミュニティのなかでのコミュニケーション様式は、最終的には個々のコミュニティが決めるべきものだけれど、ある種の振る舞いを「あり」としたときに、それを苦手とする人々を遠ざけてしまう可能性であるとか、それと引き換えに何を得ているのか、といったことは立ち止まって考えてみてもいいと思う。

### まとめ

エンジニアを「育てる」話を枕に、コミュニティのありかたを変えようとする、[Increasing Rust's Reach](http://reach.rust-lang.org/) と Recurse Center の [Social Rules](https://www.recurse.com/social-rules) を紹介しました。

後者については、自分が過去にできていたかというと大分あやしいけれど、最近は気をつけていて、ミーティングでも思いついたことを一度メモしておいてから、タイミングをうかがって話し出したりしている。
