---
title: "Pull Request of the Day: bpftrace"
date: 2020-09-25T21:18:24-07:00
tags: ["100DaysToOffload", "C++"]
---

[Support old C++ compilers that don't have <filesystem>](https://github.com/iovisor/bpftrace/pull/1534)

bpftrace uses `<filesystem>` which is relatively new in the C++ world. Amazon Linux 2 has g++ 7.x, which doesn't have `<filesystem>` but has `<experimental/filesystem>` instead.

I initially used `__cpp_lib_filesystem`, but it is defined inside `<filesystem>`. So checking that to conditionally include `<filesystem>` doesn't work.

Then there is `<version>` which defines `__cpp_lib_filesystem` and all other feature macros. But this header is also relatively new. Loading this header itself may need another `#ifdef`.

I ended up having `__has_include (<filesystem>)`. Apparently it is in [GNU cpp](https://gcc.gnu.org/onlinedocs/cpp/_005f_005fhas_005finclude.html) and [Clang](https://clang.llvm.org/docs/LanguageExtensions.html#has-include), but C++ 17 makes it "standard". Yay!
