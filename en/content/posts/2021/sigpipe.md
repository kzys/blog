---
title: "SIGPIPE is weird"
date: 2021-02-19T21:31:30-08:00
tags: ["Unix", "History"]
---
[Firecracker v0.24.2](https://github.com/firecracker-microvm/firecracker/releases/tag/v0.24.2) has been released which handles SIGPIPE. I was working on that this week.

[TCP/IP, Sockets, and SIGPIPE](https://blog.erratasec.com/2018/10/tcpip-sockets-and-sigpipe.html) (2018) is a good read. The author mostly focuses the fact that TCP socket APIs were based on pipes, so pipes' behaviors were automatically inherited.

But, even regarding pipes, SIGPIPE is weird. Writing to files would fail but it won't kill a program. Why do we want to kill a program only for pipes?

There is [a Stack Overflow question](https://stackoverflow.com/questions/8369506/why-does-sigpipe-exist) with some answers. The most accepted one is;

> I believe the reason `SIGPIPE` exists is much simpler: establishing sane default behavior for pure "filter" programs that continuously read input, transform it somehow, and write output.

Which, somewhat makes sense.

In terms of history, [Unix v6 had signal(2) with 13](http://man.cat-v.org/unix-6th/2/signal) -- "write on a pipe with no one to read it". At that time, all signals didn't have names and only defined as numbers. [Unix v1 didn't have any signals](http://man.cat-v.org/unix-1st/2/). man.cat-v.org doesn't have Unix v5's man pages, but [the Unix Heritage Society](https://www.tuhs.org/) has [Unix Programmer's Manual's scanned PDF](https://www.tuhs.org/Archive/Distributions/Research/Dennis_v5/v5man.pdf). According to the PDF, page 159, Unix v5 had signal(2) but didn't have 13. So SIGPIPE was introduced as the part of Unix v6.

Interestingly [Rust ignores SIGPIPE](https://github.com/rust-lang/rust/issues/62569) due to the fact it had green threads before. The ship has sailed and people don't want to change the behavior anymore. [Go ignores SIGPIPE too](https://golang.org/pkg/os/signal/#hdr-SIGPIPE) only if the file descriptor is neither stdout nor stderr.
