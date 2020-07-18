---
title: "Three odd things I know about Perl"
date: 2020-07-17T21:42:42-07:00
tags: ["100DaysToOffload", "Unix"]
---

In the very beginning of my career, I was using Perl. Mixi, a company I work for was a Perl shop. They were literally using LAMP (Linux, Apache, MySQL and Perl) at that time. Naturally I read Perl's interpreter a bit. So, I know a few odd things about Perl.

### The Lord of the Rings

All .c files in the Perl interpreter has a quote from "The Load of the Rings". For example, [perl.c](https://github.com/Perl/perl5/blob/v5.33.0/perl.c) has;

```c
/*
 *      A ship then new they built for him
 *      of mithril and of elven-glass
 *              --from Bilbo's song of Eärendil
 *
 *     [p.236 of _The Lord of the Rings_, II/i: "Many Meetings"]
 */
```

[regcomp.c](https://github.com/Perl/perl5/blob/v5.33.0/regcomp.c) has;

```c
/*
 * 'A fair jaw-cracker dwarf-language must be.'            --Samwise Gamgee
 *
 *     [p.285 of _The Lord of the Rings_, II/iii: "The Ring Goes South"]
 */
```

### Perl's VM has a lot of opcodes

Perl's [opcode.h](https://github.com/Perl/perl5/blob/v5.33.0/opcode.h#L18) is long, because a lot of built-in functionalities are actually have opcodes internally. `chomp` has its opcode, `stat` has its opcode.

Some of them share its opcode wildly. For example `sin`, `cos`, `exp`, `log` and `sqrt` are all eventually go to `pp_sin`.

```c
/* also used for: pp_cos() pp_exp() pp_log() pp_sqrt() */

PP(pp_sin)
{
    dSP; dTARGET;
    int amg_type = fallback_amg;
    const char *neg_report = NULL;
    const int op_type = PL_op->op_type;

    switch (op_type) {
    case OP_SIN:  amg_type = sin_amg; break;
    case OP_COS:  amg_type = cos_amg; break;
    case OP_EXP:  amg_type = exp_amg; break;
    case OP_LOG:  amg_type = log_amg;  neg_report = "log";  break;
    case OP_SQRT: amg_type = sqrt_amg; neg_report = "sqrt"; break;
    }
```

### A heuristic approach to resolve the grammar's ambiguity

This is the best.

In Perl's grammar, `s/$numbers[1]/xxx/g;` would be parsed as either "embed `$numbers` here and then `[1]` as a set of chracters" or "embed `$numbers[1]` here". The interpreter uses a heuristic to decide that. The implementation is in [toke.c](https://github.com/Perl/perl5/blob/v5.33.0/toke.c#L4284);

```c
/* S_intuit_more
 * Returns TRUE if there's more to the expression (e.g., a subscript),
 * FALSE otherwise.
 *
 * It deals with "$foo[3]" and /$foo[3]/ and /$foo[0123456789$]+/
 *
 * ->[ and ->{ return TRUE
 * ->$* ->$#* ->@* ->@[ ->@{ return TRUE if postderef_qq is enabled
 * { and [ outside a pattern are always subscripts, so return TRUE
 * if we're outside a pattern and it's not { or [, then return FALSE
 * if we're in a pattern and the first char is a {
 *   {4,5} (any digits around the comma) returns FALSE
 * if we're in a pattern and the first char is a [
 *   [] returns FALSE
 *   [SOMETHING] has a funky algorithm to decide whether it's a
 *      character class or not.  It has to deal with things like
 *      /$foo[-3]/ and /$foo[$bar]/ as well as /$foo[$\d]+/
 * anything else returns TRUE
 */

/* This is the one truly awful dwimmer necessary to conflate C and sed. */

STATIC int
S_intuit_more(pTHX_ char *s, char *e)
{
    PERL_ARGS_ASSERT_INTUIT_MORE;

    if (PL_lex_brackets)
        return TRUE;
    if (*s == '-' && s[1] == '>' && (s[2] == '[' || s[2] == '{'))
        return TRUE;
    if (*s == '-' && s[1] == '>'
     && FEATURE_POSTDEREF_QQ_IS_ENABLED
     && ( (s[2] == '$' && (s[3] == '*' || (s[3] == '#' && s[4] == '*')))
        ||(s[2] == '@' && memCHRs("*[{",s[3])) ))
        return TRUE;
    if (*s != '{' && *s != '[')
        return FALSE;
    PL_parser->sub_no_recover = TRUE;
    if (!PL_lex_inpat)
        return TRUE;
```

The whole function is ~130 lines long. Perl is great.