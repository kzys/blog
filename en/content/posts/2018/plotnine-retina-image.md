---
title: "Getting Retina images from Plotnine"
date: 2018-01-22T23:53:19-08:00
---

Just a small tip, which I didn't know in the beginning.

[plotnine's save method](http://plotnine.readthedocs.io/en/stable/generated/plotnine.ggplot.html#plotnine.ggplot.save) takes `dpi` as a parameter.

```python
from plotnine import * # import ggplot(), aes(), ...
g = ggplot(...)
g.save('plot.png', width = 10, height = 10, dpi = 100)
g.save('plot-2x.png', width = 10, height = 10, dpi = 200)
```

Then you can use `srcset` to specify the images from HTML.

```html
<img alt="..." src=".../companies.png" srcset=".../companies-2x.png 2x"/>
```

Also during exploration, I occasionally set [plotnine.options.figure_size](http://plotnine.readthedocs.io/en/stable/generated/plotnine.options.figure_size.html) to have relatively large images.

```python
import plotnine
plotnine.options.figure_size = (20, 20)
```
