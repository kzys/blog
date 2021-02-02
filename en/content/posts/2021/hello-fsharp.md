---
title: "Hello F#"
date: 2021-02-01T20:09:07-08:00
tags: ["100DaysToOffload"]
---

[karino2](https://karino2.github.io/) has been writing a lot about F# nowadays. So, I gave it a try.

```
% dotnet new console -lang 'F#' -o hello-fsharp
The template "Console Application" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on hello-fsharp/hello-fsharp.fsproj...
  Determining projects to restore...
  Restored /Users/kazuyoshi/hello-fsharp/hello-fsharp.fsproj (in 112 ms).
Restore succeeded.

%
```

Then `dotnet build` builds the project. It looks simple.

```
% dotnet build
Microsoft (R) Build Engine version 16.8.3+39993bd9d for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining projects to restore...
  All projects are up-to-date for restore.
  hello-fsharp -> /Users/kazuyoshi/hello-fsharp/bin/Debug/net5.0/hello-fsharp.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:03.98
%
```

Wait? `hello-fsharp.dll`? Didn't it say "Console Application" in the beginning?

```
% file bin/Debug/net5.0/hello-fsharp.dll
bin/Debug/net5.0/hello-fsharp.dll: PE32 executable (console) Intel 80386 Mono/.Net assembly, for MS Windows
%
```

Hey! This is macOS... What can I do with the PE32 executable? Apparently I have to tell `dotnet` that the runtime is `osx.10.11-x64`.

```
% dotnet publish --runtime osx.10.11-x64
Microsoft (R) Build Engine version 16.8.3+39993bd9d for .NET
Copyright (C) Microsoft Corporation. All rights reserved.

  Determining projects to restore...
  Restored /Users/kazuyoshi/hello-fsharp/hello-fsharp.fsproj (in 167 ms).
  hello-fsharp -> /Users/kazuyoshi/hello-fsharp/bin/Debug/net5.0/osx.10.11-x64/hello-fsharp.dll
  hello-fsharp -> /Users/kazuyoshi/hello-fsharp/bin/Debug/net5.0/osx.10.11-x64/publish/
% ./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp
Hello world from F#
% file ./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp
./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp: Mach-O 64-bit executable x86_64
% otool -L ./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp
./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp:
        /usr/lib/libc++.1.dylib (compatibility version 1.0.0, current version 800.7.0)
        /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1281.0.0)
% ./bin/Debug/net5.0/osx.10.11-x64/hello-fsharp
Hello world from F#
%
```

Finally!

### Why F#?

After writing Go for a few years, I still like functional programming languages. Rust is nice, but doesn't have GC. There are applications where having GC is fine.

So, a functional programming language that can create a self-contained binary and has GC could be something I want. F# meets these criteria.
