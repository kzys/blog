---
title: "lib.rs and crates.io's server-side rendering"
date: 2021-04-28T00:06:29-07:00
tags: ["Rust"]
---
I have spent a few minutes for figuring out crates.io's alternative which I've seen before. It was [Lib.rs](https://lib.rs/).

[About // Lib.rs](https://lib.rs/about)

> lib.rs is fast. There's no JavaScript anywhere.

I'm not a big fan of crates.io's client-side rendering and I was working on crates.io's server-side rendering from 2019 to 2020. crates.io's front-end is written in Ember and [Fastboot](https://ember-fastboot.com/) is Ember's way of doing server-side rendering.

However switching to server-side rendering is a big change and crates.io's team was not really ready for that in terms of workload. There was on-going Ember-related refactoring at that time such as [migrating to native classes](https://github.com/rust-lang/crates.io/pull/2290) which caused a lot of conflicts. So, eventually I gave up.

Yeah. I've just shared my old sad story today. Sometimes things don't work out.
