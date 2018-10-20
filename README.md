# phrasebook (Experimental Branch)
Single page phrasebook sub-project, export/import on JSON, utf-8, ES6?7? +; locally run, magic

## What now?

We should totally move from my hacky late-night JS to something like Vue.js
which actually seems somewhat useful! -- [@chrysophylax](https://github.com/chrysophylax/ "github profile page")

## Typescript, Preact, and Webpack
* Typescript provides typing
* Preact provides UI virtual DOM frameworking
* Webpack provides build black magic

### Process to add these
See (this useful guide)[https://github.com/developit/zero-to-preact], using Babel.
Or (this one)[https://medium.com/@shakyShane/hello-world-with-preact-jsx-typescript-6d70cf2ebf01], using Typescript.
Or (this one too)[https://dominicstpierre.com/how-to-start-with-typescript-and-preact-a9ea3e0ba4dc], also using Typescript.

**The way I'm going about this:**
<!--
    If you're taking the Babel route:
    3. `npm install --save-dev babel-loader @babel/core` (~4MB)
    4. `npm install --save-dev @babel/preset-env @babel/plugin-transform-typescript`
-->

1. `npm init` (d'accord)

2. `npm i --save-dev webpack webpack-dev-server webpack-cli` (+ ~46MB)

3. `npm i --save-dev typescript preact webpack ts-loader` (+ ~43.5MB)

4. Pat yourself on the back for turning a 3-files-in-production prototype into a 100MB project, and your boilerplate will go from 3KB to 28KB (but, to be fair, we'll try and make good use of that 28KB!)

5. `npm i immutable` if you're feeling lucky - _don't use with (p)react, tsc can already infer types so just use setState() instead!_