---
title: "Inside runc (1/?)"
date: 2021-01-03T20:23:05-08:00
tags: ["100DaysToOffload", "Container"]
---
I'm going to start a series that I read [runc](https://github.com/opencontainers/runc) "cover-to-cover".

runc is a small command which reads [the OCI Runtime Specification](https://github.com/opencontainers/runtime-spec) and runs Linux containers. Docker, [containerd](https://github.com/containerd/containerd) or even [CRI-O](https://github.com/cri-o/cri-o) use runc under the hood by default.

### But first, let's talk about libcontainer

The part of runc is called [libcontainer](https://github.com/opencontainers/runc/tree/master/libcontainer) due to the origin. I'd like to cover the fact first since it is fascinating. 

In 2014, Docker was [attempting to extract its core as libcontainer](https://www.docker.com/blog/docker-0-9-introducing-execution-drivers-and-libcontainer/).

> Second, we are introducing a new built-in execution driver which is shipping alongside the LXC driver. This driver is based on libcontainer, a pure Go library which we developed to access the kernel’s container APIs directly, without any other dependencies.

While it didn't thrive as a standalone project, [libcontainer eventually became runc in 2015](https://www.docker.com/blog/open-container-project-foundation/).

> Docker has taken the entire contents of the libcontainer project, including [nsinit], and all modifications needed to make it run independently of Docker,  and donated it to this effort. This codebase, called runC, can be found at github/opencontainers/runc. libcontainer will cease to operate as a separate project.

Because of that, a lot of low-level "guts" of runc is in libcontainer/ directory.

### Where is the main function?

runc's main function is in `main.go`. runc uses [urfave/cli](https://github.com/urfave/cli) for handling its sub-commands and parsing the command line parameters.

```go
func main() {
	app := cli.NewApp()
	app.Name = "runc"
	app.Usage = usage
...
	app.Commands = []cli.Command{
		checkpointCommand,
		createCommand,
		deleteCommand,
		eventsCommand,
		execCommand,
		initCommand,
		killCommand,
		listCommand,
		pauseCommand,
		psCommand,
		restoreCommand,
		resumeCommand,
		runCommand,
		specCommand,
		startCommand,
		stateCommand,
		updateCommand,
	}
...
```

All of the command functions are in separate Go files in the `main` package, such as `checkpoint.go`.

### That's it for today!

I'm going to read `create.go` this week.
