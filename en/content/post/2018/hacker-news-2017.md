---
title: "Looking back 2017, through Hacker News stories"
date: 2017-12-25T06:13:18-08:00
draft: true
---

How was 2017 for you? Well, it was eventful for me. But instead of focusing yours and/or mine, I'd like to see how was that, for fellow hackers, through [Hacker News' public dataset](https://cloud.google.com/bigquery/public-data/hacker-news).

Google BigQuery has interesting public datasets and Hacker News is one of them. Deedy Das already did [a lot of interesting analysis in 2015, that covered 9 years from 2006](http://debarghyadas.com/writes/looking-back-at-9-years-of-hacker-news/). Some of the SQL queries I will use in this post are shamelessly taken from his post :)

Technically people can upvote/downvote last year's stories on Hacker News. There is no "archive" like Reddit, as far as I know. If you execute the queries from your console, the numbers might not be exactly the same.

### Top Stories

Let's start from the simplest one. What was the most upvoted stories in 2017?

```
#standardSQL
select title, url, score, `by`, timestamp from `bigquery-public-data.hacker_news.full`
where type = 'story' and extract(year from timestamp) = 2017
order by score desc limit 20
```

Interestingly the top one is matched to [Time's Person of the Year 2017](http://time.com/time-person-of-the-year-2017-silence-breakers/), Silent Breakers.

### Commonly Shared/Upvoted Domains

### Commonly Upvoted Words

### Programming Language Trends

As a [This PLT Life](http://this-plt-life.tumblr.com/) reader, I do want to see the trends.

### Haskell Weekends?

Julia Silge figured out [the interesting pattern in Stack Overflow, between weekdays and weekends](https://stackoverflow.blog/2017/02/07/what-programming-languages-weekends/),

> The programming language Haskell makes up 0.365% of weekend questions in this dataset, but only 0.21% of weekday questions, showing it is unusually popular on weekends.

How about, in Hacker News?

### What's Next

There are a lot of questions I can ask. I solely checked Hacker News, but as Felipe Hoffa wrote in [Big data stories in seconds: Hacker News and BigQuery](https://medium.com/google-cloud/big-data-stories-in-seconds-hacker-news-abe52bc5caad);

> Then most fun part of having a dataset in BigQuery is the ability to start combining it with others.

So, I didn't have the most fun part yet. Also I was checking only stories, but how about comments? How about comparing this result vs. 2016?

I would like to write a follow-up post later, hopefully this month. So, stay tuned!
