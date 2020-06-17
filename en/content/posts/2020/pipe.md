---
title: "Pipe is a thing"
date: 2020-06-16T18:55:44-07:00
tags: ["100DaysToOffload", "unix"]
---

I thought that `|` was a notation which connects the left side's output to the right side's input. Semantically that's correct.

```
% ls -t | head
```

But technically, that creates a pipe, connect the pipe to `ls` and `head`. And the pipe is even having an internal buffer.

So, `|` is the notation to create a pipe which connects the left side to the right side. A Unix pipe is a thing.

This misunderstanding made me confused about named pipes. I simply didn't get it. Now I know that a pipe is a thing. Giving a filesystem presence for the thing makes sense.
