---
title: "Ruby の Hash 実装"
date: 2020-11-19T21:43:03-08:00
---
Rust には [aHash](https://github.com/tkaitchuck/aHash) という、x86 系の新しい CPU についている AES 暗号のための命令を使った、高速なハッシュ関数がある。これは [hashbrown](https://github.com/rust-lang/hashbrown) という Rust 向けの SwissTable 実装ではデフォルトになっていて、hashbrown は Rust 本体の HashMap の実装でもあるんだけど、そちらでは SipHash 1-3 がハッシュ関数として使われている。

という話を、[英語ブログの方に書いた](https://blog.8-p.info/en/2020/11/19/ahash/)後に、ふと Ruby はどうなっているんだっけ、と思ったので調べてみた。

昔に趣味で Ruby, 仕事で Perl を書いていたころは「CRuby のソースコードはまあ読めるよねえ。でも Perl は謎のマクロが多くてまじできつい。」と思っていたんだけど、2020年に CRuby のソースコードを読むと、全体的にコメントが少ないのと、とりわけ昔のコミットのコミットメッセージが短いので、結構きつかった。

### ハッシュマップの実装には2つの軸がある

ハッシュマップの実装には、ハッシュ関数と、キーと値のペアをどう格納するかという、2つの直交する軸があるがある。冒頭で出てきた aHash はハッシュ関数だし、SwissTable はキーと値のペアをどう格納するか、という軸になる。

CRuby の場合は、ハッシュ関数は SipHash 1-3, キーと値のペアは open addressing 系の実装を使っている。それでは、実際の実装を見てみよう。

### siphash.c

CRuby の SipHash 1-3 は、そのまま siphash.c の中に、sip_hash13() という名前で定義されている。なお SipHash 1-3 が導入されたのは[2017年](https://github.com/ruby/ruby/commit/04c94f95d1a1c6a12f5412228a2bcdc00f5de3b2#diff-be7c634152b8fb8861a534571c8345cbe89b26dbe5e8dbe8a24aece9c97643cc)のことで、初めて SipHash が導入された[2012年](https://github.com/ruby/ruby/commit/525cb66467ff22a50f2e6bf307924459d38cd592#diff-be7c634152b8fb8861a534571c8345cbe89b26dbe5e8dbe8a24aece9c97643cc)には、SipHash 2-4 が使われていた。

ちなみに、この SipHash 導入時の最初のコミットメッセージは

> siphash
>
> * random.c (rb_memhash): use siphash.

これだけ。3行!

ここで定義された sip_hash13() は、random.c にある rb_memhash() でラップされて

```c
st_index_t
rb_memhash(const void *ptr, long len)
{
    sip_uint64_t h = sip_hash13(hash_salt.key.sip, ptr, len);
#ifdef HAVE_UINT64_T
    return (st_index_t)h;
#else
    return (st_index_t)(h.u32[0] ^ h.u32[1]);
#endif
}
```

各地で使われている。

また SipHash 以前は自前のハッシュ関数を使っていて、それで HashDoS 攻撃
を回避しようとした経緯は [HashDoS脆弱性との戦い！ Rubyコミッター・卜部昌平が明かすプログラム堅牢化のノウハウ](https://eh-career.com/engineerhub/entry/2018/01/11/110000) (2018) にまとまっている。

### hash.c

CRuby の Hash クラスの実装は hash.c にある、けれど全体的に Ruby 向けのメソッドを定義したりしているところが多くて、肝心のハッシュマップとしてのデータ構造はあまり見えてこない。というのも、CRuby の Hash クラスに対応する C 側の構造体である RHash は、実際には st_table という別の構造体の、薄いラッパーとして定義されている。

```c
struct RHash {
    struct RBasic basic;
    union {
        st_table *st;
        struct ar_table_struct *ar; /* possibly 0 */
    } as;
    const VALUE ifnone;
    union {
        ar_hint_t ary[RHASH_AR_TABLE_MAX_SIZE];
        VALUE word;
    } ar_hint;
};
```

コメント...

CRuby のような言語処理系では、ハッシュマップは言語処理系そのものでも良く使われる。CRuby はセルフホスティングしていない (処理系自体は Ruby ではなく C で書かれている) ので、C から使いやすいハッシュマップを作るのは必要不可欠だったんだろう。

### st.c

st.c には、他のファイルたちとちがって、比較的コメントがある。

```c
/* This is a public domain general purpose hash table package
   originally written by Peter Moore @ UCB.
   The hash table data structures were redesigned and the package was
   rewritten by Vladimir Makarov <vmakarov@redhat.com>.  */

/* The original package implemented classic bucket-based hash tables
   with entries doubly linked for an access by their insertion order.
   To decrease pointer chasing and as a consequence to improve a data
   locality the current implementation is based on storing entries in
   an array and using hash tables with open addressing.
```
クレジットされている Vladimir Makarov さんは、RedHat のブログに [Towards Faster Ruby Hash Tables](https://web.archive.org/web/20190724213350/https://developers.redhat.com/blog/2017/02/27/towards-faster-ruby-hash-tables/) (2017) として経緯をまとめている。

> Modern processors have several levels of cache. Usually, the CPU reads one or a few lines of the cache from memory (or another level of cache). So CPU is much faster at reading data stored close to each other. The current implementation of Ruby hash tables does not fit well with modern processor cache organization, which requires better data locality for faster program speed.

### おまけ: その他のハッシュ関数

st.c には、実は MurmurHash の亜種も定義されている。

```c
/* This hash function is quite simplified MurmurHash3
 * Simplification is legal, cause most of magic still happens in finalizator.
 * And finalizator is almost the same as in MurmurHash3 */
#define BIG_CONSTANT(x,y) ((st_index_t)(x)<<32|(st_index_t)(y))
#define ROTL(x,n) ((x)<<(n)|(x)>>(SIZEOF_ST_INDEX_T*CHAR_BIT-(n)))
```

さらに FNV まである。

```c
NO_SANITIZE("unsigned-integer-overflow", PUREFUNC(static st_index_t strcasehash(st_data_t)));
static st_index_t
strcasehash(st_data_t arg)
{
    register const char *string = (const char *)arg;
    register st_index_t hval = FNV1_32A_INIT;

    /*
     * FNV-1a hash each octet in the buffer
     */
    while (*string) {
	unsigned int c = (unsigned char)*string++;
	if ((unsigned int)(c - 'A') <= ('Z' - 'A')) c += 'a' - 'A';
	hval ^= c;

	/* multiply by the 32 bit FNV magic prime mod 2^32 */
	hval *= FNV_32_PRIME;
    }
    return hval;
}
```

Ruby は、外部からの入力をうけつけない (e.g. 変数の名前) みたいなところでは、これらの高速だけど暗号学的ではないハッシュ関数を使っている。

