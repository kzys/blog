---
title: "Back to Web Basics"
date: 2019-07-27T00:56:33-07:00
---
I have migrated both 8-p.info and blog.8-p.info from Nuxt.js to Hugo.

Recently Mozilla's podcast, [IRL](https://irlpodcast.org) has started a new season. The latest episode was about [The Internet’s Carbon Footprint](https://irlpodcast.org/season5/episode3/), that introduced [LOW←TECH MAGAZINE](https://solar.lowtechmagazine.com) which is beautiful. Inspired by that and [some](https://hail2u.net) [other](https://patrickcollison.com) [mostly](https://devonzuegel.com) [static](https://shikakun.com) websites, I'm migrating off of Nuxt.js.

Nuxt.js is not bad, but using that for one-man websites is overkill. I see the new wave of web development, React, Vue or generally speaking "components" as a way to deal with scaling issues. If you have a lot of features and a lot of developers, you may need to deal with the scaling issues, but I have neither of them.

### Good

- Less dependencies. No node_modules.
- Faster to build.
- Hugo offers a development server with live-reload, a bit of template functionalities to separate common HTML snippets such as a header, and Markdown support.

### Bad

- blog.8-p.info doesn't list old articles without JavaScript. It has to be pre-rendered without JavaScript, which I haven't implemented. I agree that isomorphic rendering as a concept makes sense.
- Go's template is awkward

Overall I like Hugo better, even for non-blog websites. I also want to go further -- how about getting rid of Google Analytics and custom fonts?
