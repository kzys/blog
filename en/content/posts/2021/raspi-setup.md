---
title: "Setting up my Raspberry Pi 3 again"
date: 2021-05-24T18:05:45-07:00
---
Why do I setup Raspberry Pi 3 in 2021? Because I have the Pi 3 sitting around for years. [The CD player I made last year](https://blog.8-p.info/en/2020/08/05/raspi-cd-player/) didn't go to "production".

### Preparing a SD card

[Raspberry Pi Imager](https://www.raspberrypi.org/software/) downloads OS images in addition to writing that to a SD card.

### Setting up a screen

I have [Quimat's 3.5" TFT screen](https://www.amazon.com/gp/product/B06W55HBTX/), that I bought in 2019. [LCD-show](https://github.com/goodtft/LCD-show) repository has shell scripts that configure Raspberry Pi to use the screen. `rotate.sh` script in the repository rotates the screen's orientation from software.

### Showing Chromium without chrome

[Raspberry Pi Touchscreen Kiosk Setup (10 Steps)](https://desertbot.io/blog/raspberry-pi-touchscreen-kiosk-setup) is pretty much what I did.

Since I have installed Raspberry Pi's default GUI already. I did `sudo update-alternatives --config x-session-manager` to use Openbox.

### Giving Static IP

[TCP/IP networking](https://www.raspberrypi.org/documentation/configuration/tcpip/)

Adding the below to `/etc/dhcpcd.conf`.

```
interface wlan0
static ip_address=192.168.1.3/24
static routers=192.168.1.1
static domain_name_servers=1.1.1.1
```

### SSH

[How To Configure SSH Key-Based Authentication on a Linux Server](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)

```
% ssh-copy-id pi@192.168.1.3
```

Then comment out the following on `/etc/ssh/sshd_config`.

```
PasswordAuthentication no
```
