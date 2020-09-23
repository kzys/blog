---
title: "Pipe is a thing"
date: 2020-06-16T18:55:44-07:00
tags: ["100DaysToOffload", "Unix"]
---

For years, I thought that `|` (pipe) was a notation which connects the left side's stdout to the right side's stdin. For example,

```
% ls -t | head
```

ls's stdout is connected to head's stdin.

While it is semantically "okay" understanding, technically speaking, that creates a pipe in the first place. Then the pipe is connected to ls's stdin and head's stdout.

From [pipe(7)](https://man7.org/linux/man-pages/man7/pipe.7.html);

> Pipes and FIFOs (also known as named pipes) provide a unidirectional interprocess communication channel.

This misunderstanding also made me really confused about named pipes. I simply didn't get it. Now I know that a Unix pipe is a thing. Giving a filesystem presence for the thing makes sense.
