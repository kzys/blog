---
title: "SIGRTMIN is tricky"
date: 2021-08-02T22:46:06-07:00
---
I was working on [a pull request to support real-time signals in containerd](https://github.com/containerd/containerd/pull/5693). While the merged change is using [github.com/moby/sys](https://github.com/moby/sys), I went the DIY way first and learned a bit about real-time signals, or more specifically saying SIGRTMIN.

According to [signal(7)](https://man7.org/linux/man-pages/man7/signal.7.html);

> The range of supported real-time signals is defined by the macros `SIGRTMIN` and `SIGRTMAX`.

However, containerd is avoiding cgo unless it is absolutely necessary. So I wanted to define `SIGRTMIN` by myself, which is tricky.

Again from the same manpage;

> The Linux kernel supports a range of 33 different real-time signals, numbered 32 to 64.  However, the glibc POSIX threads implementation internally uses two (for NPTL) or three (for LinuxThreads) real-time signals (see pthreads(7)), and adjusts the value of `SIGRTMIN` suitably (to 34 or 35).

This man page is flatly comparing NPTL and LinuxThreads, but LinuxThreads is an ancient threads implementation in Linux. You really don't have to worry about. That being said, the man page only talks about glibc, GNU's libc implementation. There is musl libc, which defines [SIGRTMIN as 35](https://git.musl-libc.org/cgit/musl/tree/src/signal/sigrtmin.c).

Back to the containerd story. We decided that it would be better to be compatible with Docker, Sebastiaan extracted the part as `moby/sys/signal` and we simply took it.
