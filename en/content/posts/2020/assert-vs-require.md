---
title: "assert.Equal() vs. require.Equal()"
date: 2020-10-14T19:56:16-07:00
tags: ["100DaysToOffload", "Go"]
---

[testify](https://github.com/stretchr/testify) package provides `assert` package and `require` package. Some people only use `require` whereas others intentionally mix `assert` and `require`.

I think I'm the one who care the difference, but Jacob commented on my PR that I wasn't careful enough this time;

> nit: please prefer to use `assert` if the tests allow it. Preferring `assert`, over `require`, helps extract as many relevant failures in a single test run.

Yes! For sure :)

### But why?

testify's README explains the difference of the behaviors but doesn't explain "why". Instead it mentions;

> See t.FailNow for details.

However, [t.FailNow](https://golang.org/pkg/testing/#T.FailNow) only says;

> FailNow marks the function as having failed and stops its execution by calling runtime.Goexit (which then runs all deferred calls in the current goroutine). Execution will continue at the next test or benchmark. FailNow must be called from the goroutine running the test or benchmark function, not from other goroutines created during the test. Calling FailNow does not stop those other goroutines.

Yeah. But does it have `Fail()` and `FailNow()`?

I think [Google Test Primer](https://github.com/google/googletest/blob/master/googletest/docs/primer.md) is probably the best reference regarding "why".

> The assertions come in pairs that test the same thing but have different effects on the current function. `ASSERT_*` versions generate fatal failures when they fail, and **abort the current function**. `EXPECT_*` versions generate nonfatal failures, which don't abort the current function. Usually `EXPECT_*` are preferred, as they allow more than one failure to be reported in a test. However, you should use `ASSERT_*` if it doesn't make sense to continue when the assertion in question fails.

Unless it is coming from Plan 9, I think `Fail()` and `FailNow()` are coming from Google Test.
