---
title: Chrome vs. ISO-2022-JP 問題
date: 2022-10-27T06:08:37-07:00
---

とよしまさんが、

> ISO-2022-JPのサポートをChromeからdropするかどうかって話があって、個人的には落としても良いような気がするけど「落としても良いんじゃ？」と積極的にいうのは少し責任重大で怖いな。

と書いていて、いやいや落としてはいかんでしょう、と思って

> 個人的には落とさないでほしい (don't break the web!) なんですが、これは ICU-22166 にコメントするのと https://bugs.chromium.org/p/chromium/issues/detail?id=430823 にコメントするのではどっちが良いんでしょうか。それとも、コメントよりパッチでしょうか?

と返信した問題のつづき。

### 経緯

HTML5 の策定で知られる WHATWG には、さらに [Encoding Standard](https://encoding.spec.whatwg.org/) というのがあり、そこで規定されている挙動と、Chrome の挙動が違うのではないの、というのが最初の問題。

[invalid byte sequence handling is not compliant to the WHATWG encoding spec in multibyte encodings](https://bugs.chromium.org/p/chromium/issues/detail?id=430823)

> The encoding spec requires that if the second byte of an invalid two-byte input sequence belongs to the ASCII-range,  the first byte be converted to U+FFFD while the second byte being unconsumed. 

ここから派生して、そもそも ISO-2022-JP いらないのでは、という話がはじまっていて、

[Consider dropping ISO-2022-JP from the list of legacy encodings to support](https://bugs.chromium.org/p/chromium/issues/detail?id=1371156)

> Now in 2022 with the vast majority of web pages in UTF-8 with a small percentage of legacy encodings (non-stateful at that) in use, we should seriously consider dropping ISO-2022-JP ("ugly" stateful encoding) from the list of legacy encodings to support.

さらに ICU のほうに、不正なバイト列のとりあつかいが WHATWG の仕様に準拠していないですよ、というバグが立てられている。

[Incomplete ESC sequence handling when converting ISO-2022-JP to Unicode is different from WHATWG spec](https://unicode-org.atlassian.net/browse/ICU-22166)

> ICU's handling of ISO-2022-JP escape sequences and SI/SO when converting ISO-2022-JP to Unicode needs to be revisited. The encoding spec wants to add back any ASCII character in an incomplete/invalid ESC sequence (e.g. '$') to the stream. Currently, it's eaten up.

じつは、とよしまさんの最初の発言からしばらくたって、最初のバグは無事に修正されている。二個目のバグには、ISO-2022-JP 使われていたよ、という趣旨のコメントをした。最後のバグも、私が議論を追いきれていないので、ちょっと質問のコメントをしてみた。

### ブラウザにはレガシーなエンコーディングのサポートを続けてほしい

Google にこういったデータがあるのかはわからないけれど、Chrome で最近つかわれたエンコーディングとか、検索からクリックされたページとかを調べると、ISO-2022-JP は殆ど使われていないと思う。

ただ、日本のインターネットの過去についていうと、ISO-2022-JP はそれなりに使われていた。昔からあるページとか、Wayback Machine で過去の記録をたどっているときに、ISO-2022-JP がデコードできなくなると、アクセスできないページは一定量ある。

ほんとうはこれを定量的に示せるといいのだけど、まだできていません。

youtube-dl が GitHub から追い出されそうになったときに、youtube-dl をジャーナリストのツールだとしていた人がいて、

[Music industry forces widely used journalist tool offline](https://freedom.press/news/riaa-github-youtube-dl-journalist-tool/)

> In fact, youtube-dl is a powerful general purpose media tool that allows users to make local copies of media from a very broad range of sites. That versatility has secured it a place in the toolkits of many reporters, newsroom developers, and archivists.

ブラウザも、おなじような立ち位置にあって、過去の記録をたどるジャーナリストの人々に「ISO-2022-JP というのがあるから、これはローカルに保存してから、変換ツールにかけてください」というのは、われわれエンジニアがさぼりすぎだと思う。
