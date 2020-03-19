---
title: "t.Log() and t.Logf() act like actual logging since Go 1.14"
date: 2020-03-06T22:54:53-08:00
---

[Go 1.14 Release Notes](https://golang.org/doc/go1.14#go-test)

> `go test -v` now streams `t.Log` output as it happens, rather than at the end of all tests. 

Finally!

Previously `t.Log()` and `t.Logf()` buffer the output till the end of a test, which was surprising. That forced me to use `fmt.Printf()` or whatever a logger available.

[The issue](https://github.com/golang/go/issues/24929) has been opened since 2018 and it has finally landed on Go 1.14.
