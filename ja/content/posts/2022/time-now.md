---
title: Windows では time.Now() の解像度が低い
date: 2022-09-02T06:48:12-07:00
---

[Make checkContainerTimestamps less strict on Windows](https://github.com/containerd/containerd/pull/7350)

containerd には「なにか変更をした後には、UpdatedAt が CreatedAt より後ろに更新される」というテストがあるんだけど、Windows でたまに失敗している。

調べると、Go そのものほうに [testing: benchmark is using low resolution time on Windows](https://github.com/golang/go/issues/31160) というのがあった。すでに、[I want off Mr. Golang's Wild Ride](https://fasterthanli.me/articles/i-want-off-mr-golangs-wild-ride) で触れられている話ではあるけれど、Go の time.Duration に時刻とモノトニックな時刻を同居させるのは、ちょっと無理があった気がする。

テストが失敗するのはよくないので、取り急ぎ、チェックをゆるく (Windows に限り、更新されていなくても、巻き戻っていなければよいということに) した。
