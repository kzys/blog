---
title: "Re: デジタル庁は「行政の透明化」を掲げ、noteでの発信を始めます。 "
date: 2021-05-13T09:44:47-07:00
---

デジタル庁の note ができた。

[デジタル庁は「行政の透明化」を掲げ、noteでの発信を始めます。](https://note.digital.go.jp/n/n3690482b9676)

> ここまで読んでくださったなんて、さぞかし心優しい方々なのだろうと踏みまして、ついでといってはなんですがお願いがございます。
>
> 皆さまからも「こんなこと発信してほしい」「こういう記事期待」といった意見を募集させてください！

ということなので、個人的な要望を書きます。

### 発信してほしいこと: デジタル庁の今年度の優先順位を公開してほしい

デジタル庁には「デジタル社会形成における10原則」というのがあって、本家の [www.digital.go.jp](https://www.digital.go.jp/) にも掲げられている。

ただ、この原則は、正直あまりよく書けていない。まず10原則にそれぞれ2から4程度の小項目があって多すぎるし、粒度もバラバラ。「国民への説明責任を果たす」「多様な価値観やライフスタイルへの対応」あたりは、デジタル庁というよりはもっと上のレベルで取り組む課題だし、「国民に『お得』なデジタル化でデジタル利用率向上」と「国民が圧倒的便利さを実感するデジタル化の実現」は、重複が大きい。「自由や信頼を大切にするデータ・デジタル政策で世界をリード」は、採用のためには必要なのかもしれないけれど、国民の優先順位とはズレがあるし、残念だけどあまり現実味がない。

デジタル庁に類する行政機関は世界にも色々あって、彼らにも原則めいたものを掲げている。例えば、アメリカの United States Digital Service (USDS) には[4つの目標と6つの価値](https://www.usds.gov/mission)、イギリスの Government Digital Service (GDS) の[4つの責任と6つの優先順位](https://www.gov.uk/government/organisations/government-digital-service/about)、オーストラリアの Digital Transformation Agency (DTA) には[4つの役割・フォーカスと、4つの優先順位](https://www.dta.gov.au/about-us)がある。USDS は目標と価値を足したら10になるものの、実際に内容まで比較してみると、やっぱり日本のデジタル庁の10原則はちょっと多すぎるんじゃないかと思う。

すでに決まった10原則を減らすのは難しいだろうけど、今年度とか時間的な期間を区切った範囲であれば「これとこれをやりましょう。これはやりません。」という優先順位づけは、どのみちしないといけない。その結果を公開するのは、デジタル庁の全体像が国民に伝わる助けになると思う。

### note を使うことについて

私はサービス側のタイムラインは無視して全てを RSS リーダーで読みたい派なので、note はあまり好きではない。一方で、RSS リーダーを使っている人なんて少数派だし、[コロナ専門家有志の会](https://note.stopcovid19.jp/)も[東京感染症対策センター](https://note.com/tokyo_icdc)も note を使っているのをみると、私にはわからない魅力が note にはあるんだろうと思う。

ただ、note は [IP アドレス漏洩問題](https://note.jp/n/n2115642a4e45) あたりを機に、[ウェブ魚拓](https://megalodon.jp/) ~~と [Internet Archive](https://archive.org/)~~ によるサイトのクロールを robots.txt で一律禁止している。

これは、行政機関のウェブサイトとしては好ましくないし、デジタル社会形成における10原則で掲げられている「オープン・透明」とも相反している。

note.digital.go.jp にある [robots.txt](https://note.digital.go.jp/robots.txt) をみると、最後に

```
Sitemap: https://note.digital.go.jp/sitemap.xml.gz
```

という一行があって、ある程度は動的に出しわけされているのがわかる。であれば note は、最低限でもデジタル庁だけ、可能であれば自治体や公的な機関の全般について、クローラの恣意的な排除はやめるべきだと思う。

### 2021-05-13 追記

[fuba さんも書かれているけど](https://twitter.com/fuba/status/1392843954085793797)、

> この発言はデマなので削除しました、 Internet Archive にはちゃんと収集されてた様子です

[Internet Archive は robots.txt を無視する](https://blog.archive.org/2017/04/17/robots-txt-meant-for-search-engines-dont-work-well-for-web-archives/) (2017) ので、デジタル庁の note が Internet Archive に無いというのは誤解でした。実際に冒頭にリンクしたページも[既に保存されている](https://web.archive.org/web/*/https://note.digital.go.jp/n/n3690482b9676)。
