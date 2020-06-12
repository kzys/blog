---
title: "Don't create a Unix domain socket in a deep directory"
date: 2020-06-11T20:29:37-07:00
tags: ["100DaysToOffload"]
---
Creating a Unix domain socket in a deep directory is a bad idea, or at least causes a tricky problem. Because the maximum length of the socket path is around 100 bytes.

On Linux, according to [unix(7)](https://www.man7.org/linux/man-pages/man7/unix.7.html), it is 108 bytes.

> On Linux, sun_path is 108 bytes in size; see also NOTES, below.

On FreeBSD, according to [unix(4)](https://www.freebsd.org/cgi/man.cgi?query=unix&sektion=4), it is 104 bytes.

> UNIX-domain addresses are variable-length file system pathnames of at most 104 characters.

It is consistent with [NetBSD](https://netbsd.gw.com/cgi-bin/man-cgi?unix+4+NetBSD-current) and [OpenBSD](https://man.openbsd.org/unix.4).

So, it is 2020 and I need to put something in around 100 bytes! That is shorter than the original Tweet length. I realized this limitation recently because of firecracker-containerd. It has [a workaround](https://github.com/firecracker-microvm/firecracker-containerd/pull/270) which [I copied to another part of the codebase](https://github.com/firecracker-microvm/firecracker-containerd/pull/270).
