---
title: "My Blog Setup"
date: 2017-09-23T23:29:57-07:00
tags: ["Meta"]
---

My blog setup is quite complex. This post is a reminder to myself. I'm currently using the below;

* [Namecheap](https://www.namecheap.com/) for the domain. The CNAME entry for blog.8-p.info is pointing AWS API Gateway's CloudFront bucket.
* [Bitbucket](https://bitbucket.org/) for hosting the Git repository
* [Hugo](https://gohugo.io/) as a static site generator
* [Wercker](http://www.wercker.com/) to run Hugo and upload the output to Amazon S3
* [Amazon S3](https://aws.amazon.com/s3/) for storing the files
* [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [AWS Lambda](https://aws.amazon.com/lambda/) to serve Hugo's output with my old blog
* [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) to obtain the SSL certificate

The half of the complexity is coming from the fact that I was using blog.8-p.info for my blog from 2005 to 2011. It was on [Mephisto](https://github.com/mephistorb/mephisto), [WordPress](https://wordpress.org/) and some other blog engines. Now I'm running none of them, but the contents are stored as static HTML files and served as like before. Even nobody read them, [cool URIs don't change](https://www.w3.org/Provider/Style/URI.html).

Therefore there are 2 S3 buckets for blog.8-p.info. One of them is for Hugo and another is for the old files. API Gateway is routing some traffic to the former, and some traffic to the latter. This might not be "API" but it works for me.
