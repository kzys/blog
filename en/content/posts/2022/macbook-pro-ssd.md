---
title: "Upgrading 2017 MacBook Pro's SSD"
date: 2022-01-07T23:36:36-08:00
---
My 2017 MacBook Pro couldn't keep up with the world, in terms of its storage space. Namely both Xcode and macOS installer are getting bigger and bigger. So my first computer errands in 2022 is installing a third-party SSD in the MacBook Pro.

### Feather M17 SSD

I bought Fledging's [Feather M17 SSD](https://fledging.tech/collections/feather-ssd/products/feather-m17) (1TB) from Amazon.

Installing the SSD was cumbersome. [Fledging's video](https://www.youtube.com/watch?v=b_r-BJWZTX4) and [iFixit's guide](https://www.ifixit.com/Guide/MacBook+Pro+13-Inch+Function+Keys+2017+Lower+Case+Replacement/133426) were quite helpful.

### Time Capsule and Migration Assistant

The kit includes drivers and a bootable USB drive. The drive and the SSD themselves have macOS already. However the version was slightly outdated and they couldn't read my Time Capsule backup, made by Big Sur. So I had to first [create a bootable Monterey installer](https://support.apple.com/en-us/HT201372). After formatting the SSD as APFS, I installed Monterey there and used Migration Assistant to restore data from the backup.

### All soldered MacBooks

By the way, this particular 2017 non-Touch Bar MacBook Pro is the last non-soldered SSD model. After that, all MacBooks have soldered SSDs. While Apple is correcting Touch Bar and some other questionable hardware decisions, they haven't made Macs upgradable. Probably never.

So, I may not buy these all-soldered Macs anymore, at least as my daily driver. My first Mac was iBook G4, which I could swap the battery by just having a coin. No screws. Now the battery is [glued](https://www.youtube.com/watch?v=mb2vv97KzD0). We went way too far.
