---
title: "Links for Code Reviews"
date: 2018-11-11T09:07:15-08:00
---

I have a bunch of links which I often cite during code reviews. It might sound pedantic, but simply, there are a lot of good writings about software development, and some of them are freely available on the internet. Why do I keep them secret?

Or, probably due to the fact that English is my second language, I just let others explain my thoughts. But laziness is one of the three great virtues of a programmer. Why don't I?

### Code Reviews

[On Code Review](https://medium.com/@9len/on-code-review-16ea85f7c585) -- I don't say I'm doing that all the time, but I'm trying to.

> 1. Code review should probably always be your top priority, and you should figure out the best way to work it into your event loop.
> 2. Make your code review requests a pleasure to read.

### Error Handling

[Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors) -- While the main target is Node.js, operational errors vs. programmer errors is widely applicable and good to think about.

> People use the term "errors" to talk about both operational and programmer errors, but they're really quite different.

[The Trouble with Checked Exceptions](https://www.artima.com/intv/handcuffs.html) -- Checked exceptions are difficiult and even controversial. People are sometimes not aware that post-Java languages don't have that.

> By implementing checked exceptions the way it's done in Java, for example, I think you just take one set of problems and trade them for another set of problems.

### Testing

[Test Coverage](https://martinfowler.com/bliki/TestCoverage.html)

> Test coverage is a useful tool for finding untested parts of a codebase. Test coverage is of little use as a numeric statement of how good your tests are.

[Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html)

> The test pyramid is a way of thinking about different kinds of automated tests should be used to create a balanced portfolio.

[Test Sizes](https://testing.googleblog.com/2010/12/test-sizes.html) -- I haven't used the definition as is at work though.

### Latency

[#LatencyTipOfTheDay: Q: What's wrong with this picture? A: Everything!](http://latencytipoftheday.blogspot.com/2014/06/latencytipoftheday-q-whats-wrong-with_21.html)

> And stop looking at feel good charts. Start asking for pretty charts of data that actually matters to your operations...

["How NOT to Measure Latency" by Gil Tene](https://www.youtube.com/watch?v=lJ8ydIuPFeU) [Video]

### Java gotchas

[Log4j 2 API Messages](https://logging.apache.org/log4j/2.0/manual/messages.html) -- Don't do string concatenation for logging.

> In addition, when using the methods that accept Strings and parameters, the underlying Message object will only be created if any configured global filters or the Logger's log level allow the message to be processed.

[PowerMock](https://github.com/powermock/powermock) -- Don't use PowerMock unless you really need to.

> Please note that PowerMock is mainly intended for people with expert knowledge in unit testing. Putting it in the hands of junior developers may cause more harm than good.

[Testing on the Toilet: Cleanly Create Test Data](https://testing.googleblog.com/2018/02/testing-on-toilet-cleanly-create-test.html)

> Instead, use the test data builder pattern: create a helper method that returns a partially-built object (e.g., a Builder in languages such as Java, or a mutable object) whose state can be overridden in tests.

### Microservices

Okay. I haven't discussed about "microservices or not" on code reviews, but I have discussed about that at other occasions.

[Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) -- It has been written in 2015, but I think the assertion is still valid.

> This pattern has led many of my colleagues to argue that you shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile.

[Don’t Build a Distributed Monolith](https://www.microservices.com/talks/dont-build-a-distributed-monolith/) [Video]

> In pursuit of ease and obedience to the DRY ("don't repeat yourself") axiom, it is common to build a distributed monolith instead of the intended decoupled microservice architecture. 

[Kill "Microservices" before its too late](https://www.youtube.com/watch?v=-UKEPd2ipEk) [Video] -- This is a bit extreme but thought provoking.
