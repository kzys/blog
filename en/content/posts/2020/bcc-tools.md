---
title: "BCC tools I've used: opensnoop and killsnoop"
date: 2020-05-24T11:42:13-07:00
---

[BCC](https://github.com/iovisor/bcc) (BPF Compiler Collection) has a bunch of "tools" (small Python scripts) that utilizes BPF. Because of the fact that BPF can trace the entire Linux kernel, these tools are useful when you cannot target a specific process easily. In my mind, they are like `top` or `ps`, rather than `strace`.

### opensnoop

opensnoop traces all open() syscalls.

Let's say, you know that some stats are coming from /proc filesystem, but your daemon doesn't report the stats, and the daemon has multiple processes. opensnoop is the tool you want.

### killsnoop

killsnoop traces all kill() syscalls.

Let's say your process is killed by someone mysteriously and strace shows the process is only doing ordinary stuff. killsnoop is the tool you want.

[#100DaysToOffload](https://100daystooffload.com/) - 2/100
