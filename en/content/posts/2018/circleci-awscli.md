---
title: "CircleCI's AWS CLI is old"
date: 2018-06-01T22:31:41-07:00
draft: false
tags: ["Amazon"]
---

CircleCI's AWS CLI is old. That's why people install the CLI from Python's pip rather than using apt-get.

Technically speaking, there is no "CircleCI's AWS CLI". CircleCI uses Docker, and there are [pre-build Docker images][1], which use Debian 8 (Jessie) and Debian 9 (Stretch) currently. Debian 9's AWS CLI is [1.11.13][2] and Debian 8's CLI is [1.4.2][3]. They are really old. CloudFront was "preview" at that time.

It is better to ignore these ancient versions. Just install the latest CLI from pip.

[1]: https://circleci.com/docs/2.0/circleci-images/
[2]: https://packages.debian.org/stretch/awscli
[3]: https://packages.debian.org/jessie/awscli