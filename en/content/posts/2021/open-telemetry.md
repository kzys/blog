---
title: 'OpenTelemetry "Collector" is a fluentd-like agent'
date: 2021-06-02T21:42:16-07:00
---

Last week, I was writing a document that utilizes OpenTelemetry, sent that to [Michael Hausenblas](https://github.com/mhausenblas) and [Jaana Dogan](https://github.com/rakyll), somewhat out of blue. Both kindly reviewed my doc and corrected my understanding.

Now I have better understanding regarding OpenTelemetry.

### What is OpenTelemetry?

According to [the official website](https://opentelemetry.io/);

> An observability framework for cloud-native software.
>
> OpenTelemetry is a collection of tools, APIs, and SDKs. You can use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) for analysis in order to understand your software's performance and behavior.

But it is not a "framework" in the sense of Rails or Django. It wouldn't take your "main" function. "A collection of tools, APIs, and SDKs" makes much more sense, while it is really all-around though.

### OpenTelemetry Protocol

First there is [OpenTelemetry Protocol](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/otlp.md) (OTLP). It is a wire protocol over either gRPC or HTTP/1.1. Unlike Prometheus, where you can expose an endpoint (in other words, your application listens a TCP port). OpenTelemetry protocol is "push". So Your application would send logging, metrics and tracing data to an OpenTelemetry endpoint somewhere.

### OpenTelemetry Collector

Then there is OpenTelemetry Collector, which is an implementation that can send/receive logging, metrics and tracing data in various formats, including the OpenTelemetry Protocol.

Basically the collector is acting like fluentd. It is pluggable and can be configured in a lot of different ways.

Honestly speaking, having this pluggable collector under OpenTelemetry umbrella had confused me. You could configure the collector to take tracing information from Jaeger and publish the information to Zipkin. The collector is neutral about input/output and doesn't treat OpenTelemetry differently, at least on the configuration-level.

### Is it a good idea to use TCP in localhost-only communications?

I don't know. Assigning TCP ports during development is tedious though.

### What does it mean for containerd?

I don't know either.

There is [an open draft pull request to add OpenTelemetry for tracing](https://github.com/containerd/containerd/pull/5489). The author is actually my colleague. I have also opened [an issue about utilizing OpenTelemetry for metrics](https://github.com/containerd/containerd/issues/5543) in addition to Prometheus.

Regarding logging, I actually like the fact systemd takes care of logging. Adding all daemons OpenTelemetry logging support seems to be going backward.
