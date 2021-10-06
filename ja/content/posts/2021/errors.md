---
title: '"Error Handling in Node.js" は Node.js 書かない人にもおすすめ'
date: 2021-10-06T06:26:01-07:00
---
ここ数年、仕事で JavaScript を書く機会がないのだけど、[Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors) はコードレビューでよくリンクしている。

JavaScript 固有のところではなく、オペレーショナルエラーとプログラマーエラーを分けて考えましょうよ、というところが良い。日本語だとどう訳すんだろう?

> People use the term “errors” to talk about both operational and programmer errors, but they’re really quite different. Operational errors are error conditions that all correct programs must deal with, and as long as they’re dealt with, they don’t necessarily indicate a bug or even a serious problem. “File not found” is an operational error, but it doesn’t necessarily mean anything’s wrong. It might just mean the program has to create the file it’s looking for first.
>
> By contrast, programmer errors are bugs. They’re cases where you made a mistake, maybe by forgetting to validate user input, mistyping a variable name, or something like that. By definition there’s no way to handle those. If there were, you would have just used the error handling code in place of the code that caused the error!

脚注に

> The concepts of an operational error and a programmer error long predate Node.js. In Java, this loosely tracks the use of checked and unchecked exceptions, though operational errors that are known to be unhandleable, like OutOfMemoryError, are grouped with unchecked exceptions.

とあるように、この区分は JavaScript 固有のものでもないし、あえて "in Node.js" と書かれた文章を JavaScript 書かない人に読ませなくても良いはずなのだけど、他言語でのちょうどいい文章を私は知らなくて、結果としてこれをすすめることが多い。
