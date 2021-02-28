---
title: "Pull Request of the Day: firecracker-containerd #483"
date: 2021-02-28T12:55:34-08:00
tags: ["Container", "Go"]
---

Last week, I've been working on firecracker-containerd's this pipe issue. [The pull request](https://github.com/firecracker-microvm/firecracker-containerd/pull/483) is still a messy draft, but seems it fixes the issue finally.

### What is the issue?

When you run a container in a micro VM, you have FIFO files on both the micro VM and its host. These FIFO files are not connected together, but firecracker-containerd is reading bytes from one and writing the bytes to another (or vice versa), so they *look* connected from clients.

Inside firecracker-containerd, IOProxy is responsible for connecting them. However the proxy would stop when it has an error. So errors like EPIPE would stop the proxy completely.

My fix here is detecting a stopped IOProxy and creating a new one instead. Sounds simple. Right? But I was really struggling.

### Concurrency is hard

Goroutines and channles make the problem difficult. I had multiple strange timeouts. In hindsight, they were deadlocks. In Go, reading more than what a channel has blocks the reader, and writing more than what a channel can hold blocks the writer. And when things block, I really cannot see why.

I may need to use debuggers like [Delve](https://github.com/go-delve/delve), or build a mechanism that dumps all goroutines.

### Increment Build

Another part that makes me unproductive is the slowness of firecracker-containerd's build, especially around the in-VM agent. Building the agent is fast, but putting the agent in a new root filesystem image is slow.

The root filesystem is currently all squashfs. I probably should create an ext4 variant. So that I can mount a pre-built image and replace the agent.

### Meta: Blub Studies

Both [Chris Krycho's note](https://v5.chriskrycho.com/notes/2021-02-28-1004/) and Hillel Wayne's [TLA+ Action Properties](https://www.hillelwayne.com/post/action-properties/) led me to Ben Kuhn's [In defense of blub studies](https://www.benkuhn.net/blub/).

How IOProxy works inside firecracker-containerd is "blub" knowledge. How do I keep the knowledge and pass around? Right now, I'm writing that on this personal blog, but there may be more official places. Maybe [ARCHITECTURE.md](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)? Isn't it too specific?


