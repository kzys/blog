---
title: "Hacker News Trends"
date: 2018-01-15T07:56:06-08:00
images: [ "/en/image/2018/languages.png" ]
---

Previously, I compared [Hacker News' commonly upvoted words in 2018](https://blog.8-p.info/en/2018/01/01/hacker-news-2017/) and [Deedy Das's 9 years analysis from 2006 to 2015](http://debarghyadas.com/writes/looking-back-at-9-years-of-hacker-news/). In this post, I will take a look annual trends from 2006 to 2017.

The below charts are based on top 1,000 upvoted words. Here is the snippet, and I will publish the full notebook later.

```
SQL = '''
SELECT word, SUM(score) AS score, SUM(1) AS count FROM
  (SELECT word, score FROM
    (SELECT SPLIT(LOWER(title), ' ') AS words, score FROM
      `bigquery-public-data.hacker_news.full` WHERE EXTRACT(year FROM timestamp) = %d) AS
      word_list_and_score
   CROSS JOIN UNNEST(word_list_and_score.words) AS word) AS words
GROUP BY word
ORDER BY score DESC LIMIT 1000
'''

def popular_words(year):
  query = bq.Query(SQL % (year))
  df = query.execute(output_options=bq.QueryOutput.dataframe()).result()
  df['is_stopword'] = df['word'].apply(lambda x: x in stopwords_set)
  return df[df['is_stopword'] == False]

annual_rankings = {}

for year in range(2006, 2018):
  annual_rankings[year] = popular_words(year)
```

Please note that *zeros in the below charts just mean "not in the top 1,000 words"*.

### Mega corps vs. "startup"

Hacker News is backed by Y Combinator, a seed accelerator in Silicon Valley. [Hacker News' Wikipedia article](https://en.wikipedia.org/wiki/Hacker_News) explains the site as

> Hacker News is a social news website focusing on computer science and entrepreneurship.

However "startup" (technically the sum of "startup" and "startups") is in downtrend since 2011. I'm unsure either this is because we are at [after the end of the startup era](https://techcrunch.com/2017/10/22/ask-not-for-whom-the-deadpool-tolls/), or Hacker News is now mainstream-y than before. 

<div class="fig"><img alt="Mega corps vs. startup"src="/image/2018/companies.png" srcset="/image/2018/companies-2x.png 2x"/></div>

### Programming Languages

I thought Go or JavaScript would be the most popular language (and it was at 2015), but now Python is the top!

Meanwhile Ruby is in downtrend. [As Coding Horror wrote in 2013](https://blog.codinghorror.com/why-ruby/),

> Ruby isn't cool any more. Yeah, you heard me. It's not cool to write Ruby code any more. All the cool people moved on to slinging Scala and Node.js years ago.

That is probably not that bad for people who just want to make apps, but not great for getting upvotes in Hacker News (yep, I'm biased. I like Ruby).

<div class="fig"><img alt="Programming Languages" src="/image/2018/languages.png" srcset="/image/2018/languages-2x.png 2x"/></div>

# Web, mobile apps or machine learning?

In this chart, I wanted to capture the below four different genres;

* web
* mobile apps
* data science and big data
* machine learning (incl. deep learning)

but simple word-based trend analysis is probably not the best tool. "data" might have "data breach", "learning" might have "the best learning resources for Python" and so on.

<div class="fig"><img alt="Web, mobile first or machine learning?"src="/image/2018/web.png" srcset="/image/2018/web-2x.png 2x"/></div>

Even though, it is interesting to see that "data" and "learning" are commonly upvoted than "web" and "app" today, and it wasn't before.