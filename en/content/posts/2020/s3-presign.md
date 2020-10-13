---
title: "How to download large files from an isolated EC2 instance that you cannot ssh?"
date: 2020-10-12T20:44:31-07:00
tags: ["100DaysToOffload", "AWS"]
---
One of the development EC2 instances I wanted to collect some logs has [ssm-agent](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html) instead of `sshd`. While this seems perfectly reasonable in 2020, how do you copy large log files from there? I initially did `cat /some/large.log | gzip | base64` and carefully copied the base64-encoded output in System Manager's in-browser terminal. It was stupid.

Instead, you can

* Create an S3 bucket in your account.
* Make a pre-sign URL to upload a file to the bucket.
* Use curl to PUT a file to the pre-sign URL.

But there are a few caveats.

First AWS CLI cannot create a pre-sign URL with PUT. [There is a PR since 2019](https://github.com/aws/aws-cli/pull/3979), which hasn't been merged. I ended up writing my own in Go.

Second [curl's `-d` parameter is removing `\r` and `\n`](https://curl.haxx.se/docs/manpage.html).

> If you start the data with the letter @, the rest should be a file name to read the data from, or - if you want curl to read the data from stdin. Posting data from a file named 'foobar' would thus be done with -d, --data @foobar. When -d, --data is told to read from a file like that, carriage returns and newlines will be stripped out. If you don't want the @ character to have a special interpretation use --data-raw instead.

I really don't know why. I've been believing touching these characters is a Windows thing.
