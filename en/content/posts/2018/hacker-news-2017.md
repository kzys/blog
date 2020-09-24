+++
title = "Looking back 2017, through Hacker News"
date = 2018-01-01T05:06:37-08:00
images = [ "/en/image/2018/word3.png" ]
readmore = true
tags: ["Python"]
+++

How was 2017 for you? Have you learned Rust? Have you invested in Bitcoin? Was it the year of Linux desktop (again)?

In this post, I'd like to see how was the last year for fellow hackers, through [Hacker News' public dataset](https://cloud.google.com/bigquery/public-data/hacker-news) on Google BigQuery.

Google BigQuery has interesting public datasets and Hacker News is one of them. Deedy Das already did [a lot of interesting analysis in 2015, that covered 9 years from 2006](http://debarghyadas.com/writes/looking-back-at-9-years-of-hacker-news/). Most of the SQL queries below are taken from his post.

Technically people can upvote/downvote last year's stories on Hacker News. There is no "archive" mode like Reddit as far as I know. If you run the queries again, the numbers would be a bit different.

### Top Stories

Let's start from the simplest one. What was the most upvoted stories in 2017?

I mainly used Google Cloud Datalab to get the numbers. `%%bq query` lets Datalab (which is basically Jupyter Notebook) interrepts a cell as a SQL on BigQuery. If you use BigQuery's console, you may need `#standardSQL` instead.

```
%%bq query
SELECT title, url, score, id, timestamp FROM `bigquery-public-data.hacker_news.full`
WHERE type = 'story' AND extract(year FROM timestamp) = 2017
ORDER BY score DESC LIMIT 30
```

Here is the result. Apparently, it was the year of [Silent Breakers](http://time.com/time-person-of-the-year-2017-silence-breakers/), even for Hacker News.

<table>
<tr><th></th><th>Title</th><th>Score</th><th>Timestamp</th></tr>
<tr><td>1</td><td><a href="https://www.susanjfowler.com/blog/2017/2/19/reflecting-on-one-very-strange-year-at-uber">Reflecting on one very, very strange year at Uber</a></td><td>4107</td><td>2017-02-19 21:16:33</td></tr>
<tr><td>2</td><td><a href="https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html">F.C.C. Repeals Net Neutrality Rules</a></td><td>3384</td><td>2017-12-14 18:13:35</td></tr>
<tr><td>3</td><td><a href="https://bugs.chromium.org/p/project-zero/issues/detail?id=1139">Cloudflare Reverse Proxies Are Dumping Uninitialized Memory</a></td><td>3238</td><td>2017-02-23 23:05:08</td></tr>
<tr><td>4</td><td><a href="https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html">Announcing the first SHA-1 collision</a></td><td>3030</td><td>2017-02-23 13:01:08</td></tr>
<tr><td>5</td><td><a href="https://twitter.com/lemiorhan/status/935578694541770752">macOS High Sierra: Anyone can login as “root” with empty password</a></td><td>3001</td><td>2017-11-28 19:41:10</td></tr>
<tr><td>6</td><td><a href="https://boingboing.net/2017/09/18/antifeatures-for-all.html">W3C abandons consensus, standardizes DRM, EFF resigns</a></td><td>2735</td><td>2017-09-18 19:45:08</td></tr>
<tr><td>7</td><td><a href="https://wikileaks.org/ciav7p1/">CIA malware and hacking tools</a></td><td>2699</td><td>2017-03-07 13:10:56</td></tr>
<tr><td>8</td><td><a href="https://news.ycombinator.com/item?id=13755673">Ask HN: Is S3 down?</a></td><td>2589</td><td>2017-02-28 17:45:58</td></tr>
<tr><td>9</td><td><a href="https://code.facebook.com/posts/300798627056246">Relicensing React, Jest, Flow, and Immutable.js</a></td><td>2280</td><td>2017-09-22 21:51:56</td></tr>
<tr><td>10</td><td><a href="http://www.nature.com/news/these-seven-alien-worlds-could-help-explain-how-planets-form-1.21512?WT.mc_id=TWT_NatureNews">Seven earth-sized planets discovered circling a star 39 light years from Earth</a></td><td>2256</td><td>2017-02-22 18:02:28</td></tr>
<tr><td>11</td><td><a href="https://hacks.mozilla.org/2017/11/entering-the-quantum-era-how-firefox-got-fast-again-and-where-its-going-to-get-faster/">How Firefox Got Fast Again</a></td><td>2180</td><td>2017-11-13 14:18:26</td></tr>
<tr><td>12</td><td><a href="https://medium.com/@amyvertino/my-name-is-not-amy-i-am-an-uber-survivor-c6d6541e632f">I am an Uber survivor</a></td><td>2168</td><td>2017-02-27 20:02:00</td></tr>
<tr><td>13</td><td><a href="https://www.nytimes.com/2017/06/21/technology/uber-ceo-travis-kalanick.html?_r=0">Uber Founder Travis Kalanick Resigns as C.E.O.</a></td><td>2119</td><td>2017-06-21 05:24:13</td></tr>
<tr><td>14</td><td><a href="https://learningmusic.ableton.com/">Get started making music</a></td><td>2106</td><td>2017-05-09 13:06:39</td></tr>
<tr><td>15</td><td><a href="https://drewdevault.com/2017/12/16/Firefox-is-on-a-slippery-slope.html">Firefox is on a slippery slope</a></td><td>2021</td><td>2017-12-16 16:16:40</td></tr>
<tr><td>16</td><td><a href="https://www.malwaretech.com/2017/05/how-to-accidentally-stop-a-global-cyber-attacks.html">Accidentally Stopping a Global Cyber Attack</a></td><td>1981</td><td>2017-05-13 12:13:44</td></tr>
<tr><td>17</td><td><a href="https://www.justinobeirne.com/google-maps-moat">Google Maps' Moat</a></td><td>1933</td><td>2017-12-19 23:51:17</td></tr>
<tr><td>18</td><td><a href="https://news.ycombinator.com/item?id=14911467">Launch HN: 70MillionJobs (YC S17) – Job board for people with criminal records</a></td><td>1879</td><td>2017-08-02 15:46:39</td></tr>
<tr><td>19</td><td><a href="https://techcrunch.com/2017/01/09/atlassian-acquires-trello/">Atlassian acquires Trello for $425M</a></td><td>1857</td><td>2017-01-09 14:01:49</td></tr>
<tr><td>20</td><td><a href="https://qz.com/937038/github-now-lets-its-workers-keep-the-ip-when-they-use-company-resources-for-personal-projects/?s=1">GitHub lets staff own IP developed for personal projects using company resources</a></td><td>1841</td><td>2017-03-21 12:05:44</td></tr>
<tr><td>21</td><td><a href="http://www.spacex.com/news/2017/02/27/spacex-send-privately-crewed-dragon-spacecraft-beyond-moon-next-year">SpaceX to Send Privately Crewed Dragon Spacecraft Beyond the Moon Next Year</a></td><td>1747</td><td>2017-02-27 21:27:32</td></tr>
<tr><td>22</td><td><a href="https://news.mit.edu/2017/tim-berners-lee-wins-turing-award-0404">Tim Berners-Lee wins Turing Award</a></td><td>1735</td><td>2017-04-04 11:29:30</td></tr>
<tr><td>23</td><td><a href="https://www.bloomberg.com/news/articles/2017-11-21/uber-concealed-cyberattack-that-exposed-57-million-people-s-data">Uber Paid Hackers to Delete Stolen Data on 57M People</a></td><td>1720</td><td>2017-11-21 22:02:05</td></tr>
<tr><td>24</td><td><a href="https://www.bloomberg.com/news/articles/2017-08-08/google-fires-employee-behind-controversial-diversity-memo">Google Fires Employee Behind Controversial Diversity Memo</a></td><td>1697</td><td>2017-08-08 01:31:15</td></tr>
<tr><td>25</td><td><a href="https://www.mozilla.org/en-US/firefox/57.0/releasenotes/">Firefox 57.0 Released</a></td><td>1692</td><td>2017-11-14 13:52:34</td></tr>
<tr><td>26</td><td><a href="https://www.bloomberg.com/news/articles/2017-06-16/amazon-to-buy-whole-foods?cmpid=socialflow-twitter-business&utm_content=business&utm_campaign=socialflow-organic&utm_source=twitter&utm_medium=social">Amazon to Acquire Whole Foods for $13.7B</a></td><td>1687</td><td>2017-06-16 13:03:09</td></tr>
<tr><td>27</td><td><a href="https://techcrunch.com/2017/09/29/its-time-to-give-firefox-another-chance/">It’s time to give Firefox another chance</a></td><td>1674</td><td>2017-09-29 19:27:58</td></tr>
<tr><td>28</td><td><a href="https://www.blog.google/topics/public-policy/net-neutrality-day-action-help-preserve-open-internet/">Net Neutrality Day of Action: Help Preserve the Open Internet</a></td><td>1664</td><td>2017-07-12 17:51:25</td></tr>
<tr><td>29</td><td><a href="https://www.sublimetext.com/blog/articles/sublime-text-3-point-0">Sublime Text 3.0</a></td><td>1653</td><td>2017-09-13 13:13:32</td></tr>
<tr><td>30</td><td><a href="https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/preview?imm_mid=0f9b7e&cmp=em-data-na-na-newsltr_20171213&slide=id.g183f28bdc3_0_90">Machine Learning 101 slidedeck: 2 years of headbanging, so you don't have to</a></td><td>1651</td><td>2017-12-14 00:54:14</td></tr>
</table>

<!--more-->

### Commonly Shared/Upvoted Domains

As Deddy did, let's see the commonly shared and upvoted domains.

```
%%bq query
SELECT
  domains_2017.domain,
  COUNT(1) AS count,
  SUM(score) AS score
FROM (
  SELECT
    REGEXP_EXTRACT(url,r'^https?://(?:www.)?([^/]*)/?(?:.*)') AS domain,
    score
  FROM
    `bigquery-public-data.hacker_news.full`
  WHERE extract(year FROM timestamp) = 2017) domains_2017
GROUP BY
  domains_2017.domain
ORDER BY
  count DESC
LIMIT
  30
```

The result is not that different from what he got, while there were some new comers like [Hacker Noon](http://hackernoon.com/), [Quartz](https://qz.com/) and [arXiv.org](https://arxiv.org/).

Also note that the top of the actual result was "no domain", that means "Show HN", "Ask HN", ... those which don't have external links.

<table>
<tr><th></th><th>Domain</th><th>Count</th><th>Score</th></tr>
<tr><td>1</td><td>medium.com</td><td>17631</td><td>138515</td></tr>
<tr><td>2</td><td>github.com</td><td>15074</td><td>223278</td></tr>
<tr><td>3</td><td>youtube.com</td><td>9076</td><td>39402</td></tr>
<tr><td>4</td><td>nytimes.com</td><td>6004</td><td>144996</td></tr>
<tr><td>5</td><td>techcrunch.com</td><td>4867</td><td>93204</td></tr>
<tr><td>6</td><td>bloomberg.com</td><td>3970</td><td>105908</td></tr>
<tr><td>7</td><td>arstechnica.com</td><td>3039</td><td>55587</td></tr>
<tr><td>8</td><td>theguardian.com</td><td>2993</td><td>51159</td></tr>
<tr><td>9</td><td>theverge.com</td><td>2552</td><td>32952</td></tr>
<tr><td>10</td><td>youtu.be</td><td>2464</td><td>2527</td></tr>
<tr><td>11</td><td>hackernoon.com</td><td>2323</td><td>15092</td></tr>
<tr><td>12</td><td>goo.gl</td><td>2264</td><td>2267</td></tr>
<tr><td>13</td><td>bbc.com</td><td>2116</td><td>43956</td></tr>
<tr><td>14</td><td>wired.com</td><td>2002</td><td>22822</td></tr>
<tr><td>15</td><td>en.wikipedia.org</td><td>1923</td><td>14552</td></tr>
<tr><td>16</td><td>twitter.com</td><td>1861</td><td>32666</td></tr>
<tr><td>17</td><td>wsj.com</td><td>1858</td><td>26364</td></tr>
<tr><td>18</td><td>washingtonpost.com</td><td>1725</td><td>47134</td></tr>
<tr><td>19</td><td>theatlantic.com</td><td>1477</td><td>26339</td></tr>
<tr><td>20</td><td>qz.com</td><td>1376</td><td>23305</td></tr>
<tr><td>21</td><td>arxiv.org</td><td>1299</td><td>22885</td></tr>
<tr><td>22</td><td>reuters.com</td><td>1251</td><td>29259</td></tr>
<tr><td>23</td><td>bbc.co.uk</td><td>1247</td><td>25250</td></tr>
<tr><td>24</td><td>linkedin.com</td><td>1215</td><td>4939</td></tr>
<tr><td>25</td><td>businessinsider.com</td><td>1206</td><td>12800</td></tr>
<tr><td>26</td><td>reddit.com</td><td>1184</td><td>15607</td></tr>
<tr><td>27</td><td>economist.com</td><td>1032</td><td>19168</td></tr>
<tr><td>28</td><td>forbes.com</td><td>1031</td><td>9085</td></tr>
<tr><td>29</td><td>cnbc.com</td><td>1006</td><td>10749</td></tr>
</table>

I might be a visual thinker, or simply bad at understanding numbers. Let's have a scatter plot to see the relationship between the two variables.

<div class="fig"><img src="/image/2018/domain1.png"/></div>

While GitHub was still the king of Hacker News in term of the number of upvotes, Medium was the most shared domain in 2017.

The unreadable chuck on the above graph had below. There were a lot of commercial news sites from tech-focused ones (e.g. Verge, Wired) to newspapers (e.g. Wall Street Journal, Washington Post). Also you can see URL shorteners in the frequenty shared but rarely upvoted area.

<div class="fig"><img src="/image/2018/domain2.png"/></div>

The area also had
 [Tech in Asia](https://news.ycombinator.com/from?site=techinasia.com), [iAfrikan](https://news.ycombinator.com/from?site=iafrikan.com) and [Security Affairs](https://news.ycombinator.com/from?site=securityaffairs.co), which were constantly shared by few users. The opposite side of the domains are corporate blogs (blog.google, blog.,sdn.microsoft.com) which were not shared frequently, but earned relatively a lot of upvotes.

<div class="fig"><img src="/image/2018/domain3.png"/></div>

### Commonly Used/Upvoted Words

Let's see words in the titles.

```
%%bq query
SELECT word, SUM(score) AS score, SUM(1) AS count FROM
  (SELECT word, score FROM
    (SELECT SPLIT(LOWER(title), ' ') AS words, score FROM
      `bigquery-public-data.hacker_news.full` WHERE EXTRACT(year FROM timestamp) = 2017) AS word_list_and_score
   CROSS JOIN UNNEST(word_list_and_score.words) AS word) AS words_2017
GROUP BY word
ORDER BY score DESC LIMIT 100
```

The result has a lot of stopwords such as "the", "to", "a", ... Instead of manually filtering all of them, I used `nltk` to filter the words.

```
import google.datalab.bigquery as bq
import pandas as pd
import nltk

nltk.download('stopwords')
stopwords_set = set(nltk.corpus.stopwords.words('english'))

popular_words = bq.Query('''
SELECT word, SUM(score) AS score, SUM(1) AS count FROM
  (SELECT word, score FROM
    (SELECT SPLIT(LOWER(title), ' ') AS words, score FROM
      `bigquery-public-data.hacker_news.full` WHERE EXTRACT(year FROM timestamp) = 2017) AS word_list_and_score
   CROSS JOIN UNNEST(word_list_and_score.words) AS word) AS words_2017
GROUP BY word
ORDER BY score DESC LIMIT 100
''')
df = popular_words.execute(output_options=bq.QueryOutput.dataframe()).result()
df['is_stopword'] = df['word'].apply(lambda x: x in stopwords_set)
```

Here is the result. As I previously mentioned, "Show HN", "Ask HN" were very big in Hacker News. "hn:", "ask" "show" would be coming from these posts. Having "new" is legitimate since this is Hacker *News*.

Compared to Deddy's analysis, the lack of "startup" is sad to mention. [Is the golden age of the startup already over?](https://techcrunch.com/2017/10/22/ask-not-for-whom-the-deadpool-tolls/).

<table>
<tr><td></td><th>Word</th><th>Score</th><th>Count</th></tr>
<tr><td>1</td><td>hn:</td><td>372149</td><td>25460</td></tr>
<tr><td>2</td><td>–</td><td>331221</td><td>31388</td></tr>
<tr><td>3</td><td>ask</td><td>197909</td><td>14216</td></tr>
<tr><td>4</td><td>show</td><td>182118</td><td>12264</td></tr>
<tr><td>5</td><td>new</td><td>140168</td><td>12149</td></tr>
<tr><td>6</td><td>google</td><td>122544</td><td>6786</td></tr>
<tr><td>7</td><td>data</td><td>87319</td><td>7522</td></tr>
<tr><td>8</td><td>learning</td><td>76060</td><td>4803</td></tr>
<tr><td>9</td><td>web</td><td>72250</td><td>4758</td></tr>
<tr><td>10</td><td>using</td><td>72102</td><td>6149</td></tr>
<tr><td>11</td><td>[pdf]</td><td>68817</td><td>3939</td></tr>
<tr><td>12</td><td>code</td><td>63777</td><td>4174</td></tr>
<tr><td>13</td><td>open</td><td>63403</td><td>3674</td></tr>
<tr><td>14</td><td>programming</td><td>57602</td><td>2704</td></tr>
<tr><td>15</td><td>uber</td><td>54909</td><td>2295</td></tr>
<tr><td>16</td><td>first</td><td>53480</td><td>4279</td></tr>
<tr><td>17</td><td>software</td><td>50981</td><td>4106</td></tr>
<tr><td>18</td><td>facebook</td><td>50661</td><td>3054</td></tr>
<tr><td>19</td><td>python</td><td>50385</td><td>2686</td></tr>
<tr><td>20</td><td>(2016)</td><td>50080</td><td>1093</td></tr>
<tr><td>21</td><td>us</td><td>49712</td><td>3254</td></tr>
<tr><td>22</td><td>go</td><td>48328</td><td>2570</td></tr>
<tr><td>23</td><td>linux</td><td>45372</td><td>2096</td></tr>
<tr><td>24</td><td>app</td><td>45326</td><td>6031</td></tr>
<tr><td>25</td><td>make</td><td>45233</td><td>3978</td></tr>
<tr><td>26</td><td>apple</td><td>45196</td><td>2981</td></tr>
<tr><td>27</td><td>use</td><td>45134</td><td>3698</td></tr>
<tr><td>28</td><td>years</td><td>45037</td><td>1906</td></tr>
<tr><td>29</td><td>people</td><td>44934</td><td>2432</td></tr>
<tr><td>30</td><td>machine</td><td>44700</td><td>2892</td></tr>
</table>

Let's make a scatter plot again. Here is the big picture.

<div class="fig"><img src="/image/2018/word1.png"/></div>

In below, the contrast between "learning" vs. "ai" is interesting. There were a lot of stories about "ai", but they didn't get much upvotes compared to "learning", which would be a part of "machine learning" or "deep learning".

<div class="fig"><img src="/image/2018/word2.png"/></div>

You can find four programming languages here; JavaScript, Go and Python. There were a lot of JavaScript stories, but they didn't get much upvotes, compared to Go and Python. [JavaScript Fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4)? Go would have Amazon Go and Go as a borad game though.

<div class="fig"><img src="/image/2018/word3.png"/></div>

### What's next?

There are a lot of questions I can ask;

* I was sometimes comparing Deddy's 9 years analysis vs. 2017, but it would be interesting to see Year-over-Year to see some trends, like, when did we lose "startup"?
* I solely checked stories, but how about comments?
* It was a bit annoying to use ggplot()[^1] multiple times with different parameters to explore the results. Can I use something different to explore the results interactively?
* Would it be able to build a web app to explore the results?

I probably will not do all of them, but would try a few. Stay tuned!

[^1]: By the way, I was using plotnine to have ggplot in Python.