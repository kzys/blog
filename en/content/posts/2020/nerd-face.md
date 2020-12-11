---
title: "Nerd Face emoji"
date: 2020-12-10T20:28:30-08:00
tags: ["100DaysToOffload"]
---
[@hak, @jmuk and I have chatted](https://twitter.com/jmuk/status/1337067278450323456) about ["Nerd Face" emoji](https://emojipedia.org/nerd-face/) on Twitter.

> Styled after a stereotypical nerd, with buck teeth a racist caricature historically mocking East Asians. Some feature white-taped glasses, another nerd trope. Smile and glasses vary across platforms.

Emoji was originally designed by Japanese mobile phone careers, and later added to Unicode Standard to handle them in Unicode-centric systems. That's why Emoji has [the Tokyo tower](https://emojipedia.org/tokyo-tower/), but not the Eiffel tower. [Moai](https://emojipedia.org/moai/) is actually "Moyai", a small replica of the Moai statues in Tokyo. [The gender bias in early Emoji](https://blog.google/products/android/promoting-gender-equality-through-emoji/) was certainly coming from Japanese culture as well.

However, the nerd face is a bit different. Japanese people would agree that buck teeth is ugly, but wouldn't see that as nerdy.

So, how do we get the emoji?

### Unicode Technical Report #51

Unicode Technical Report (UTR) #51 is about Unicode Emoji. The report mentions [the four major sources](http://www.unicode.org/reports/tr51/tr51-3-archive.html#Major_Sources).

* Zapf Dingbats (z)
* ARIB (a)
* Japanese carriers (j)
* Wingdings & Webdings (w)

And [emoji-data.txt](https://www.unicode.org/Public/emoji/1.0/emoji-data.txt) explains the sources of all Unicode emojis.

```
...
1F6F0 ;	text ;	L2 ;	none ;	w	# V7.0 (🛰) SATELLITE
1F6F3 ;	text ;	L2 ;	none ;	w	# V7.0 (🛳) PASSENGER SHIP
1F910 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤐) ZIPPER-MOUTH FACE
1F911 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤑) MONEY-MOUTH FACE
1F912 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤒) FACE WITH THERMOMETER
1F913 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤓) NERD FACE
1F914 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤔) THINKING FACE
1F915 ;	emoji ;	L2 ;	secondary ;	x	# V8.0 (🤕) FACE WITH HEAD-BANDAGE
...
```

However Nerd Face emoji is "x", which means "Other".

### L2/14-174R: Emoji Additions

Then there is [another proposal](https://www.unicode.org/L2/L2014/14174r-emoji-additions.pdf) from the authors of the technical report.

> This document proposes a set of additional emoji characters for rapid incorporation into Unicode, with background, motivation and selection criteria described in L2/14-172.

This document proposes "NERD FACE" and references AIM and Gmail.

### Instant Messengers

The text version of Nerd Face emoji: `8-B` is in [Nerd Text Emoticons](https://pc.net/emoticons/smiley/nerd). At least this one source says that the emoticon is "Common". This site also includes all emoticons in AIM, Yahoo! Instant Messenger, Microsoft Live Messenger, ICQ and Gmail.

Within them, Yahoo! Instant Messenger has `:-B` as "nerd", Microsoft Live Messenger has `8-|` as "nerd".

[Skype also has `8-|` and some other variants as "nerd"](https://support.skype.com/en/faq/FA12330/what-is-the-full-list-of-emoticons), but none of them have `B` as the buck teeth. I'm unsure whether that is coming from Microsoft acquisition or not.
