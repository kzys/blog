---
title: "Expanding Rust macros"
date: 2018-07-29T14:39:15-07:00
tags: ["Rust"]
---

I was using dlopen 0.1.2 and had the below error.

```
error[E0658]: access to extern crates through prelude is experimental (see issue #44660)
   --> security-framework/src/secure_transport.rs:497:10
    |
497 | #[derive(SymBorApi)]
    |          ^^^^^^^^^
```

Access to extern crates through prelude? dlopen's SymBorApi is using macros, and this error doesn't make much sense without looking the macro's implementation.

rustc has an option to expand macros, but the option is only available on the nightly compiler.

```
% rustup default nightly-x86_64-apple-darwin
info: using existing install for 'nightly-x86_64-apple-darwin'
info: default toolchain set to 'nightly-x86_64-apple-darwin'

  nightly-x86_64-apple-darwin unchanged - rustc 1.28.0-nightly (cbc4c8380 2018-06-22)

% cargo rustc --profile=check -- -Zunstable-options --pretty=expanded
...
```

Or, you can use [cargo-expand](https://github.com/dtolnay/cargo-expand). You still need the nightly compiler though.

In my case, the lack of "::" on the macro was the cause. [The pull request to fix the issue](https://github.com/szymonwieloch/rust-dlopen/pull/7/files) has been merged. So you wouldn't hit the issue. But if you have an error around macros, expanding macros to see the result is probably a good idea.