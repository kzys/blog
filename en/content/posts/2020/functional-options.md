---
title: "Go Patterns: Functional Options"
date: 2020-10-29T07:00:59-07:00
tags: ["100DaysToOffload", "Go"]
---
Dave Cheney already has written 
[Functional options for friendly APIs](https://dave.cheney.net/2014/10/17/functional-options-for-friendly-apis) in 2014. I don't have much to add.

I initially saw this pattern as Go's named parameters alternative. But this pattern also works as an alternative for function overloading.

Changing a function signature in a large codebase is always hard regardless of programing languages. I often use function overloading to make the signature backward-compatible, but I cannot do that in Go. Functional options come in handy as a way to have extensible APIs.

FYI, Google researchers have published [Detecting argument selection defects](https://research.google/pubs/pub46317/) in 2014. According to the research paper;

>  We were able to show that the probability of an argument selection defect increases markedly beyond 5 parameters. One option for methods with many parameters is to redesign using a fluent interface or parameter objects. Another alternative is the use of named parameters, which could be emulated in Java with a static check in Error Prone which inspects the comments on arguments.

So, if your Go function takes more than 5 parameters, consider functional options.
