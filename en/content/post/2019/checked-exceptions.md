---
title: "Say No to Checked Exceptions"
date: 2019-07-04T00:48:34-07:00
---

I recently learned that AWS SDK for Java's official Developer Guide is having a section about checked exceptions -- basically why it doesn't use checked exceptions.

[Exception Handling](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/java-dg-exceptions.html)

> In general, checked exceptions work well on small scales, but can become troublesome as applications grow and become more complex.

In v1 SDK, [the section had links to a few references](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/java-dg-exceptions.html), including Anders Hejlsberg's interview in 2003.
