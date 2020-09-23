---
title: "How Go's testing works (1)"
date: 2020-04-21T22:52:57-07:00
tags: ["Go"]
---

I've been using primarily Go at work since last summer and Go's testing package bit me a few times. Do you know that `FailNow()` is killing a goroutine? I didn't even know that killing a goroutine is possible.

In this series, I will explain how Go's testing works, from `go test` command to `testing` package by peeking into the implementations.

### Let's start from "go test"!

In Go, a lot of official toolchain is invoked through the go command and testing is no exception. Let's start from `go test`.

[src/cmd/go/main.go](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/main.go) has the go command's main function. Unlike Git where all subcommands are different binaries. The go command has all subcommands inside.

```go
func init() {
	base.Go.Commands = []*base.Command{
        ...
        test.CmdTest,
        ...
    }
}

func main() {
	_ = go11tag
	flag.Usage = base.Usage
	flag.Parse()
	log.SetFlags(0)
    ...
BigCmdLoop:
	for bigCmd := base.Go; ; {
		for _, cmd := range bigCmd.Commands {
        ...
        }
    }
}
```

[src/cmd/go/internal/test/test.go](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/internal/test/test.go) has CmdTest and runTest is where interesting things are happening.

```go
func init() {
	CmdTest.Run = runTest
}

const testUsage = "go test [build/test flags] [packages] [build/test flags & test binary flags]"

var CmdTest = &base.Command{
	CustomFlags: true,
	UsageLine:   testUsage,
	Short:       "test packages",
    ...
```

runTest is building a list of actions -- `builds`, `runs` and `prints` -- and pass them to `work.Builder#Do()`. Note that while prints are only passed to `root`, the actions are having dependencies between which invokes the actions of `runs` and `builds` by just passing `prints`.

```go
func runTest(cmd *base.Command, args []string) {
    ...
	var b work.Builder
	b.Init()
	...
	var builds, runs, prints []*work.Action
	...
	// Prepare build + run + print actions for all packages being tested.
	for _, p := range pkgs {
		// sync/atomic import is inserted by the cover tool. See #18486
		if testCover && testCoverMode == "atomic" {
			ensureImport(p, "sync/atomic")
		}

		buildTest, runTest, printTest, err := builderTest(&b, p)
		if err != nil {
			str := err.Error()
			str = strings.TrimPrefix(str, "\n")
			if p.ImportPath != "" {
				base.Errorf("# %s\n%s", p.ImportPath, str)
			} else {
				base.Errorf("%s", str)
			}
			fmt.Printf("FAIL\t%s [setup failed]\n", p.ImportPath)
			continue
		}
		builds = append(builds, buildTest)
		runs = append(runs, runTest)
		prints = append(prints, printTest)
	}

	// Ultimately the goal is to print the output.
	root := &work.Action{Mode: "go test", Func: printExitStatus, Deps: prints}
	...
    var b work.Builder
	b.Init()
    ...
    b.Do(root)
}
```

`builderTest` is using the builder to build actions that invoke the compiler, linker, executing the artifacts and so on.

```go
func builderTest(b *work.Builder, p *load.Package) (buildAction, runAction, printAction *work.Action, err error) {
	...
	// Set compile objdir to testDir we've already created,
	// so that the default file path stripping applies to _testmain.go.
	b.CompileAction(work.ModeBuild, work.ModeBuild, pmain).Objdir = testDir

	a := b.LinkAction(work.ModeBuild, work.ModeBuild, pmain)
	a.Target = testDir + testBinary + cfg.ExeSuffix
	...
	if testC {
		printAction = &work.Action{Mode: "test print (nop)", Package: p, Deps: []*work.Action{runAction}} // nop
		vetRunAction = printAction
	} else {
		// run test
		c := new(runCache)
		runAction = &work.Action{
			Mode:       "test run",
			Func:       c.builderRunTest,
			Deps:       []*work.Action{buildAction},
			Package:    p,
			IgnoreFail: true, // run (prepare output) even if build failed
			TryCache:   c.tryCache,
			Objdir:     testDir,
		}
		vetRunAction = runAction
		cleanAction = &work.Action{
			Mode:       "test clean",
			Func:       builderCleanTest,
			Deps:       []*work.Action{runAction},
			Package:    p,
			IgnoreFail: true, // clean even if test failed
			Objdir:     testDir,
		}
		printAction = &work.Action{
			Mode:       "test print",
			Func:       builderPrintTest,
			Deps:       []*work.Action{cleanAction},
			Package:    p,
			IgnoreFail: true, // print even if test failed
		}
	}
	...
}
```

### Is "work" a good package name?

The `work` package is a bit odd. It actually has "go install" and "go build", but it is called "work". Anyway the Builder is in [src/cmd/go/internal/work/action.go](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/internal/work/action.go).

```go
// A Builder holds global state about a build.
// It does not hold per-package state, because we
// build packages in parallel, and the builder is shared.
type Builder struct {
	WorkDir     string               // the temporary work directory (ends in filepath.Separator)
	actionCache map[cacheKey]*Action // a cache of already-constructed actions
	mkdirCache  map[string]bool      // a cache of created directories
	flagCache   map[[2]string]bool   // a cache of supported compiler flags
	Print       func(args ...interface{}) (int, error)

	IsCmdList           bool // running as part of go list; set p.Stale and additional fields below
	NeedError           bool // list needs p.Error
	NeedExport          bool // list needs p.Export
	NeedCompiledGoFiles bool // list needs p.CompiledGoFIles
    ...
```

And Do() is in [src/cmd/go/internal/work/exec.go](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/internal/work/exec.go). While the function itself does some stuff, it doesn't do much for testing specifically.

### Trivia Time!

Before heading over to the `testing` package. There are two interesting implementation details I'd like to share.

First, if you explicitly disable Go's test timeout, it still kills your test after [almost one century](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/internal/test/test.go#L567).

```
		// An explicit zero disables the test timeout.
		// No timeout is passed to tests.
		// Let it have one century (almost) before we kill it.
		testActualTimeout = -1
		testKillTimeout = 100 * 365 * 24 * time.Hour
```

Second, this is more likely about Windows, but [Windows treats some binaries differently based on solely its names and Go workarounds that](https://github.com/golang/go/blob/go1.14.2/src/cmd/go/internal/test/test.go#L858).

```go
	if cfg.Goos == "windows" {
		// There are many reserved words on Windows that,
		// if used in the name of an executable, cause Windows
		// to try to ask for extra permissions.
		// The word list includes setup, install, update, and patch,
		// but it does not appear to be defined anywhere.
		// We have run into this trying to run the
		// go.codereview/patch tests.
		// For package names containing those words, use test.test.exe
		// instead of pkgname.test.exe.
		// Note that this file name is only used in the Go command's
		// temporary directory. If the -c or other flags are
		// given, the code below will still use pkgname.test.exe.
		// There are two user-visible effects of this change.
		// First, you can actually run 'go test' in directories that
		// have names that Windows thinks are installer-like,
		// without getting a dialog box asking for more permissions.
		// Second, in the Windows process listing during go test,
		// the test shows up as test.test.exe, not pkgname.test.exe.
		// That second one is a drawback, but it seems a small
		// price to pay for the test running at all.
		// If maintaining the list of bad words is too onerous,
		// we could just do this always on Windows.
		for _, bad := range windowsBadWords {
			if strings.Contains(testBinary, bad) {
				a.Target = testDir + "test.test" + cfg.ExeSuffix
				break
			}
		}
	}
```
