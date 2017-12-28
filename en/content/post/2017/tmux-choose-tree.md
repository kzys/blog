---
title: "Can't use C-n/C-p on tmux 2.6's choose-tree"
date: 2017-12-27T18:41:39-08:00
---

tmux 2.6 introduced `choose-tree` which is the new way of choosing windows/sessions. However, you can't use Emacs-like Ctrl-n/Ctrl-p on `choose-tree`.

[The issue has been reported](https://github.com/tmux/tmux/issues/1080), and [addressed](https://github.com/tmux/tmux/commit/99351c9cae3c01c68c57aebf127551ec6afe7db2) already. The only problem here is that the latest version is 2.6 which doesn't have the fix.

My workaround on macOS is installing the latest, non-released version from Homebrew.

```
% brew install tmux --HEAD
==> Cloning https://github.com/tmux/tmux.git
Cloning into '/Users/kazuyoshi/Library/Caches/Homebrew/tmux--git'...
remote: Counting objects: 227, done.
remote: Compressing objects: 100% (218/218), done.
remote: Total 227 (delta 53), reused 37 (delta 9), pack-reused 0
Receiving objects: 100% (227/227), 710.69 KiB | 3.47 MiB/s, done.
Resolving deltas: 100% (53/53), done.
==> Checking out branch master
==> sh autogen.sh
==> ./configure --disable-Dependency-tracking --prefix=/usr/local/Cellar/tmux/HE
==> make install
==> Downloading https://raw.githubusercontent.com/imomaliev/tmux-bash-completion
######################################################################## 100.0%
==> Caveats
Example configuration has been installed to:
  /usr/local/opt/tmux/share/tmux

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/tmux/HEAD-cd46568: 10 files, 695KB, built in 32 seconds
%
```
