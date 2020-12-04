---
title: "A gzip file knows more than what I thought"
date: 2020-12-03T20:47:28-08:00
tags: ["100DaysToOffload", "Unix", "Go"]
---
Due to random debugging at work, I have read [RFC 1952](https://tools.ietf.org/html/rfc1952), aka GZIP file format specification version 4.3.

I thought GZIP was just a compression-only file format. It would be some magic bytes + a compressed byte stream. But it is not.

First, it could have the original file name, and macOS's gzip (Apple gzip 287.100.2) by default includes that.

```
% touch hello
% gzip hello
% hexdump -C hello.gz
00000000  1f 8b 08 08 36 bc c9 5f  00 03 68 65 6c 6c 6f 00  |....6.._..hello.|
00000010  03 00 00 00 00 00 00 00  00 00                    |..........|
0000001a
%
```
Second, it has one byte for OS. Note that the gzip file above claims "Unix", even my OS is macOS.

```
         OS (Operating System)
            This identifies the type of file system on which compression
            took place.  This may be useful in determining end-of-line
            convention for text files.  The currently defined values are
            as follows:
                 0 - FAT filesystem (MS-DOS, OS/2, NT/Win32)
                 1 - Amiga
                 2 - VMS (or OpenVMS)
                 3 - Unix
                 4 - VM/CMS
                 5 - Atari TOS
                 6 - HPFS filesystem (OS/2, NT)
                 7 - Macintosh
                 8 - Z-System
                 9 - CP/M
                10 - TOPS-20
                11 - NTFS filesystem (NT)
                12 - QDOS
                13 - Acorn RISCOS
               255 - unknown
```

Not all GZIP implementations honor the OS byte. For example, [Go's compress/gzip always use 255](https://github.com/golang/go/blob/cc386bd05ad8076f1d7e5a4d9a13c1276fd26ac6/src/compress/gzip/gzip.go#L76).
