---
title: "GNU date can do a lot with --date"
date: 2020-07-16T20:37:02-07:00
tags: ["100DaysToOffload", "Unix"]
---

### 3 days ago

GNU: `date --date '3 days ago'`

BSD: `date -v -3d`

### From UNIX epoch

GNU: `date --date @1594956336`

BSD: `date -r 1594956336`

### So what GNU date can do with `--date`? What is the syntax?

From [man date(1)](https://man7.org/linux/man-pages/man1/date.1.html);

> The `--date=STRING` is a mostly free format human readable date string
> such as "Sun, 29 Feb 2004 16:21:42 -0800" or "2004-02-29 16:21:42" or
> even "next Thursday".  A date string may contain items indicating
> calendar date, time of day, time zone, day of week, relative time,
> relative date, and numbers.  An empty string indicates the beginning
> of the day.  *The date string format is more complex than is easily
> documented here but is fully described in the info documentation.*

Oh, yeah. I love this stubborn GNU-ism! [The quote in the info documentation](https://www.gnu.org/software/coreutils/manual/html_node/Date-input-formats.html) is also fascinating.
