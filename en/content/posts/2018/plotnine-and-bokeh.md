---
title: "Plotnine and Bokeh on Datalab"
date: 2018-01-08T17:42:36-08:00
tags: ["Python"]
---

[Cloud Datalab](https://cloud.google.com/datalab/) is Google's Jupyter fork, which is provided as a part of Google Cloud.

> Cloud Datalab is built on Jupyter (formerly IPython), which boasts a thriving ecosystem of modules and a robust knowledge base.

While that is a fun product to play with, I had a few hiccups.

### Plotnine

Cloud Datalab includes [a set of well-known Python libraries](https://cloud.google.com/datalab/docs/concepts/key-concepts#included_libraries). One of them is `ggplot`, which is R's ggplot2 alternative.

However that's not the only alternative you can use. I think [plotnine](https://github.com/has2k1/plotnine) is much better and [I'm not the only one](http://pltn.ca/plotnine-superior-python-ggplot/).

Luckily, you can install plotnine on Datalab easily by running

```
! pip install plotnine
```

from Jupyter.

### Bokeh

Cloud Datalab doesn't include Bokeh. Long story short, Bokeh's latest version's Notebook integration doesn't work on Datalab.

According to [this GitHub issue](https://github.com/bokeh/bokeh/issues/7005),

> As of 0.12.9 the minimum supportable notebook version is 5.0. There is no technical path that will allow Bokeh to support JupyterLab, classic Notebook 5+ and Classic Notebook 4.x and earlier at the same time, with identical code in each. Supporting JupyterLab is imperative for the project, so earlier classic notebook versions below 5.0 cannot be supported. You can downgrade Bokeh, or upgrade your notebook (or use JupyterLab).

And Datalab is based on Jupyter 4.2.3 apparently (I checked `Jupyter.version` from my browser's JavaScript console).

You can downgrade Bokeh, or install [datalab package](https://github.com/googledatalab/pydatalab) on your latest, local Jupyter notebook. Hope Google updates Datalab's Jupyter soon.

