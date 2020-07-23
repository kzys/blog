---
title: "containerd's devmapper snapshotter"
date: 2020-07-22T20:02:02-07:00
tags: ["100DaysToOffload", "Container"]
---
[My first pull request](https://github.com/containerd/containerd/pull/4374) for containerd's devmapper snapshotter has been merged into master. There was also a nice open-source moment. One of the reviewers, Maksym is my ex-coworker.

Since I have fresh memory of the snapshotter, I'd like to write a bit about that.

### What are snapshotters?

Docker has graph drivers. Apparently the official doc calls them as [storage drivers](https://docs.docker.com/storage/storagedriver/), but internally they are still graph drivers.

snapshotters are containerd's graph/storage drivers equivalent. Michael Crosby's [Where are containerd’s graph drivers?](https://blog.mobyproject.org/where-are-containerds-graph-drivers-145fc9b7255) is the best document to understand the motivation.

> The short answer is that containerd does not have graph drivers, but it does have snapshotters. We didn’t make this change because we wanted to invent something new or had a severe case of NiH (not invented here). We set out to fix a few long standing issues that are caused by the design of graph drivers. To better understand some of these issues, we first have to look at the history of graph drivers and how they were originally developed.

### What is devmapper snapshotter?

It is [Docker's device mapper storage driver](https://docs.docker.com/storage/storagedriver/device-mapper-driver/) equivalent.

### How does that work?

Docker's [How container reads and writes work with devicemapper](https://docs.docker.com/storage/storagedriver/device-mapper-driver/#how-container-reads-and-writes-work-with-devicemapper) is probably the best document regarding the internals.

### Hmm, are thy same?

Design-wise, close.

Implementation-wise, no. While storage/graph drivers and snapshotters are similar, the APIs are different. In addition to that, the graph driver is using [libdevmapper through CGO](https://github.com/moby/moby/blob/v19.03.12/pkg/devicemapper/devmapper_wrapper.go), whereas the snapshotter is using [dmsetup CLI](https://github.com/containerd/containerd/blob/v1.3.6/snapshots/devmapper/dmsetup/dmsetup.go).



