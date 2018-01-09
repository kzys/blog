---
title: "Plotnine and Bokeh on Datalab"
date: 2018-01-08T17:42:36-08:00
---

[Cloud Datalab](https://cloud.google.com/datalab/) is Google's Jupyter fork, which is provided as a part of Google Cloud.

> Cloud Datalab is built on Jupyter (formerly IPython), which boasts a thriving ecosystem of modules and a robust knowledge base.

While that is fun product to play with, I had a few hiccups.

### Plotnine

Cloud Datalab includes [a set of libraries](https://cloud.google.com/datalab/docs/concepts/key-concepts#included_libraries). However Google included ggplot as R's ggplot2 alternative for Python, which I disagree. [plotnine](https://github.com/has2k1/plotnine) is another ggplot2 alternative, which is better, I think.

You can install plotnine on Datalab easily by

```
! pip install plotnine
```

Problem solved.

### Bokeh

Cloud Datalab doesn't include Bokeh. Bokeh's latest version's Notebook integration doesn't work on Datalab.

According to [this GitHub issue](https://github.com/bokeh/bokeh/issues/7005),

> As of 0.12.9 the minimum supportable notebook version is 5.0. There is no technical path that will allow Bokeh to support JupyterLab, classic Notebook 5+ and Classic Notebook 4.x and earlier at the same time, with identical code in each. Supporting JupyterLab is imperative for the project, so earlier classic notebook versions below 5.0 cannot be supported. You can downgrade Bokeh, or upgrade your notebook (or use JupyterLab).

And Datalab is based on Datalab is based on Jupyter 4.2.3 apparently. I checked the version by running `Jupyter.version` on my browser.

You probably can downgrade Bokeh, but installing [datalab package](https://github.com/googledatalab/pydatalab) on your latest, local Jupyter notebook is probably more forward looking. Hope Google updates Datalab's Jupyter soon!
