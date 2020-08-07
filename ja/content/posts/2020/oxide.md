---
title: "Bryan Cantrill の Oxide Computer Company"
date: 2020-08-06T22:22:39-07:00
---

Bryan Cantrill のスタンフォード大学での講演を YouTube でみた。

{{< youtube vvZA9n3e5pc >}}

Bryan Cantrill は Sun で DTrace などを手がけた後に[^Oracle]、Joyent の VP of Engineering と CTO を歴任した人で、最近では [Rust 推し](http://dtrace.org/blogs/bmc/2018/09/18/falling-in-love-with-rust/)なことでも知られている。私は [The Summer of Rust](https://www.youtube.com/watch?v=LjFM8vw3pbU) を見てからずっと氏の講演のファンで、YouTube におすすめされるとつい見てしまう。

[Oxide Computer Company](https://oxide.computer/) は Bryan Cantrill が Joyent を辞めたあとに起業した会社で、ホームページでは

> Hyperscaler infrastructure for the rest of us

をうたっている。

Oxide Computer Company の問題意識は、

* オンプレミスのサーバーは無くならない。規制や経済上の理由で、クラウドに計算資源をおくのが得策でない状況というのは存在する。
* 現在のサーバー向けハードウェアは、ラックマウントな形をしていても、結局のところ IBM PC の延長でしかない。
* Google や Facebook といった "hyperscaler" はその問題に気づいている。Open Compute Project のサーバーは良い。
* 現在のサーバー向けハードウェアは、hyperscaler だけがもっているサーバー向けに設計されたものと、その他の我々が使える IBM PC の延長でしかないものに二極化している。

というもので、これを解決するために、ハードウェア、ソフトウェア、そしてファームウェアまでを統合して設計されたサーバーを作ることを目指している。

ファームウェアについては、Oxide Computer Company の共同創業者の一人でもある Jessie Frazelle が ACM Queue に書いていた [Securing the Boot Process](https://queue.acm.org/detail.cfm?id=3382016) もあわせて読むと理解が進むと思う。

Oxide Computer Company には [The Rust Programming Language](https://doc.rust-lang.org/book/) の著者でもある [Steve Klabnik](https://steveklabnik.com/writing/today-is-my-first-day-at-oxide-computer-company) も入社している。製品が出るのは2022年くらいらしいけれど、ファンとしては成功してほしいなあと思う。

[^Oracle]: 実際には Sun と Joyent の間に、Sun の買収にともなって Oracle に所属していた期間がある。Bryan Cantrill は常に Oracle には手厳しく、この講演の中でも "Sun was invaded sadly" と言及している。
