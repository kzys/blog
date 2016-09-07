+++
date = "2016-09-06T20:50:06-07:00"
title = "PyHive + ipython-sql で Jupyter から Hive に接続する"
draft = false
+++

Jupyter から Hive を使うのに [PyHive](https://github.com/dropbox/PyHive) +
[ipython-sql](https://github.com/catherinedevlin/ipython-sql) が便利だった。

### PyHive

[PyHive](https://github.com/dropbox/PyHive) は Hive の Thrift クライアントを
[DB-API 2.0 (PEP 249)](https://www.python.org/dev/peps/pep-0249/) 準拠の API でラップするライブラリだ。DB-API は Python でデータベースにアクセスするための標準的なインターフェースで、Perl の [DBI](https://dbi.perl.org/) や Java の [JDBC](http://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) に相当する。

PyHive と [pandas.read_sql](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_sql.html) があれば、とりあえず SQL の結果を pandas に読み込むことはできるようになる。

### ipython-sql

世の中には「SQL を書くのは最初だけで、pandas に読み込んでからが本番」という仕事をしている人もいるんだろうけど、私の場合は SQL 上でいろいろすることのほうが多いので [ipython-sql](https://github.com/catherinedevlin/ipython-sql) も使っている。

これがあると

```
pd.read_sql("select * from ...", conn)
```

ではなく

```
%% sql
select * from ...
```

というふうに、セルに直接 SQL が書けるようになる。

### 落とし穴: DB-API とプレースホルダ

Python の DB-API にはプレースホルダ構文があるので、ipython-sql でもそのことを意識する必要がある。

ipython-sql の README.rst には

> Bind variables (bind parameters) can be used in the "named" (:x) style. The variable names used should be defined in the local namespace

と書かれているけど、この前半の ```:x``` 形式が使えるかは DB-API の実装に依存している。

PyHive の場合は [pyformat という printf 風の形式にのみ対応している](https://github.com/dropbox/PyHive/blob/b34bdbf51378b3979eaf5eca9e956f06ddc36ca0/pyhive/hive.py#L30) ので、結果として

```
%% sql
select * from developer where name like '%steve%'
```

なんてクエリを実行しようとすると

```
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-4-983b54b86e01> in <module>()
----> 1 get_ipython().magic(u"select * from developer where name like '%steve%'")

/Users/kazuyoshi/src/jupyter-work/lib/python2.7/site-packages/IPython/core/interactiveshell.pyc in magic(self, arg_s)
   2156         magic_name, _, magic_arg_s = arg_s.partition(' ')
   2157         magic_name = magic_name.lstrip(prefilter.ESC_MAGIC)
-> 2158         return self.run_line_magic(magic_name, magic_arg_s)
   2159 
   2160     #-------------------------------------------------------------------------

...

/Users/kazuyoshi/src/jupyter-work/lib/python2.7/site-packages/pyhive/hive.pyc in execute(self, operation, parameters, async)
    227             sql = operation
    228         else:
--> 229             sql = operation % _escaper.escape_args(parameters)
    230 
    231         self._reset_state()

TypeError: not enough arguments for format string
```

というエラーになってしまう。```'%%steve%%'``` とエスケープする必要があり、ちょっと面倒くさい。
