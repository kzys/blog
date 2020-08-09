---
title: "Writing a parser with nom"
date: 2020-08-08T21:02:57-07:00
tags: ["100DaysToOffload", "Rust"]
---
I'm writing a small parser in Rust, with [nom](https://github.com/Geal/nom), a parser combinators library.

If you have heard about nom, you might know nom is using macros heavily. It *was*, but not anymore [since 5.0.0](https://github.com/Geal/nom/blob/master/CHANGELOG.md).

> This version comes with a complete rewrite of nom internals to use functions as a base for parsers, instead of macros. Macros have been updated to use functions under the hood, so that most existing parsers will work directly or require minimal changes.

Writing a parser in nom reminds me [boost::xpressive](https://www.boost.org/doc/libs/1_73_0/doc/html/xpressive/user_s_guide.html#boost_xpressive.user_s_guide.creating_a_regex_object.static_regexes.static_xpressive_syntax_cheat_sheet). It feels like writing a regexp with functions.

```rust
fn parse_literal<'a>(input: &'a str) -> IResult<&'a str, Literal, VerboseError<&'a str>> {
    alt((
        map_res(digit1, |s: &str| s.parse::<i32>().map(Literal::Number)),
        map(
            preceded(
                char('\"'),
                terminated(escaped(none_of("\\\""), '\\', one_of("\"n\\")), char('\"')),
            ),
            |s: &str| Literal::String(s.to_string()),
        ),
    ))(input)
}
```

For me, writing a parser in nom starts from thinking about its abstract syntax tree, often with a lot of enums. Then I write all small parsers like the function above.