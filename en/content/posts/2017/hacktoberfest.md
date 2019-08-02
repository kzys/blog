---
title: "Hacktoberfest 2017"
date: 2017-10-22T07:43:07-07:00
---

Hacktoberfest is a month-long event organized by DigitalOcean. The rules are,

* Sign-up at [the Hacktoberfest website](https://hacktoberfest.digitalocean.com)
* Open four pull requests on any GitHub-hosted repositories between October 1st and October 31th
* Get a t-shirt!

And I opened four pull requests and all of them are merged! Woo-hoo!

I initially wanted to learn and contribute to Rust. [The issues](https://github.com/rust-lang/rust/issues) were nicely labelled and organized. But learning the new language and contributing to the language itself were too hard to do in a month.

Instead I was looking Hugo, which [I had worked](https://github.com/gohugoio/hugo/commits?author=kzys) during Hacktoberfest 2014.

There was [this interesting issue](https://github.com/gohugoio/hugo/issues/3947) -- Hugo's Polish support seemd half-working. But the root cause was that, Polish's plural form has 4 categories (one, few, many and other) and the reporter didn't define the 4 forms.

Then, through [this issue](https://github.com/gohugoio/hugo/issues/3541), I realized that there were at least two TOML parsers; `BurntSushi/toml` and `pelletier/go-toml`. Hugo switched to go-toml once, but reverted back to BurntSushi's.

Can I make go-toml better/faster to be the TOML parser for Hugo again?

### go-toml

I ended up having 4 pull requests

1. [Support single quoted keys](https://github.com/pelletier/go-toml/pull/193)
2. [Add fuzz.sh to do fuzzing with go-fuzz](https://github.com/pelletier/go-toml/pull/194)
3. [Fix typos](https://github.com/pelletier/go-toml/pull/195)
4. [Unmarshal should report a type mismatch as an error](https://github.com/pelletier/go-toml/pull/196)

The first one was good. I simplified `inQuote` and `escapeNext` by having `state`. The only problem here was what I wrote was very similar to `lexString()`. I probably should send a follow-up PR.

The second one was interesting, but I didn't find any interesting issues through fuzzing yet. Probably due to the corpus?

The third one was easy. I just checked [go-toml's report card](https://goreportcard.com/report/github.com/pelletier/go-toml) where [misspell](https://github.com/client9/misspell) reported these typos.

The last one was so Go. Don't panic. Return an error. I missed Scala's `match` syntax where I can combine `case` and `if` though.

Also, [short dates support](https://github.com/pelletier/go-toml/issues/63) is work in progress. The blocker was that, there were no civil types in Go's stdlib. Tom recommended to use [cloud.google.com/go/civil](https://godoc.org/cloud.google.com/go/civil). So I will.

### Lesson Learned

I'm not a first-time open source contributor. I probably can claim "seasoned" (kids, I know SourceForge and Google Code). But I didn't do much these days after getting married and having a baby. That is legitimate and will continue. I'm the only husband/dad for them, whereas I'm just a yet another software developer.

However it is still good to see I can code in my spare time, relatively quickly understand codebase and contribute to the world. It is fun!
