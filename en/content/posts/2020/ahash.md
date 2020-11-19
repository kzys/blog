---
title: "aHash and Rust's standard HashMap"
date: 2020-11-19T06:42:34-08:00
tags: ["100DaysToOffload", "Rust"]
---
There is a Rust channel in Amazon and I've learned about aHash recently.

[aHash](https://github.com/tkaitchuck/aHash) implements a hash function based on AES (Advanced Encryption Standard). Since modern x86 CPUs have specialized instructions for processing AES, called [AES-NI](https://en.wikipedia.org/wiki/AES_instruction_set#x86_architecture_processors), aHash is faster than other hashing algorithms.

[Hashbrown](https://github.com/rust-lang/hashbrown), Rust's standard HashMap implementation has been using aHash as its default since [v0.5.1](https://github.com/rust-lang/hashbrown/blob/master/CHANGELOG.md#v051---2019-08-04).

However, note that Rust's standard HashMap is using SipHash as its hashing function.
