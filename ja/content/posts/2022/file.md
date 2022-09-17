---
title: "file:/// のスラッシュは3個"
date: 2022-09-16T21:31:08-07:00
---
containerd の cio.LogURIGenerator に、パスの最初が / かどうかで絶対パスかどうかをチェックしているところがあって、Windows では C:\foo\bar.txt とかあるよね、というので直している。

* [Fix LogURIGenerator on Windows](https://github.com/containerd/containerd/pull/7351)

先月末に手をつけはじめたときは、横着して、GitHub Actions の結果を見ながら直していたんだけど、流石に効率が悪いので、今日はちゃんと EC2 で Windows をたてて直した。

[Get started with OpenSSH for Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) をみながら OpenSSH を入れて、[Chocolaty](https://chocolatey.org) から Go, Git と rsync あたりをいれると、手元で編集したものを rsync して、Windows でテストを走らせられるようになる。

`file:///` の後のスラッシュは、ローカルホストならびにホストの概念がないときは3個が正しく、Windows のように絶対パスが / ではじまらないときは、例えば `file:///C:/foo/bar.txt` となるというのを学んだ。
