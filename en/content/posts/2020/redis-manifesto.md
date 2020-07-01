---
title: "The Redis Manifesto"
date: 2020-06-30T22:13:06-07:00
tags: ["100DaysToOffload"]
---
Salvatore Sanfilippo (or antirez) is [stepping back as the Redis maintainer](http://antirez.com/news/133).

While I haven't used Redis professionally, I do like [the Redis Manifest](https://github.com/redis-io/redis/blob/unstable/MANIFESTO). It was originally posted on [his blog](http://oldblog.antirez.com/post/redis-manifesto.html) in 2011.

The half of the manifest is about Redis. Amazon people may see that as Redis' tenets. But another half is, for me, it really sounds like his own manifesto.

> 5 - Code is like a poem; it's not just something we write to reach some
>     practical result. Sometimes people that are far from the Redis philosophy
>     suggest using other code written by other authors (frequently in other
>     languages) in order to implement something Redis currently lacks. But to us
>     this is like if Shakespeare decided to end Enrico IV using the Paradiso from
>     the Divina Commedia. Is using any external code a bad idea? Not at all. Like
>     in "One Thousand and One Nights" smaller self contained stories are embedded
>     in a bigger story, we'll be happy to use beautiful self contained libraries
>     when needed. At the same time, when writing the Redis story we're trying to
>     write smaller stories that will fit in to other code.
>
> 6 - We're against complexity. We believe designing systems is a fight against
>     complexity. We'll accept to fight the complexity when it's worthwhile but
>     we'll try hard to recognize when a small feature is not worth 1000s of lines
>     of code. Most of the time the best way to fight complexity is by not
>     creating it at all. Complexity is also a form of lock-in: code that is
>     very hard to understand cannot be modified by users in an independent way
>     regardless of the license. One of the main Redis goals is to remain
>     understandable, enough for a single programmer to have a clear idea of how
>     it works in detail just reading the source code for a couple of weeks.

Do you have your own manifesto? I don't have. Maybe I should.
