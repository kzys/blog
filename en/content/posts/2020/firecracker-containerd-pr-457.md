---
title: "Pull Request of the Day: firecracker-containerd #457"
date: 2020-11-17T06:21:57-08:00
tags: ["100DaysToOffload", "Go"]
---

[Use codes.AlreadyExists correctly on Exec()](https://github.com/firecracker-microvm/firecracker-containerd/pull/457)

This issue shows one of the places Go's error idiom doesn't work. The shim should use gRPC's errors when it is applicable, but the type signature doesn't tell.
