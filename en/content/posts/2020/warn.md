---
title: "Don't log warnings"
date: 2020-10-09T19:48:34-07:00
tags: ["100DaysToOffload"]
---

[Dave Cheney has written that already](https://dave.cheney.net/2015/11/05/lets-talk-about-logging);

> Let’s start with the easiest one. Nobody needs a warning log level.

And I do agree with him. Don't log warnings.

Warnings show your uncertainty. Uncertainty regarding the behavior of your system. This state could be bad, or maybe not.

Instead of sharing your feeling by logging that, you should ask your team and figure out whether this is really bad or not. Assuming your system is running 24/7. Log messages should be written for your teammate who is figuring out a production issue at 2am.

Sharing your uncertainty with your teammate is totally fine, but don't do that in midnight. Do that in work hours.
