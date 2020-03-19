---
title: 'Does "go test" output to stdout or stderr?'
date: 2020-03-19T00:04:11-07:00
---
The answer was both. But since Go 1.14, `go test` only uses stdout.

From Russ Cox's [commit message](https://github.com/golang/go/commit/7badae85f20f1bce4cc344f9202447618d45d414):

> In past releases, whether test output appears on stdout or stderr
> has varied depending on exactly how go test was invoked and
> also (indefensibly) on the number of CPUs available.
