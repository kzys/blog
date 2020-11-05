---
title: "That Lightweight Web"
date: 2020-08-17T09:25:42-07:00
tags: ["100DaysToOffload", "Web"]
---

The web is getting bigger and bigger. The technical complexity makes making a new web browser virtually impossible, which makes Google's dominance stronger. People claim the web is bloated, then looking for a trimmed-down, lightweight web.

That reminds me one of the classics by Joel Spolsky: [Strategy Letter IV: Bloatware and the 80/20 Myth](https://www.joelonsoftware.com/2001/03/23/strategy-letter-iv-bloatware-and-the-8020-myth/) (2001).

> A lot of software developers are seduced by the old “80/20” rule. It seems to make a lot of sense: 80% of the people use 20% of the features. So you convince yourself that you only need to implement 20% of the features, and you can still sell 80% as many copies. 

> Unfortunately, it’s never the same 20%. Everybody uses a different set of features.

In addition to that, even for "my 20% web", I'm really not so sure where the line is.

I agree that JavaScript is going too far, but I still remember the beginning of Ajax. At that time, Adobe was pushing Flash and Rich Internet Applications. Seeing Google Maps and Gmail convinced a lot of people Flash would not be needed.

CSS is complex and `--` on CSS variables shows it's age, yet new CSS features such as Flexbox is much easier to use than combining `float:right` with a parent div with `clear:both`.

HTML 5 parsing algorithm is a strange effort to cover all of the corner cases correctly. But we had tried draconian error handling already, which didn't work. Remember XHTML?

While it is possible to cut a few new features such as WebUSB and/or HTTP/3, it is difficult to reduce the complexity of the web. Making a consensus regarding those removals would be even more difficult.
