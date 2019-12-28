---
title: "firecracker-containerd を読む (1)"
date: 2019-12-28T05:15:11-08:00
---

firecracker-containerd は、VMM の Firecracker を Docker などでも使われているコンテナ実行環境の containerd から使うためのソフトウェアだ。具体的には、Firecracker 上で Linux を立ち上げてから、その Linux の中でさらにコンテナを実行する、という動作をする。

私は2019年の7月から AWS で働いていて、firecracker-containerd の開発にも関わっている。Amazon で働くこと自体はもう7年になるけれど、オープンソースソフトウェアの開発が主な仕事になるのは今回が初めてだ。せっかくなので、これから数回に分けて firecracker-containerd の実装について説明したい。

### Firecracker とは

といっても「Firecracker なら手元の Linux にインストールして毎日使っています!」という人も少ないだろうから、まずは Firecracker そのものについて説明する。Firecracker は、Linux の KVM という仕組みを通して VM (Virtual Machine) を立ち上げる、VMM (Virtual Machine Monitor) とか Hypervisor と呼ばれる種類のソフトウェアだ。

KVM は、Intel なら Intel VT-x (2005), AMD なら AMD-V (2006) といった、最近の CPU に存在する仮想化がらみの命令を、`/dev/kvm` というデバイスと、それに対する ioctl といったかたちに抽象化している。

KVM や Firecracker の文脈での "VM" というのは、V8 や YARV のような「ホストの CPU とは関係のない、仮想的な命令セットを実装した、CPU を催したソフトウェア」のことではない。x86 なら x86 の、ホスト側のマシンと同じ命令セットをもった仮想的なマシンのことを指す。

仮想的なマシンが立ち上がっているので、そこで Linux を動かすにしても、Linux カーネルはホストと全く別のものが動かせるし、そもそも別の OS を立ち上げることもできる。

firecracker-containerd では、前述の通り、Firecracker 上で Linux を立ち上げているけど、Firecracker 自体は (理論上は) 任意の OS を起動できるし、ユニカーネルの一つである [OSv を実際に実行する](https://github.com/cloudius-systems/osv/wiki/Running-OSv-on-Firecracker)こともできるらしい。

### containerd とは

containerd は Docker などでも使われているコンテナ実行環境で、名前の通り、デーモンとして立ち上がり、リクエストをうけとって、コンテナを立ち上げる。containerd には、runtime と呼ばれる、実際にコンテナを立ち上げる部分を差し替え可能にする仕組みがある。firecracker-containerd では、これを使って

1. コンテナの前にまず Firecracker を立ち上げて
2. Firecracker は Linux を立ち上げて
3. その Linux の中で、Firecracker の外からのコマンドを受け取るデーモンを立ち上げて
3. containerd に送られたリクエストを Firecracker の中のデーモンに送ることで、コンテナを立ち上げて
4. その結果を、必要であれば変換して、containerd 側に返す

という動作を実装している。

以前はこれに加えて snapshotter と呼ばれる、Docker における graphdriver に対応するものの、Firecracker 向けに都合の良い実装も2つレポジトリに存在していた。ただ、このうち Linux の Device Mapper を使うものが、無事に containerd 本体に取り込まれたので、これらは firecracker-containerd 側からは削除された。

### まとめ

firecracker-containerd を読む前準備として、Firecracker と containerd の役割と、全体の動作の流れについて説明しました。続きます。
