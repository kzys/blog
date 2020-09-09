---
title: "No YAML"
date: 2020-09-08T20:57:52-07:00
tags: ["100DaysToOffload"]
---

[noyaml.com](https://noyaml.com/) nicely summarizes YAML's pitfalls.

Developers over 30 may remember the age of XML. YAML was refreshing at that time and did have some good ideas such as having built-in types. Lisp's S-expressions have been having built-in types for decades though.

That being said, YAML is overly complicated and we have used that too far.

### Alternatives

I think [TOML](https://toml.io/en/) is good enough.

In BSD world, there is [UCL](https://github.com/vstakhov/libucl) (Universal Configuration Language), which looks nice. There is also HashiCorp's [HCL](https://github.com/hashicorp/hcl) (HashiCorp Configuration Language), which is inspired by UCL. Why don't they use UCL as is? It is answered in [this GitHub issue](https://github.com/hashicorp/hcl/issues/154).

Then there are "JSON for humans" formats such as [JSON5](https://json5.org/) and [Hjson](https://hjson.github.io/).
