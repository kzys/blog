---
title: Buildkit から gogo/protobuf をひきはがす
date: 2023-11-24T17:11:32-08:00
---

* [Migrate off of gogo/protobuf](https://github.com/moby/buildkit/pull/4422)

[去年に containerd の gogo/protobuf を google.golang.org/protobuf に置き換えた](https://github.com/containerd/containerd/pull/6841)のと同様に、Buildkit の gogo/protobuf も置き換えてみている。

containerd に比べると、Buildkit はあまり土地勘がなく、またやっていることも複雑で大変だったが、とりあえず動くところまでは出来た。

Go, 値と参照があるのは良いのだけど、参照を渡すときは const つけたりしたいなあ。google.golang.org/protobuf では、あらゆる protobuf 由来の struct がコピーできないようになっていて、基本どこでも参照わたしなのだけど「そういうわけで参照で渡しているわけで、変更するのはやめてくださいね」というのをコンパイラに伝えられないのが不安。
