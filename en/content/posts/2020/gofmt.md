---
title: "gofmt wouldn't end style wars"
date: 2020-11-05T20:02:47-08:00
tags: ["100DaysToOffload", "Go"]
---

I like `gofmt`. I have fantasized that Go programmers won't have style wars because of `gofmt`.

Sadly, it is not true.

The biggest reason today is [golangci-lint](https://golangci-lint.run/). This lint is really configurable and that makes every Go project different. It won't be 2-spaces vs. 4-spaces different, but some projects use `scopelint` because the lead developer has bitten by scoping, or some projects use `prealloc` since it may be faster.

Please note that golangci-lint is actually useful. It is better than checking pitfalls and style stuff manually. It is Go's CheckStyle in a good way and a bad way.

Another reason is that programmers don't appreciate `gofmt` much, and introduce arbitrary rules that cannot be enforced by the tool. I don't think it is worth to do most of the time.
