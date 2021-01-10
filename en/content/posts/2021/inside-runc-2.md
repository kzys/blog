---
title: "Inside runc (2/?)"
date: 2021-01-09T19:44:32-08:00
tags: ["100DaysToOffload", "Container"]
---
This post is a bit unfinished, but I'd like to do what Julia Evans did on her [Recurse Center series](https://jvns.ca/categories/rc-2020/). Write what I know so far.

runc's `create` command creates a container and then starts the container. This is a bit confusing if you are familiar about containerd where running containers are called "tasks".

The actual code in create.go is quite simple.

```go
	Action: func(context *cli.Context) error {
		if err := checkArgs(context, 1, exactArgs); err != nil {
			return err
		}
		if err := revisePidFile(context); err != nil {
			return err
		}
		spec, err := setupSpec(context)
		if err != nil {
			return err
		}
		status, err := startContainer(context, spec, CT_ACT_CREATE, nil)
		if err != nil {
			return err
		}
		// exit with the container's exit status so any external supervisor is
		// notified of the exit with the correct exit status.
		os.Exit(status)
		return nil
	},
```

All interesting things are happening in `startContainer()` which calls `runner#run()`

```go
func (r *runner) run(config *specs.Process) (int, error) {
	var err error
	defer func() {
		if err != nil {
			r.destroy()
		}
	}()
...
	switch r.action {
	case CT_ACT_CREATE:
		err = r.container.Start(process)
	case CT_ACT_RESTORE:
		err = r.container.Restore(process, r.criuOpts)
	case CT_ACT_RUN:
		err = r.container.Run(process)
	default:
		panic("Unknown action")
	}
```

The type of `r.container` is libcontainer.Container. So let's see `Run()` method there.

### libcontainer is complicated

Run() calls Start(), which calls start().

```go
func (c *linuxContainer) start(process *Process) error {
	parent, err := c.newParentProcess(process)
	if err != nil {
		return newSystemErrorWithCause(err, "creating new parent process")
	}
	parent.forwardChildLogs()
	if err := parent.start(); err != nil {
		return newSystemErrorWithCause(err, "starting container process")
	}
    ...
```

Hmm, what is the parent process here? I think that it may be related to runc's [init command](https://github.com/opencontainers/runc/blob/master/init.go), which has "do not call it outside of runc".

```go
var initCommand = cli.Command{
	Name:  "init",
	Usage: `initialize the namespaces and launch the process (do not call it outside of runc)`,
	Action: func(context *cli.Context) error {
		factory, _ := libcontainer.New("")
		if err := factory.StartInitialization(); err != nil {
			// as the error is sent back to the parent there is no need to log
			// or write it to stderr because the parent process will handle this
			os.Exit(1)
		}
		panic("libcontainer: container init failed to exec")
	},
}
```

### nsenter

Another thing I'd like to mention today is [nsenter](https://github.com/opencontainers/runc/tree/master/libcontainer/nsenter), a Go package inside libcontainer.

> The `nsenter` package registers a special init constructor that is called before the Go runtime has a chance to boot. This provides us the ability to `setns` on existing namespaces and avoid the issues that the Go runtime has with multiple threads. This constructor will be called if this package is registered, imported, in your go application.

The special init constructor seems quite tricky.

Go has been the container language since Docker. Docker, containerd, runc and Kubernetes. All of them have been written in Go. But, sometimes I think that Go's think runtime doesn't fit well for low-level container stuff. 

### Update

Sam has [tweeted](https://twitter.com/samuelkarp/status/1348133656565403649):

> I agree that Go's runtime can be at odds with low-level syscall manipulation. For a while, there was a Rust OCI runtime from Oracle called Railcar (which seems to be dormant) and Red Hat has a C implementation called crun. But runc is far more widely used and has more scrutiny.

Yes. There are [crun](https://github.com/containers/crun) and [railcar](https://github.com/oracle/railcar). Another "does Go really fit us?" moment was from [amazon-ecs-shim-loggers-for-containerd](https://github.com/aws/amazon-ecs-shim-loggers-for-containerd/pull/9)

> Note that golang has not included this fix in a specific version, and in order to take it effect, please build shim logger with go built from source.

I'm glad that the issue has been fixed in Go's master at least. The fix will be included in Go 1.16.
