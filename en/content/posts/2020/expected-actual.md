---
title: "(expected, actual) or (actual, expected) ?"
date: 2020-02-02T07:30:49-08:00
tags: ["Cheatsheet"]
---

I use multiple programming languages and writing automated tests is one of the confusing parts. This is a cheat sheet to quickly check the difference of testing libraries.

### Go

Go's standard [testing](https://golang.org/pkg/testing/) package doesn't provide assert functions. A lot of projects use `testify`.

#### [testify](https://github.com/stretchr/testify)

* assert.Equal(t, expected, actual)
* require.Equal(t, expected, actual)

### Perl

#### [Test::More](https://perldoc.perl.org/Test/More.html)

* is(actual, expected)

### Python

#### [pytest](https://docs.pytest.org/en/latest/)

* assert expr

### Rust

#### std

* assert_eq!(left, right)

It let developers decide which one is `expected`, according to [the Rust Programming Language](https://doc.rust-lang.org/book/ch11-01-writing-tests.html).

### Java

#### [Hamcrest](http://hamcrest.org/JavaHamcrest/javadoc/1.3/org/hamcrest/MatcherAssert.html)

* assertThat(actual, matcher)

### [JUnit 5](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html)

* assertEquals(expected, actual)

### [TestNG](https://www.javadoc.io/doc/org.testng/testng/latest/org/testng/Assert.html)

* assertEquals(actual, expected)
