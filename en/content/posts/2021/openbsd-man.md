---
title: "OpenBSD's manpages are great"
date: 2021-01-27T21:59:53-08:00
tags: ["100DaysToOffload", "BSD"]
---
While I haven't used OpenBSD, I frequently refer OpenBSD's manpages regarding security pitfalls around ANSI C and POSIX. They have "Caveats" section that explain the pitfalls.

For example, [sprintf(3)](https://man.openbsd.org/sprintf.3):

> Because sprintf() and vsprintf() assume an infinitely long string, callers must be careful not to overflow the actual space; this is often impossible to assure. For safety, programmers should use the snprintf() and asprintf() family of interfaces instead. Unfortunately, the asprintf() interface is not available on all systems as it is not part of ISO/IEC 9899:1999 (“ISO C99”).

Or [system(3)](https://man.openbsd.org/system.3):

> Never supply the system() function with a command containing any part of an unsanitized user-supplied string. Shell meta-characters present will be honored by the sh(1) command interpreter.
>
> It is often simpler to bypass the shell and run an external command using fork(2), execlp(3), and waitpid(2) directly instead of having to sanitize a string for shell consumption.

### Caveats

Both ANSI C and POSIX have some crazy functions which shouldn't be existed. OpenBSD simply doesn't have them. For example, OpenBSD has neither [gets(3)](https://pubs.opengroup.org/onlinepubs/9699919799/functions/gets.html) nor [wordexp(3)](https://pubs.opengroup.org/onlinepubs/9699919799/functions/wordexp.html).

There was a patch which implements wordexp(3) in OpenBSD's libc.
[Theo de Raadt has rejected the patch of course](https://www.mail-archive.com/tech@openbsd.org/msg02325.html).

> I think we should stand up to crap and not ever impliment it.
