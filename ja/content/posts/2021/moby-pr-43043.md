---
title: "本日のプルリクエスト: moby #43043"
date: 2021-12-23T23:41:40-08:00
---
11月からやっていた、[daemon/logger: read the length header correctly](https://github.com/moby/moby/pull/43043) が無事マージされた。

Docker Engine (プロセスでいうと dockerd) の RSS がどんどん高くなっていって、最終的には Go ランタイムの panic で死んでしまうというバグで、[OOM when following "local" logs of high-log-output container](https://github.com/moby/moby/issues/42125) として3月には報告され、私は11月から手をつけはじめた。

### Go < 1.16 では RSS を信用してはいけない

RSS (Resident Set Size) がどんどん高くなるということは、メモリリーク? と思うけどあんまり怪しいところはない。調べていくと、[runtime: default to MADV_DONTNEED on Linux](https://github.com/golang/go/commit/05e6d28849293266028c0bc9e9b0f8d0da38a2e2) を見つけた。

> In Go 1.12, we changed the runtime to use MADV_FREE when available on
> Linux (falling back to MADV_DONTNEED) in CL 135395 to address issue
> #23687. While MADV_FREE is somewhat faster than MADV_DONTNEED, it
> doesn't affect many of the statistics that MADV_DONTNEED does until
> the memory is actually reclaimed under OS memory pressure. This
> generally leads to poor user experience, like confusing stats in top
> and other monitoring tools; and bad integration with management
> systems that respond to memory usage.

Go では 1.12 から 1.15 まで `MADV_FREE` を使っていたのだけど、これは Linux がユーザー空間に露出している各種統計情報には反映されず、色々と混乱を招いていたので、1.16 から `MADV_DONTNEED` に戻る、らしい。

なので、RSS だけ見てメモリリークっぽい挙動でも、実際にはメモリリークではない、ということがあるらしい。

### Docker Engine が中で使っているログフォーマット

Docker Engine が中で使っているログフォーマットは

```
[メッセージ長][Protocol Buffers でエンコードされたログメッセージ][メッセージ長]
```

という形になっている。で、どうやらここのメッセージ長が変になってしまって、巨大なメモリを確保しているらしい。ということで、メッセージ長が 10,000 を越えたら、その時点のログを適当なところに保存して、そのメッセージ長を16進数で表示する、という雑な変更を入れて、

```
% docker logs -f $(docker run --rm -d --log-driver local alpine cat /dev/urandom) > /dev/null
```

なんてやってみると、`panic: too large 95e09737` といって `dockerd` が死ぬ。保存したログファイルを読んでみると、確かに `0x95 0xe0 0x97 0x37` というバイトの並びは、ログの中の、メッセージ長ではない部分に存在する。

### 何が悪かったの?

Decode() が諸事情でメッセージ全体を読みきれなかったときに、今まで読んだバイト列をどこかに保存しておいて、次に Decode() が呼ばれた時はそれをつなげる、という処理が抜けていて、メッセージの途中をヘッダと解釈していたのが原因だった。

原因がわかってしまうとどうってことないけれど、Protocol Buffers まじりをバイナリエディタで開いて眺める、なんてあんまりやらないので新鮮なバグでした。
