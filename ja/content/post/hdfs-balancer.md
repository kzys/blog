+++
date = "2016-09-15T21:52:57-07:00"
draft = false
title = "hdfs balancer で unhealthy node をなんとかする"
+++

ディスク容量が一定以上になったノードが unhealthy になって、クラスタからどんどん引退して困っていたんだけど、データノードを追加して hdfs balancer を実行することでなんとかなった。

基本的には [Hadoopのバランサー実行中に dfs.datanode.balance.bandwidthPerSec を変える](http://d.hatena.ne.jp/wyukawa/20130105/1357401075) にある通りだけど、2.7 では

* start-balancer.sh は [hdfs balancer](https://hadoop.apache.org/docs/r2.7.3/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html#balancer) に
* hadoop dfsadmin は [hdfs dfsadmin](https://hadoop.apache.org/docs/r2.7.3/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html#dfsadmin) に

それぞれ変わっている。
