---
title: "Pull Request of the Day: moby #41909"
date: 2021-01-25T06:48:42-08:00
tags: ["100DaysToOffload", "Container"]
---
[Handle long log messages correctly on SizedLogger](https://github.com/moby/moby/pull/41909)

This is my first "as AWS" commit on moby.

The `SizedLogger` interface tells `logger.Copier` that CloudWatch's upper bound is 262118 bytes. However moby's logger package has a few logger wrappers that wrap actual loggers. The wrapper structs didn't implement `SizedLogger`. So `logger.Copier` used its default, which is 16KB.

The good news is that `awslogs` is the only affected logger. The bad news is that [`SizedLogger` was introduced in 2017 for awslogs](https://github.com/moby/moby/pull/34888) and hasn't used by anybody else since then.
