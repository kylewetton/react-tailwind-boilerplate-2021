# React Tailwind Boilerplate
###  2021 EDITION

---

I've tested many different ways of using Tailwind in a React project and I've come up with what I believe is the best. This keeps your JSX/markup clean of utility classes, while using the full Tailwind library.

As a bonus, this includes the latest 'just-in-time' version of Tailwind, meaning the compile times are very fast.

## Stack
- React
- Typescript
- Tailwind CSS with just-in-time compiling
- Storybook
- Redux Toolkit
- Jest

### Bonus
I've included a `/templates` folder. These files will look strange but they're used by a custom vscode extension I created called **Boxed  Components** I _highly_ recommend you include when building from this boilerplate.

Essentially you're able create new components (or anything really) that are instantly foldered, linked up, exported and have a Storybook intance included in them with one click. Very useful for building out many components.

Search for `Boxed Components` by `kylewetton` in the VS Code Marketplace, extension ID is `kylewetton.boxed-components`.

If you'd prefer not to use this extension, feel free to delete the `/templates` folder.

## How to use

---
### Install **Tailwind CSS IntelliSense**  VS Code extension by Brad Cornes, this adds autocomplete for all Tailwind classes

---

Just check out the package.json to see the available scripts. Follow the example component to see how to leverage Tailwind.

PS. Craco is a package that lets us use PostCSS in a Create React App installation, in case you were wondering.