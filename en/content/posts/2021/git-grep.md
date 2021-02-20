---
title: "git grep was a shell script"
date: 2021-02-19T22:52:42-08:00
tags: ["Unix", "History"]
---
I believed that `git grep` shows the lack of Unix's composability. It could be git + grep, but `git grep` is written in C and simply has a grep-equivalent inside.

But there is a caveat. In September 2005, [Linus Torvalds has added `git grep`](https://github.com/git/git/commit/f22cc3fcbfe7755154a3a151215abd39162e2e85), 20-lines shell script. So, it was git + xargs + grep in the beginning! Then, in April 2006, [Junio C Hamano has added a C version of `git grep`](https://github.com/git/git/commit/5010cb5fcca30269ad25f2eb38b31455af3205d7) to reduce Git's dependence on the shell.

> This attempts to set up built-in "git grep" to further reduce
> our dependence on the shell, while at the same time optionally
> allowing to run grep against object database.
>
> (...)
>
> But this is going in the right direction.  The shell script
> version is one of the worst Portability offender in the git
> barebone Porcelainish; it uses xargs -0 to pass paths around and
> shell arrays to sift flags and parameters.

So, it was actually showing Unix's composability in the beginning, and later replaced due to the lack of portability.
