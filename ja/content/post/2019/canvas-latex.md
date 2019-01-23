---
title: "canvas-latex を読む"
date: 2019-01-22T23:57:39-08:00
draft: true
---
kotlitex の[雑談イシュー](https://github.com/karino2/kotlitex/issues/7#issuecomment-454755741)で、

> 描画回りは自分はcanvas-latexのコードをそのままkotlinにもってきて最後のプラットフォームに依存する所だけ書き換えればいいかなぁ、と思ってたんですが、この路線はダメですかね？

というはなしになったので読んでみた。

canvas-latex は LaTeX 風の数式表記を Canvas に描画するライブラリだ。数式のパースは [KaTeX](https://katex.org) を、Canvas 周りは [CreateJS](https://createjs.com) か [PixiJS](http://www.pixijs.com) を使うようになっている。CreateJS と PixiJS は、どちらも公式ページの冒頭に Flash の言及がある

https://createjs.com/easeljs

> EaselJS provides straight forward solutions for working with rich graphics and interactivity with HTML5 Canvas. It provides an API that is familiar to Adobe Animate developers, but embraces JavaScript sensibilities.

http://pixijs.download/release/docs/index.html

> As a framework, PixiJS is a fantastic tool for authoring interactive content, especially with the move away from Adobe Flash in recent years.

2D シーングラフを作るためのライブラリらしい。ちなみに CreateJS は "a suite of modular libraries and tools" に進化していて、Canvas まわりの部分は EaselJS と呼ばれている。

### レンダラー

エントリーポイントになるクラスは Widget と呼ばれていて、CreateJS or PixiJS の Container を継承している。これがレンダラー共通で使える VirtualNodeBuilder を定義して VirtualNode と呼ばれる中間表現を構築して、それをレンダラーごとのコードでシーングラフに変換する。

どちらのバックエンドに対しても、Widget はかなりが boilerplate だし、シーングラフ変換部分もだいぶさっぱりしている。移植という観点でいうと、なぜか SVG が登場するところがちょっと不吉で、CanvasJS 側では [canvg](https://github.com/canvg/canvg) を、PixiJS 側では data スキーム経由で SVG をレンダリングしようとしている。

### 共通部分

あとで書く
