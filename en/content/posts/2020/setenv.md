---
title: "os.Getenv() and os.Setenv() are safe to call from multiple goroutines simultaneously"
date: 2020-10-21T22:05:23-07:00
tags: ["100DaysToOffload", "Go"]
---

This is another Go thing I've learned at work.

os.Getenv() and os.Setenv() calls syscall.Getenv() and syscall.Setenv(). And inside the syscall package, there is [a package-scope lock](https://github.com/golang/go/blob/af09ff1981063b28705726a86b913dfa98d70942/src/syscall/env_unix.go#L21).
