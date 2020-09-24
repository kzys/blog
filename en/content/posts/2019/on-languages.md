---
title: "On Languages"
date: 2019-03-27T00:08:04-07:00
tags: ["Go", "Java"]
---

My "feelings" regarding programming languages.

### Java

I've been using Java for years. It is showing its age.

Java is enforcing weird trade-offs such as "being safer by adding final on variables" vs. "being concise by not adding final on variables". You really don't have to pick one of them on other, newer languages.

Java's class libraries are also odd. Immutable collections shouldn't implement mutable collections' interfaces. Throwing RuntimeException on `add()` means that your type-safety is a lie. Don't do that.

But, all of them are coming from the fact that Java is backward-compatible for decades. Lambda was good, `var` is coming, but we cannot change the language and its libraries drastically anymore.

### Kotlin

Kotlin is a good alt-Java language. I've been using that for a few months at [a small Android project](https://github.com/karino2/kotlitex), which my friend in Tokyo started.

Being a JVM language means that all of the performance characteristics are the same, which makes the language sometimes difficult to sell. It is slow to start, can be faster, but won't be faster than Java.

Yes. Kotlin has "Kotlin for Native" and "Kotlin for JavaScript". I haven't tried them yet.

Meanwhile, being a JVM language means that you can use Java's ecosystem, which I honestly have mixed feelings. Java's ecosystem looks sometimes largely complicated. Do you really want to carry all of the historical baggage?

### Scala

I was using Scala and [contributing Scala itself between 2011 to 2015](https://github.com/scala/scala/commits?author=kzys). To be fair, I was mainly working on Scala's documentation generator -- Scaladoc at that time.

Scala is good, but honestly speaking, Kotlin seems good enough.

Kotlin looks simpler, while it has some magic behind the compiler, such as converting Kotlin collections to Java collections implicitly. Kotlin's IDE experience is superior, which makes selling the language easier. Java developers tend to expect flawless IDE experience.

### Rust

Rust is interesting. The language is designed to replace C/C++, which is a moonshot. Other languages partially did, but not entirely yet. The community is trying to be somewhat different - no BFDL, having annual roadmaps, no huge corporate backing. Mozilla is still contributing a lot, but some of the key contributors are leaving the company this year.

I've been contributing [Rust itself](https://github.com/rust-lang/rust/commits?author=kzys), [rbspy](https://github.com/rbspy/rbspy/commits?author=kzys) and some other Rust projects these days.

Rust would be lean and faster than other languages including JVM ones. Not so sure how many people actually willing to pay the cost (the difficulity of the language), but it is a better/objective pitch than "it looks good" which is subjective.

### Ruby

I've been using Ruby for years, even before Rails. I have attended a few RubyKaigi's. For simple-and-fast scripting, I still pick Ruby over other languages.

### Python

For data science-y stuff, I use Python on Jupyter.

For scripting, I sometimes use Python, simply because I know Ruby well and want to be more proficient in different languages.

### Perl

I was using Perl for years. My first job out of college is a LAMP developer. I was literally using Linux, Apache, MySQL and Perl. I know how to write a decent Perl script. I still use `perl -ne` and such for writing simple one-liners.

### Go

Go's growing popularity is interesting. Before Go, almost all programming languagues were becoming functional programming languages where you can write map, reduce, fold, ... but Go said no.

And Go developers do like Go! I initially thought this was only in Japan, where I lived, but seems like it is not.

[Go Is Unapologetically Flawed, Here’s Why We Use It](https://bravenewgeek.com/go-is-unapologetically-flawed-heres-why-we-use-it/) (2015)

> Go has an increasingly vibrant community, but it’s profoundly stubborn. My biggest gripe is not with the language itself, but with the community’s seemingly us-versus-them mentality.

I was writing some Go, including for [moby](https://github.com/moby/moby/commits?author=kzys) (formaly known as Docker) and [Go](https://github.com/golang/go/commits?author=kzys) itself. I was trying to port Docker on FreeBSD out of curiosity, which I hadn't finished, but somebody did eventually.

### JavaScript

I've been using JavaScript for years, but not professionally these days. JavaScript or TypeScript may make sense for FaaS, where Java's cold-start is problematic.
