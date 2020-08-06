---
title: "Making a Raspberry Pi-based CD player"
date: 2020-08-05T19:47:25-07:00
tags: ["100DaysToOffload"]
---
Nowadays I listen music on YouTube, Amazon Music and other streaming services. I haven't moved my iTunes library from my old laptop for years. I still have a bunch of CDs, but don't have a playing equipment anymore.

Except for a USB CD/DVD drive.

So I decided to combine the CD/DVD drive and a Raspberry Pi 3 to make a CD player.

### Power

First Raspberry Pi 3's USB power is not enough for spinning a CD. My drive has a DC power input in addition to the USB port. Plugging the drive to an external AC/DC adapter is pre-requisite.

### CD drives cannot play CDs anymore

Then I tried `cdplay` but it didn't work.

```
$ cdplay
cdplay: ioctl cdromplaymsf: Operation not supported
$ sudo cdplay
cdplay: ioctl cdromplaymsf: Operation not supported
$
```

`cdcd` looked fine, but it didn't play any music.

```
$ cdcd play; echo $?
0
$
```

It turned that CD drives nowadays cannot play CDs anymore. [This Stack Overflow answer](https://unix.stackexchange.com/a/524284) told me what "cdromplaymsf" means and the alternative such as `mplayer`.

### Buffering

But MPlayer frequently choked with `Write error: Broken pipe`.

```
$ mplayer cdda:// 
...
AO: [pulse] Init failed: Connection refused
Failed to initialize audio driver 'pulse'
AO: [alsa] 44100Hz 2ch s16le (2 bytes per sample)
Video: no video
Starting playback...
A:  15.5 (15.4) of 2530.4 (42:10.4)  0.1% 
[AO_ALSA] Write error: Broken pipe
[AO_ALSA] Trying to reset soundcard.
A:  17.8 (17.8) of 2530.4 (42:10.4)  4.4% 
...
```

Apparently the issue is coming from the fact that the CD drive is not that fast. Adding `-cache` like `mplayer -cache 1024 cdda://` made the situation better.

### Next?

I have a few ideas;

- Getting rid of the drive completely and play MP3 or FLAC instead.
- Building a graphical user interface.
- Making my own streaming service. My work meetings are happening on my work laptop. I don't want to plug/unplug my headphone for listening music.
