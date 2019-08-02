---
title: "Book: Software Design X-Rays"
date: 2018-11-18T07:03:47-08:00
---

I finished reading "Software Design X-Rays". The book is about "behavioral" code analysis. While traditional static code analysis treats source code as a set of files, behavioral code analysis focuses the files' history inside a version control system such as Git, which shows developers' behaviors in addition to the artifacts.

I was actually trying to find something interesting from Git repos before;

- [Loading Git into Pandas' dataframe](https://blog.8-p.info/en/2018/01/29/git-with-pandas/)
- [Angular vs. Vue: Types of Changes](https://blog.8-p.info/en/2018/02/05/types-of-changes/)

Those were fun and looked good, but I haven't compiled these to something actionable. I would say it wasn't my focus, but I also thought it would be difficult.

The author, Adam Tornhill was combining both static and behavioral analysis, and providing valuable insights to fight against engineering problems, which is quite fascinating. There are a bunch of Unix one-liners and a quote lot of references to the research papers regarding this domain inside the book. In addition to that, he funded a company that provides behavioral code analysis as a service -- [CodeScene](https://codescene.io/).

I am going to try some of the analyses at work, and/or open source projects to see how they work.