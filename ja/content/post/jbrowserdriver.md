+++
date = "2016-10-05T22:40:53-07:00"
draft = false
title = "jBrowserDriver で JavaScript つきスクレイピング"
+++

iKnow をスクレイピングしようとしたら https://iknow.jp/login が派手に JavaScript を使っていた。

仕方がないので [Ghost Driver](https://github.com/detro/ghostdriver) 経由で [PhantomJS](http://phantomjs.org/) を呼ぼうと思ったら、最近 Ghost Driver はあまりメンテナンスされていないらしく

> If you need a better maintained WebDriver implementation, and write your code in Java, why not checkout Machine Publishers' jBrowserDriver? Tell Dan Hollingsworth I sent you.

代わりに、[jBrowserDriver](https://github.com/MachinePublishers/jBrowserDriver/) がすすめられていた。jBrowserDriver は

> A programmable, embedded web browser driver compatible with the Selenium WebDriver spec -- fast, headless, WebKit-based, 100% pure Java, and no browser dependencies

をうたうライブラリで、JavaFX の javafx.scene.web.WebView を使っている。

```scala
    val driver = new JBrowserDriver(Settings.builder.timezone(Timezone.AMERICA_NEWYORK).build)

    driver.get("https://iknow.jp/login")

    driver.findElement(By.name("user[email]")).sendKeys("alice@example.com")
    driver.findElement(By.name("user[password]")).sendKeys("pa55w0rd")

    driver.findElement(By.tagName("form")).submit()
```

こんな感じに使える。

### 実装

実装を少し見てみると、JBrowserDriver を new するたびに、java を子プロセスとして起動して

```java
  public JBrowserDriver(final Settings settings) {
    ...
    sessionId = new SessionId(launchProcess(settings, configuredPortGroup.get()));
    if (actualPortGroup.get() == null) {
      Util.handleException(new IllegalStateException("Could not launch browser."));
    }
    JBrowserDriverRemote instanceTmp = null;
    try {
      synchronized (lock) {
        instanceTmp = (JBrowserDriverRemote) LocateRegistry
            .getRegistry(settings.host(), (int) actualPortGroup.get().child,
                new SocketFactory(settings.host(), actualPortGroup.get(), locks))
            .lookup("JBrowserDriverRemote");
        instanceTmp.setUp(settings);
      }
    } catch (Throwable t) {
      Util.handleException(t);
    }
    remote = instanceTmp;
    ...
  }
```

子プロセスとは RMI 経由で通信していた。

```java
  @Override
  public String getPageSource() {
    try {
      synchronized (lock) {
        return remote.getPageSource();
      }
    } catch (Throwable t) {
      Util.handleException(t);
      return null;
    }
  }
```

なにもインストールせずに Java から簡単に WebKit が呼べるというのはちょっと面白い。
