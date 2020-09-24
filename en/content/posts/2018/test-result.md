---
title: "Using Result<T, E> on unit tests"
date: 2018-08-06T23:04:10-07:00
tags: ["Rust"]
---

[Since Rust 1.28.0](https://github.com/rust-lang/rust/blob/master/RELEASES.md#version-1280-2018-08-02), unit tests can return Result<T, E>. In other words, you can use `?` on unit tests' functions.

But, while working on [my pull request](https://github.com/solana-labs/solana/pull/870) to use that on solana, I have found 2 pitfalls.

### left is 1, right is 0?

Sadly the error message regarding a failing unit test is not great.

```
thread '...' panicked at 'assertion failed: `(left == right)`
  left: `1`,
 right: `0`', libtest/lib.rs:326:5
```

There is an [open pull request to address the issue](https://github.com/rust-lang/rust/pull/52453). So it will be fixed at 1.30, according to [#48854](https://github.com/rust-lang/rust/issues/48854).

### The backtrace doesn't include the line number of `?`

Thils is probably hard to address. Due to the way it uses Result<T, E>, libtest, the test runnner can't tell where the failing `?` is. [The pull request on solana](https://github.com/solana-labs/solana/pull/870) had the discusstion about that, and eventually we settled that it would be okay. But it may be frustrating if you have multiple `?`s in a long function. We shouldn't have such a function though.

It actually reminds me Go's errors. They are not having stracktraces by default and [companies like Dropbox implement its own variants to have them](https://github.com/dropbox/godropbox/tree/master/errors). Would `Result<T, E>` have something similar since nice `?` syntax pushes people to use more Results? I am not so sure.

