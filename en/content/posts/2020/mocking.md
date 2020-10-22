---
title: "Mocking is a necessary evil"
date: 2020-10-22T07:11:53-07:00
tags: ["100DaysToOffload", "Programming"]
---
Because of "modern" mocking libraries make mocking easier, developers mock stuff, sometimes too much. Mocking is a necessary evil. You would need to mock a few stuff, but only a few.

The biggest problem of mocking is that you run different code in your testing environment, which basically kills the value of your tests. The tests tell that your change is fine, but you would be unsure because your dependencies are all mocked.

Another problem is that mocking could let you specify your implementation in detail. You know that this function should call A, B, and C. But this level of detail would change over time. Hence it would be better to not specify the detail. Good tests allow you to change your function because you can verify that easily. Bad tests prevents you to change your function because you have to modify all tests to make your code pass.

