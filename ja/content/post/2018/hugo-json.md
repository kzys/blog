---
title: "Hugo で全記事いりの JSON ファイルをつくる"
date: 2018-05-26T08:53:52-07:00
---

以前に Saqoosha さんが、WordPress を JSON を出力できる管理画面として使って、dot by dot inc. のコーポレートサイトを作っていて

[Inside "dotby.jp 2015"](https://qiita.com/Saqoosha/items/597466bdcd76b2ddfdcf)

> 日々増えるニュースを簡単に更新できるようなブログ形式、前バージョンの背景エフェクトもってくる（かつページ遷移においてリロードしない＝エフェクトを途切れさせない）という前提で検討した結果、WordPress を CMS に使いつつ WP REST API で JSON ひっぱってきて React でごにょごにょやるんがいーかなーと。

そういうことを Hugo でやるためにはどうすればいいのか、という話。

### Custom Output Formats

Hugo には [Output Formats](https://gohugo.io/templates/output-formats/) という仕組みがあって、この種類のページには、こういうフォーマットでも出力してください、ということを指定できる。テンプレートファイルをどこに配置するかは、[Templates for Your Output Formats](https://gohugo.io/templates/output-formats/#templates-for-your-output-formats) という章で例示をまじえて説明されている。

私の場合は、全記事のタイトル、日付、そしてリンクをふくんだ JSON ファイルを生成したかったので、config.toml に

```
[outputs]
home = ["html", "rss", "json"]
```

というのを書き足して、自作テーマの一部として `themes/x17/layouts/index.json` というファイルを作成した。

### テンプレートのなかみ

Hugo のテンプレートは Go の [html/template](https://golang.org/pkg/html/template/) をベースにしつつも、多様な要望に応えるためのミニプログラミング言語化しつつあり、正直ちょっと厳しい。

```
{{ $.Scratch.Add "items" slice }}

{{- range where .Data.Pages "Section" "post" -}}
  {{- $.Scratch.Add "items" (dict "title" .Title "published" .PublishDate "url" .Permalink) -}}
{{- end -}}

{ "items": {{ $.Scratch.Get "items" | jsonify }} }
```

今回のテンプレートはこんな感じで

* Scratch はローカル変数を宣言する代わりに使える連想配列
* slice, dict, range などは、それぞれ Hugo の定義している [テンプレート関数](https://gohugo.io/functions/) で、リスト、連想配列などを返す。
* .Data.Pages は Hugo が用意している [テンプレート変数](https://gohugo.io/variables/) のひとつで、記事のデータにアクセスするために使う。

といったことがわかれば、なんとなく雰囲気で読めると思う。

JSON をテンプレートで出力するのは、最後に余計なカンマをつけてしまったり、エラーのもとになりがちなので、ここでは、普通に変数として JSON の構造を組み立てて、最後にそれを jsonify に渡して変換している。
