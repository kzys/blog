---
title: "Making a maze for my kids, in JavaScript"
date: 2022-01-23T15:18:13-08:00
---
My elder kid loves mazes. So I made [a maze generator](https://8-p.info/maze/) in JavaScript. It is a dad-woodworking-like situated software. I probably don't have to do it and google it from somewhere. But making day-to-day software feels good.

### What is "Situated Software"?

Clay Shirky has written ["Situated Software"](https://www.gwern.net/docs/technology/2004-03-30-shirky-situatedsoftware.html) in 2004.

> Part of the future I believe I'm seeing is a change in the software ecosystem which, for the moment, I'm calling situated software. This is software designed in and for a particular social situation or context. This way of making software is in contrast with what I'll call the Web School (the paradigm I learned to program in), where scalability, generality, and completeness were the key virtues.

While this future hasn't been there yet, I still like the essay. I hope public clouds and managed compute platforms[^1] make that slightly easier. People who work on situated software may not be software developers in the traditional sense. They don't have to worry about Linux kernel versions.

If you are interested, [Nelson Elhage](https://buttondown.email/nelhage/archive/situated-social-software/) and [Hillel Wayne](https://buttondown.email/hillelwayne/archive/situated-software/) have written about the essay in 2020.

### Maze Generation Algorithms

The page is currently using a randomized depth-first search's iterative version, which is described in [the Wikipedia page](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Iterative_implementation).

[C言語による最新アルゴリズム事典](https://oku.edu.mie-u.ac.jp/~okumura/algo/) also has a maze generation algorithm, but it is too terse for me. I bought the book long time ago and pretty excited to read about all of algorithms, but they were overall really terse, probably to fit in the print form.

The Pragramatic Bookshelf has [Mazes for Programmers](https://pragprog.com/titles/jbmaze/mazes-for-programmers/). I read a bit through O'Reilly's subscription through my [ACM](https://www.acm.org) membership.

### React

I have used [Nuxt (Vue)](https://nuxtjs.org) and [Svelte a bit](https://svelte.dev), but this is the first time I use [React](https://reactjs.org). It is good! The fact that I can make a pure JSX-returning function and call it a "React component" is refreshing.

That being said, the amount of the indirection between the React + TypeScript world and the web's native form is overwhelming. 

[^1]: In other words, what I make for living.