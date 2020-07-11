---
title: "Emacs"
date: 2020-07-10T22:37:43-07:00
tags: ["100DaysToOffload"]
---
I've been using Emacs for more than a decade. In the very beginning, I was using Meadow, which was Emacs 20's fork, for Windows, which supports Japanese and other languages better than the original at that time. I might have used Mule for Win32 for a moment, but I cannot recall.

For me, Emacs, or the fork was the gateway drug for Linux. When I first used Linux, certain things didn't work compared to Windows, but certain things did work well, and those things were often Emacs stuff.

Fast-forward a few years, I bought iBook and admired the fact C-n, C-f, C-b, and C-p work universally. First-forward another few years, my project at work was in Android, and I started using Android Studio. Another Java project, IntelliJ IDEA. Slowly and lately I was adopting JetBrain's IDEs. I also used Visual Studio Code. [Awesome Emacs Keymap](https://github.com/tuttieee/vscode-emacs-mcx) is great.

But now, I realized that my fingers don't recall Emacs's original keybindings sometimes. C-g during `isearch-forward` moved my cursor to a surprising position. Seems I'm used to its half-emulated behavior on some other non-Emacs IDEs/editors. The original Emacs is now "surprising" for me.

That makes me sad.

So, I'm adding `alias e='emacsclient --no-wait'` on my ~/.zshrc. I tend to use `code ...` to start Visual Studio Code. I could replace this use-case with Emacs. Creating a full-fledged IDE from Emacs would be impossible, but Language Server Protocol could make IDE features more editor-agnostic. Emacs Lisp has lexical binding since 24.1.

Ditching Emacs is like dressing like the 20s. I'm old. I can be just old-school regarding Emacs.
