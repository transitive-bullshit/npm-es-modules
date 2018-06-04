# npm-es-modules-5-rollup

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules-5-rollup.svg)](https://www.npmjs.com/package/npm-es-modules-5-rollup) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This approach uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile Node.js and browser source files.

- Source files end in `.mjs`
- Supports all three targets `main` `module`, and `browser`
- All three targets are compiled via rollup, with Node.js and the browser having two separate configs
- This is our first module to support `node >= 4` (or whatever we specify in our babel-preset-env config) instead of `node >= 8`
- Source maps are generated along with the compiled targets

## Approaches

1. [naive](../1-naive) - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. [babel](../2-babel) - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. [esm-rollup](../3-esm-rollup) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](../4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. rollup - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. [webpack](../6-webpack) - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](../7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
