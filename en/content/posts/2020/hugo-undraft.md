---
title: "hugo undraft alternative"
date: 2020-09-28T20:29:35-07:00
tags: ["Hugo", "100DaysToOffload"]
---
I used to use `hugo undraft` command but [the subcommand was removed in 2018](https://github.com/gohugoio/hugo/issues/4353).

```
date '+date: %Y-%m-%dT%T%z' | sed -E 's/(..)$/:\1/g' | pbcopy
```

`sed` is needed since `%z` returns `-0700` but [TOML's timezone offeset](https://toml.io/en/v1.0.0-rc.2#offset-date-time) has to be `-07:00`.
