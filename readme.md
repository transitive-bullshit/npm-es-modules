# npm-es-modules

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules.svg)](https://www.npmjs.com/package/npm-es-modules) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Goals

Every approach must satisfy the following requirements:

- generate a valid npm module
- support the same consistent functionality
- be usable from both node.js and browser environments
- import at least one existing commonjs module from npm
- import at least one es module source file locally
- include at least one unit test

The functionality of our example NPM module is contrived, but it should be enough to illustrate all common usage scenarios.

Namely, every approach will export an NPM module that takes in an image and returns its `{ width, height }`.

To show how you can bundle modules with slightly different semantics for Node.js and the browser:
- the node version supports `input` as a `string` that can either be a local path, http url, or data url.
- the browser version supports `input` as a `string` URL or an `HTMLImageElement`.

Both versions return a `Promise` for an `Object` containing `width` and `height` properties.

## Approaches

1. [naive](1-naive) -

## Related

- [esm](https://github.com/standard-things/esm) - Tomorrow's ECMAScript modules today!

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
