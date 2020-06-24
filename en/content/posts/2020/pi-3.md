---
title: "Setting up Raspberry Pi 3 as a Linux server"
date: 2020-06-23T23:36:17-07:00
tags: ["100DaysToOffload", "Linux"]
---
I was mindlessly searching about Linux laptops, [Pinebook Pro](https://www.pine64.org/pinebook-pro/) and [Dell's refurbished laptops](https://www.dellrefurbished.com/). After joining AWS, my work is more and more Linux-focused. Several coworkers are even using Linux laptops.

So, I felt that I should have a Linux machine nearby. My closest were public clouds including AWS, but they were not really cheap especially for running Firecracker.

Then I realized that I had an Raspberry Pi 3. I bought that a few years ago to built an baby camera, which I didn't. While Raspberry Pi 4 is required to use Firecracker, Pi 3 is fine for just playing with Linux.

### Raspberry Pi OS and Raspberry Pi Imager

Raspbian is now called "Raspberry Pi OS" and creating the initial SD card is greatly simplified by Raspberry Pi Imager. A little note for "do you really need Electron for that?" folks, the imager is using Qt, not Electron.

I was using Raspberry Pi OS Lite (32-bit) since the Pi will be used as a headless server.

### raspi-config

`raspi-config` command is used to configure locale, time zone and other miscellaneous stuff. 

### IP addresses

On my home network, a Xfinity router is assigning IP addresses through DHCP. So I changed the range as 10.0.0.20 - 10.0.0.253.

Then I added the below lines on `/etc/dhcpcd.conf` on the Pi 3.

```
interface eth0
static ip_address=10.0.0.2/24
static routers=10.0.0.1
static domain_name_servers=1.1.1.1

interface wlan0
static ip_address=10.0.0.3/24
static routers=10.0.0.1
static domain_name_servers=1.1.1.1
```

But I got `DAD detected`. Turned out, my wife's old iPad was holding 10.0.0.3 still. So I had to re-connect the iPad to the Wi-Fi to renew its IP address.
