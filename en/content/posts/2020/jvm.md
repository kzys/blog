---
title: "Pitching a JVM language is hard"
date: 2020-12-11T23:19:45-08:00
tags: ["100DaysToOffload"]
---

Long long time ago, probably around 2009, I was a Scala boy. I was  writing Perl at work, realized that the dynamic nature of the language made changing things too hard, wanted to have a concise language with a big "ecosystem".

After 10+ years, I still haven't written Scala at work. Yes. Kotlin is getting popular, but it still haven't replaced Java. I now think pitching a JVM language is actually harder than pitching a non-JVM language.

First, Java is fine for a lot of people. I was living in a non-enterprise web shop bubble and didn't realize that at that time. The language is getting slightly concise over time. People have figured out the ways to "deal" with Java, such as Lombok, Immutables, AutoValue and/or Checker Framework.

Second, a JVM language doesn't have any quantitative benefits over Java. The large-but-fast runtime is the same. The syntax would be nicer but it is qualitative. If you want to have a single executable, use Go. If you cannot tolerate GC but don't want to use C/C++ yet, use Rust. JVM languages wouldn't have this sort of "go-to" reasons.

Third, building a new ecosystem with a lot of packages is possible. Rust, Go and Node are "new" around 2009, and have built sufficiently large ecosystems. It takes time though.
