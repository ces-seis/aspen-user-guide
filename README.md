# SEIS Aspen User Guide

This repository contains both the [templated code](#source-files) and the [fully built site](#compiled-site) for CES's SEIS Aspen User Guide.

If you are trying to *view* the SEIS Aspen User Guide and somehow wound up here, please visit: [https://ces-seis.github.io/aspen-user-guide/].

# Contributing to the guide

## Source files
In order to author a help page, a [Markdown](#markdown-primer) file needs to be created somewhere inside the `src/` folder. Where you place the file and what you name it will affect the URL of the page it turns into. All of our page URLs start with `https://ces-seis.github.io/aspen-user-guide`, which we will call `<root>` in the examples below:

| Source file                  | URL on website               |
| ---------------------------- | ---------------------------- |
| `src/index.md`               | `<root>`                     |
| `src/somewhere.md`           | `<root>/somewhere`           |
| `src/somewhere/index.md`     | `<root>/somewhere`           |
| `src/somewhere/deep/down.md` | `<root>/somewhere/deep/down` |

Notice that `src/somewhere.md` and `src/somewhere/index.md` produce the end result! The rule here is to prefer `src/somewhere.md` when you are authoring a "leaf", that is, when there are no files nested inside `somewhere` and to prefer `src/somewhere/index.md` when you are authoring a "node", that is, when there are going to be other pages nested inside `somewhere`, such as `somewhere/deeper`.

## Markdown primer and style guide
If you're unfamiliar with Markdown, it's a somewhat-simple way of writing formatting in plain text, which can then easily be converted into HTML for display on a website. You can find a [quick tutorial here](https://commonmark.org/help/). Check out the quick interactive tutorial, if you want. It's pretty neat! We do have a few house rules, however:

### Hyphens and dots for lists
Please use hyphens (`-`) instead of asterisks (`*`) when creating unordered (bulleted) lists

Please use dots (`1.`) instead of parentheses (`1)`) when creating ordered (numbered) lists

### Italics for "verbatim" (mentioning text)
When writing help instructions, we often mention text that we want users to pay attention to. For example:

> When you are done with your edits, please click *Save*

> If you've forgotten your password, click *I Forgot My Password* on the login screen

For this purpose, please use *`*italics*`*, not `"quotes"`

