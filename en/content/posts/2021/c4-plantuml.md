---
title: "C4-PlantUML looks good"
date: 2021-05-29T20:21:57-07:00
---

[C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML) is a PlantUML library based on [the C4 model](https://c4model.com/). C4 means "Context, Containers, Components, and Code", so four C's.

PlantUML's default color scheme it's own. C4-PlantUML removes the PlantUML-ness nicely.

My only pet peeve is about C4's terminology. Most of diagrams I write are somewhat related to Linux containers. So "containers" in my diagrams must mean "Linux containers", whereas it means a lot of different things in the C4 model.

> Not Docker! In the C4 model, a container represents an application or a data store. A container is something that needs to be running in order for the overall software system to work.

That really doesn't work for me, sadly.
