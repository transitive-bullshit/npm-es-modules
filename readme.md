# npm-es-modules

> Breakdown of 7 different ways to use ES modules with npm today.

[![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

ES Modules are the future of JavaScript, but unlike many other es@next features that developers have raced to take advantage of mainly thanks to build tools like [babel](https://babeljs.io/), working with ES modules alongside of existing NPM modules is a lot harder to get started with.

The purpose of this tutorial is to provide a thorough set of examples for different ways you can approach writing ES modules, without losing interop with the vast library of mostly commonjs modules that exist on NPM today.

We'll start with a naive ES module in [step 1](1-naive) and work our way through a series of increasingly complex example approaches, all of which are intended to define the same, basic module.


## Goals

Every approach must satisfy the following requirements:

- generate a valid npm module
- support the same consistent functionality
- be usable from both node.js and browser environments
- import at least one existing commonjs module from npm
- import at least one es module source file locally
- include at least one unit test


## Functionality

The functionality of our example NPM module is a bit contrived, but it should touch on all the potential pain points, and trust me, there are *a lot* of them...

Every approach will define an NPM module with a single default export, `async getImageDimensions(input)`, that takes in an image and returns its `{ width, height }`.

To show how you can bundle modules with slightly different semantics for Node.js and the browser:
- the node version supports `input` as a `string` that can either be a local path, http url, or data url.
- the browser version supports `input` as a `string` URL or an `HTMLImageElement`.

Both versions return a `Promise` for `{ width: number, height: number }`.


## Approaches

<!-- 0. [commonjs](0-commonjs) - Old-school commonjs module using `module.exports` and `require` as a starting point. -->
1. [naive](1-naive) - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. [babel](2-babel) - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. [esm-rollup](3-esm-rollup) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. [rollup](5-rollup) - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. [webpack](6-webpack) - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.


## Related

- [esm](https://github.com/standard-things/esm) - Tomorrow's ECMAScript modules today!
- [babel](https://babeljs.io/) - A compiler for writing next generation JavaScript.
- [rollup](https://rollupjs.org/guide/en) - A module bundler for JavaScript.
- [webpack](https://webpack.js.org/) - A bundler for javascript and friends.
- [typescript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [systemjs](https://github.com/systemjs/systemjs) - Configurable module loader enabling dynamic ES module workflows in browsers and NodeJS.


## Related Tutorials

- [Native ES Modules in NodeJS: Status And Future Directions](https://medium.com/@giltayar/native-es-modules-in-nodejs-status-and-future-directions-part-i-ee5ea3001f71) - By [@giltayar](https://twitter.com/giltayar)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) - By [Lin Clark](https://code-cartoons.com/)
- [A Minimal Setup for Babel-based npm packages](http://2ality.com/2017/07/npm-packages-via-babel.html) - By [@rauschma](https://twitter.com/rauschma)
- [Tomorrow’s ES Modules Today!](https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c) - By [@jdalton](https://twitter.com/jdalton)


## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
