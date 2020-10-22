---
title: "Mocking is a necessary evil"
date: 2020-10-22T07:11:53-07:00
tags: ["100DaysToOffload", "Programming"]
---
Because of "modern" mocking library makes mocking easier, developers mock stuff, sometimes too much. Mocking is a necessary evil. You would need to mock a few stuff, but only a few.

The biggest problem of mocking is that you run different code in your testing environment, which basically kills the value of the tests. Your tests tell that your change is fine, but you would be unsure because your dependencies are mocked.

Another problem is that mocking could let you specify your implementation in detail. You know that this function should call A, B, and C. But this level of detail shouldn't be in your tests. The problem of this approach is that your tests would be tightly coupled with the current implementation. Every subtle change on the implementation would break the tests then.
