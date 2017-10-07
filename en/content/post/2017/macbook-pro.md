---
title: "New Macbook Pro"
date: 2017-10-06T00:37:00-07:00
draft: true
---
I bought MacBook Pro (13-inch, 2017). I had thought that having MacBook *Pro* for personal use was luxury. Then I realized that MacBook Pro's price was the same as MacBook [^1]. So, what's the point of having the slower one?

[^1]: To be honest, I noticed that after ordering MacBook and returned the one.

### Refurbished

To save some money, I bought [a refurbished model](https://www.apple.com/shop/browse/home/specialdeals/mac/macbook). Refurbished models sometimes don't have the latest macOS. My one had Sierra and I had to upgrade that to High Sierra. But I'm happy to do the errands for $200.

### What I Need

I copied my SSH keys and 1Password's vault from my old MacBook Air (11-inch, Mid 2012) to the MacBook Pro through USB. 1Password has [a nice guide page](https://support.1password.com/new-device/) to migrate passwords (a valut) from an old computer to a new computer.

Then dotfiles and this blog are managed by Git, on BitBucket's private repos. So, I just cloned both of them. I also installed [Homebrew](https://brew.sh) to have Emacs, tmux and some others.

I would install other heavy apps such as IntelliJ IDEA later.

### System Preferences

The below are minimal tweaks I need.

* Keyboard
  * Keyboard > Modifier Keys... > Caps Lock as Control
  * Keyboard > Key Repeat > Fast
  * Keyboard > Delay Until Repeat > Short
  * Shortcuts > Input Sources > Check "Select the previous input source" and change the shortcut as Option-Space [^2].

* Sharing
  * Computer Name

* Language & Region
  * Adding Japanese as the secondary language

* Display
  * Night Shift > Schedule > Sunset to Sunrise

[^2]: The original shortcut is Ctrl-Space, which should not be taken, for Emacs.

### Dock

* Dock Preferences... > Automatically hide and show the Dock

Then I removed various apps from Dock.

### Safari

I've been using Chrome but I started trying Safari on this MacBook Pro. I'm worrying a bit about Google's dominance.

* Preferences... > Advanced > Show Develop menu in menu bar

Then I installed [WasteNoTime](http://www.bumblebeesystems.com/wastenotime/) and 1Password.