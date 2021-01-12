---
title: "Stop writing shell scripts"
date: 2021-01-11T21:53:54-08:00
tags: ["100DaysToOffload", "Unix"]
---
In this year, I'm going to reduce the usage of shell scripts in teams which my scripts would be maintained by someone else in future. Yes. I know that what I type in zsh everyday is considered as a shell script. I know the value of [becoming a shell literate](https://drewdevault.com/2020/12/12/Shell-literacy.html).

However, writing a shell script is difficult. And the difficulty is not worth to deal with.

### Shell is a bad programming language

Let's face it. Even with [the unofficial bash strict mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/), shell has [too many pitfalls](https://mywiki.wooledge.org/BashPitfalls). You wouldn't face it when you write a few lines of code and the script is running in your environment. But once the script is shared within teams, it would run under conditions which you haven't considered, such as a file name with a whitespace. That level of subtleness would easily break poorly-written shell scripts.

To be fair, shell has to be an interactive interface and a programming language. While most programming languages don't have to be both, shell is trying to have the best of both worlds.

That being said, the attempt hasn't been successful [^OIL]. You cannot have both. It is better to use a programming language when you need a programming language.

### You likely to mix a few more languages

Average shell scripts tend to have `awk`, `sed` and nowadays `jq`. We all have learned them somewhere in our career. Combining these small tools shows the power of Unix.

However it makes a barrier for people who don't know them. Do they really need to learn all of them to let computers certain stuff and/or understand what I've written? I don't think so.

### Your environment might not have a shell

This would be weaker than the above two.

In environments like [distroless container images](https://github.com/GoogleContainerTools/distroless), shell is one of the dependencies you need to explicitly install. Writing a shell script doesn't reduce the number of dependencies, compared to other programming languages.

### What would I do instead?

I would use Python or Ruby. I personally know Ruby better, but Python would fit better in Amazon Linux 2 or other distros that have Python by default. If I cannot have them, I might use Go or Rust.

[^OIL]: [Oil](https://www.oilshell.org/) is more promising than just using sh/bash and assuming that is a sane programming language.