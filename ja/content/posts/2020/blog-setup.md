---
title: "このブログの実装 2020年版"
date: 2020-09-25T23:27:23-07:00
---
r7kamura さんの[このサイトの実装 2020年版](https://r7kamura.com/articles/2020-09-23-this-site-setup-2020)に倣って、このブログの実装を書いてみる。

「サイト」じゃないのは、8-p.info は仕組みなどが似ていながらも別れているからで、それでいうと blog.8-p.info のトップにある目次ページも、別のシステムで動いている。今回は `/ja/` と `/en/` 以下の話です。

### ホスティング

S3 + CloudFront で静的ファイルを配信している。

Jekyll をはじめて使ったのは2011年だけど、当時の [Makefile](https://github.com/kzys/2011/blob/master/Makefile) を確認すると、どこかの VPS の Nginx に rsync していた。S3 を使い出したのは Amazon に転職したあとの2013年なので、我ながらドッグフード[^dogfood]精神がある。

以前は[S3 の静的サイトホスティング](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/dev/WebsiteHosting.html)だけを使っていて、数年前に HTTPS 対応するべく、CloudFront を追加した。

### ドメイン

[Namecheap](https://www.namecheap.com/) を使っている。前はムームードメインで、さらに昔はバリュードメインだったはず。

ドメインをとったのは大学に入って自分のクレジットカードをもった年のはずで、昔はメールアドレスも 8-p.info にしていた。メールサーバーを立てたりはせずに、バックエンドは Gmail に、と思っていたけれど、[Gmail の歴史](https://en.wikipedia.org/wiki/History_of_Gmail)を確認するとつじつまがあわないので、最初はプロバイダのメールアドレスに転送していたのかもしれない。

当時に自分が所属していた、という意識があったコミュニティは Linux 界隈で、ここは自分のドメインをもっている人が多かった記憶がある。

### ビルド

GitHub Actions を使って、[kzys/blog](https://github.com/kzys/blog) にコミットしたら、自動的に前述の S3 にファイルをアップロードして、さらに CloudFront のキャッシュを消すようにしてある。

静的サイトジェネレータは Hugo を使っている。

私は2008年から2016年にかけて、毎年別のブログを作るという奇行[^eto]をしていたことがあって、[セコンさんのリンク集](https://secon.dev/link/)でも、

> シアトルのエンジニア kzys。毎年ブログを式年遷宮してる。

と紹介されている。

当初はこれで、色々なブログエンジンをデータの移行を気にせずに試せる! と思っていて、実際に Catalyst 自作 -> WordPress -> Tokyo Promenade -> Jekyll -> Play 自作 -> Jekyll -> Rails 自作 -> Hakyll -> Hugo と色々使った。

ただ、段々と静的サイトジェネレータに落ち着きがちになってきたこと、前述の HTTPS 化にともなう設定項目の増加、子供が生まれてだんだん忙しくなってきたし、というので blog.8-p.info に戻ってきたという経緯がある。

Hugo の設定としては `/ja/` と `/en/` は完全に別のインスタンスで、テーマだけシンボリックリンクをはって共有している。

### デザイン

シンプル。たまに Google Fonts にあるような変わったフォントを使いたくなるし、実際に使ったこともあるけれど、結局なんとなく落ち着かなくて Helvetica Neue あたりに戻りがち。

仕事で HTML や CSS を書くことはなくなってしまったけど、いまだに自分で簡単なものを書くのは好きで、人が作ったテーマに身を任せられないでいる。

あと、[Edward Tufte](https://www.edwardtufte.com/) っぽく、横に脚注をつけれるようになっているけれど、あまり使ってはいない。

### 記事の書き方

Markdown を使っている。

実は [nb2hugo](https://github.com/kzys/nb2hugo) を使って Jupyter Notebook を Markdown に変換する仕組みもついているんだけど、Jupyter を使うようなものを最近書いていない。

[^dogfood]: 少し前の [Rebuild](https://rebuild.fm/270/) に "fishfooding" という話があったけれど、うちの社内には "drink your own champagne" という派閥の人々がいる。おしゃれ。

[^eto]: [江渡浩一郎](http://eto.com/)さんが、毎年メールアドレスを変えていて、それにも影響された。
