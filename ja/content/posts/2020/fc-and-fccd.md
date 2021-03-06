---
title: "Firecracker はコンテナランタイムではありません"
date: 2020-12-27T06:48:46-08:00
---

[Firecrackerはコンテナランタイムなのかという話](https://blog.inductor.me/entry/2020/12/23/213104)への返信および補足です。「コンテナラインタイムではない」という結論は

> このユースケースにおけるFirecrackerの立ち位置は、「runCをコンテナごとに隔離するための環境を作成」するためのVMプロバイダーになっている。

すでに出ているんですが、色々と補足したいことがあったので。

Firecracker は、[コンテナユーザなら誰もが使っているランタイム「runc」を俯瞰する](https://medium.com/nttlabs/runc-overview-263b83164c98) で定義されているような

> ランタイムの実装には様々なものがありますが、それらは役割に応じて下図に示すように高レベルランタイム（CRIランタイム）と低レベルランタイム（OCIランタイム）という2つのレイヤに分類されます。

[Kubernetes](https://kubernetes.io/) の [Container Runtime Interface](https://github.com/kubernetes/cri-api) (CRI) を実装した高レベルランタイムや、[Open Container Initiative](https://opencontainers.org/) の [Runtime Specification](https://github.com/opencontainers/runtime-spec) を実装した低レベルランタイムではありません。

Firecracker は、[公式ページ](https://firecracker-microvm.github.io/) にもあるとおり

> Firecracker is a virtual machine monitor (VMM) that uses the Linux Kernel-based Virtual Machine (KVM) to create and manage microVMs.

KVM を使ったバーチャルマシンモニタで、ひらたくいうと、Linux カーネル上で、別の Linux カーネル + ユーザーランドを実行するためのソフトウェアです。厳密には Linux カーネルだけではなく [OSv](http://osv.io/) もゲストとして実行できます。

### firecracker-containerd

[firecracker-containerd](https://github.com/firecracker-microvm/firecracker-containerd/) は、そんな Firecracker を containerd から使うためのプロジェクトで、

* containerd そのものに CreateVM などの VM むけの API を追加する firecracker-control プラグイン
* containerd に既存の「コンテナを作る」といった API の裏で、Firecracker を呼び出すためのランタイム (shim)
* Firecracker の中で実際に起動するゲストの Linux と、その中で動くエージェント

などで構成されています。なお、ここでの「ランタイム」は、CRI ランタイムとも、OCI ランタイムとも関係のない、containerd が規定する API を実装した小さなバイナリです。紛らわしいのと shim と呼ばれることもあるので、以下文中では shim で統一します。

containerd は、コンテナが起動されると同時に、この shim を立ち上げます。systemd などから起動されて、通常はホストのシャットダウンまで動き続けるデーモンである containerd に対して、shim はコンテナの起動と終了に対応して作成/破棄される比較的短命なプロセスです。

firecracker-containerd では、この shim から新規 VM の作成などを暗黙のうちに行うことで、外側からはホスト上で動いているコンテナに見えるけれど、実際にはホストの Linux とは別の、Firecracker 上で動くゲストの Linux で動作するコンテナ、というものを作り出しています。なお、コンテナ:VM は必ずしも 1:1 ではなく、1つの VM に複数のコンテナを同居させることも可能です。

ちなみに Kata Containers も、[Overview](https://github.com/kata-containers/kata-containers/blob/2.0-dev/docs/design/architecture.md#overview
) に  containerd-shim-kata-v2 について言及があるので、OCI ランタイム (低レベルランタイム) というよりは shim の一種といったほうが正確だと思います。

### CRI

containerd 自体は CRI プラグイン込みでビルドできるので、firecracker-containerd を CRI ランタイムにすることもできるはずです。
いま master にある Makefile は CRI 抜きでビルドしているので「はず」なんですが、最近 containerd の master が Go モジュールを使うようになったので、CRI つきでビルドするのも昔ほど大変ではないはず。
