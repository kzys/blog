---
title: "Your branch could become a technical debt"
date: 2020-10-06T06:43:39-07:00
tags: ["100DaysToOffload"]
---
Branching in Git (or any version control systems) is pretty easy, but merging the branch into the original branch is sometimes hard. As you keep the branch longer, merging that is becoming more difficult. You would have a lot of merge conflicts. Your team may become nervous about refactoring because of possible conflicts.

In some sense, a branch, especially longer-lived one could become a technical debt. It looks easier in the beginning, but you would pay the cost of branching someday. It is like paying off credit card debt, of course with interest charges.

Nowadays I simply avoid making longer-lived branches. I still make a local, personal branch for development, but I merge that as soon as I can. [Trunk-based development](https://trunkbaseddevelopment.com/) with [flags](https://trunkbaseddevelopment.com/feature-flags/) is much less painful than fixing all merge conflicts at the end of a sprint.

### Martin Fowler says...

Martin Fowler has written [Patterns for Managing Source Code Branches](https://martinfowler.com/articles/branching-patterns.html) in May 2020. This article is really long and I haven't read the whole honestly speaking. However the bottom line sounds similar to what I've written here.

> As I said at the beginning of this long piece: branching is easy, merging is harder. Branching is a powerful technique, but it makes me think of goto statements, global variables, and locks for concurrency. Powerful, easy to use, but easier to over-use, too often they become traps for the unwary and inexperienced. Source code control systems can help to control branching by carefully tracking changes, but in the end they can only act as witnesses to the problems.

So, be careful and avoid if you can.
