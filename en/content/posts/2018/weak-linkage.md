---
title: "Weak Linkage in Rust"
date: 2018-08-13T23:16:10-07:00
---

[reqwest](https://github.com/seanmonstar/reqwest), Rust's HTTP crate [doesn't support HTTP/2](https://github.com/seanmonstar/reqwest/issues/292) yet. There might be multiple missing pieces, but one of them is the lack of ALPN support. So, I'm working on that these days.

ALPN -- Application-Layer Protocol Negotiation is TLS' extention, and standardnized as [RFC 7301](https://tools.ietf.org/html/rfc7301). Basically speaking, the negotiation is happening by sending a short string over TLS' initial packets to indicate that the protocol over TLS is HTTP/2. request is using [native-tls](https://github.com/sfackler/rust-native-tls) to support TLS. This crate builds an abstraction layer over three platform-TLS crates - schannel on Windows, security-framework on macOS and openssl on Linux.

Initially I opened [a pull request against native-tls](https://github.com/sfackler/rust-native-tls/pull/100) to support ALPN, then Steven Fackler, the author of the crate told that;

> My current thinking on how we would deal with ALPN on unsupported platforms (e.g. OSX 10.12, OpenSSL 1.0.1, Windows Vista) is that the APIs would always be present, but ALPN would just not run when it isn't supported.

> For Security.framework we'll probably have to implement this by not actually using the security-framework but by instead using dlsym to dynamically load the symbols at runtime if present.

But there is a rabbit hole...

### #[linkage]

Rust itself supports weak linkage, however [the whole linkage feature hasn't been stabilized yet](https://github.com/rust-lang/rust/issues/29603). On this GitHub issue, Alex Crichton wrote that

> I personally consider this a perma-unstable issue for now.

So, it may not be stabilized soon-ish.

### dlopen

There are multiple dlopen wrappers in Rust's crates. dlopen is one of them, and [I fixed its minor issue](https://github.com/szymonwieloch/rust-dlopen/pull/7). dlopen works, but it is a bit odd to see that Security.framework is loaded and dlopen opens the framework once again.

### weak!

Then I realized that Rust's libstd is having the same issue -- [pipe2() is available on some Unix OS-es](https://github.com/rust-lang/rust/blob/b559710e58427213d6f82008206c22cf3d76b4c4/src/libstd/sys/unix/pipe.rs#L25). And the issue has been resolved by having [a small macro called weak!](https://github.com/rust-lang/rust/blob/b559710e58427213d6f82008206c22cf3d76b4c4/src/libstd/sys/unix/weak.rs). Interestingly this macro is copied over mio as [dlsym!](https://github.com/carllerche/mio/blob/master/src/sys/unix/dlsym.rs).

### Conclusion

To have weak linkage, there are three options;

1. #[linkage] --- Good to have zero dependencies, but it hasn't been stabilized yet.
2. dlopen and other dlopen wrappers -- Good to have a crate to solve the issue, but may be overkill for having a few functions
3. weak!, dlsym! or the equivalent

I have picked #3 and now I have [a new pull request against security-framework](https://github.com/sfackler/rust-security-framework/pull/68). It may be merged, soon, I hope.