# SEIS Aspen User Guide

This repository contains both the [templated code](#source-files) and the [fully built site](#compiled-site) for CES's SEIS Aspen User Guide.

If you are trying to *view* the SEIS Aspen User Guide and somehow wound up here, please visit: https://ces-seis.github.io/aspen-user-guide/.

# Contributing to the guide

## Software requirements
The Guide is built using the following technologies:

- [GitHub Pages](https://docs.github.com/en/pages), a version-controlled simple web-hosting platform
- [Lume](https://lume.land/docs/overview/about-lume/), a static site generator
    - which depends on [Deno](https://deno.land/manual), a Typescript/Javascript environment to run the Lume code that builds the website files
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html), an HTML templating system
- [Markdown](https://commonmark.org/help/), a simplified HTML authoring system
- [Git](https://git-scm.com/doc), a version control platform

Of these, none of these need to be installed for the end-user to view the documentation. They merely need a functioning web browser and internet connection to visit the site. However, in order to contribute to the development of the site, there are two options: contributing content for the website and updating the website.

### Contributing content

In order to contribute content - that is, to simply write a help article or edit an existing one - you can use the interface provided by GitHub to create/edit Markdown files and then commit them for review. Please look at the [style guide](#markdown-primer-and-style-guide) and [source file layout](#source-files) to make sure your edits will fit the project. After being reviewed, someone can follow [the instructions below](#updating-the-website) to update the website and make the edits live for end users.

### Updating the website

Contributing content is only one half of the process to getting the changes posted online. In order for the changes to be reflected for end users, the website must be built. For now, this happens locally (meaning, on your own machine), and the [resulting website](#compiled-site) must be committed and pushed to GitHub before it will be displayed online.

To compile the website, you need

1. A functioning installation of [Deno](https://deno.land/manual/getting_started/installation)
2. A functioning installation of [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. A checked-out copy of the SEIS Aspen User Guide repository
   - `$ git clone https://github.com/ces-seis/aspen-user-guide.git`

Within the user guide repository, run the command `deno task build` to compile the website once. If all goes well, you'll see a list of urls created (and the files they came from), ending with a summary notice `Site built into ./docs`. The resulting repository can be pushed back to GitHub and the website should refresh within a couple minutes.

If you like to edit the source files of the website while seeing how they look in real-time, you can spin up a local webserver (that is, a webserver that doesn't use the internet, but creates a mock internet connection to share your website over) by running `deno task serve` from the checked out repository. The ongoing output of this program will note when files get recompiled. The website can be viewed by visiting https://localhost:3000.

## Source files
In order to author a help page, a [Markdown](#markdown-primer) file needs to be created somewhere inside the `src/` folder. Where you place the file and what you name it will affect the URL of the page it turns into. All of our page URLs start with `https://ces-seis.github.io/aspen-user-guide`, which we will call `<root>` in the examples below:

| Source file                  | URL on website               |
| ---------------------------- | ---------------------------- |
| `src/index.md`               | `<root>`                     |
| `src/somewhere.md`           | `<root>/somewhere`           |
| `src/somewhere/index.md`     | `<root>/somewhere`           |
| `src/somewhere/deep/down.md` | `<root>/somewhere/deep/down` |

Notice that `src/somewhere.md` and `src/somewhere/index.md` produce the end result! The rule here is to prefer `src/somewhere.md` when you are authoring a "leaf", that is, when there are no files nested inside `somewhere` and to prefer `src/somewhere/index.md` when you are authoring a "node", that is, when there are going to be other pages nested inside `somewhere`, such as `somewhere/deep/down`.

## Compiled site
If for some reason you need to view the generated HTML and assets, after Lume has processed it (using the command `deno task build` or `deno task serve`), browse the `docs/` folder. Remember, whatever is in `docs/` is what will get served as the website, so be careful making edits there and remember that any manual interventions on the `docs/` folder will be overwritten the next time someone compiles the site. The `docs/` folder, therefore, should really be viewed as a "read-only" location, barring some strange circumstantial need.

# Markdown primer and style guide
If you're unfamiliar with Markdown, it's a somewhat-simple way of writing formatting in plain text, which can then easily be converted into HTML for display on a website. You can find a [quick tutorial here](https://commonmark.org/help/). Check out the quick interactive tutorial, if you want. It's pretty neat! We do have a few house rules, however:

## Hyphens and dots for lists
Please use hyphens (`-`) instead of asterisks (`*`) when creating unordered (bulleted) lists

Please use dots (`1.`) instead of parentheses (`1)`) when creating ordered (numbered) lists

## Italics for "verbatim" (mentioning text)
When writing help instructions, we often mention text that we want users to pay attention to. For example:

> When you are done with your edits, please click *Save*

> If you've forgotten your password, click *I Forgot My Password* on the login screen

For this purpose, please use *`*italics*`*, not `"quotes"`

