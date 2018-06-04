# npm-es-modules-6-webpack

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules-6-webpack.svg)](https://www.npmjs.com/package/npm-es-modules-6-webpack) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**WARNING**: this approach is currently a broken WIP, and its exports do not behave correctly. All other approaches work as intended.

This approach uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.

- Source files end in `.mjs`
- Supports all three targets `main`, `module`, and `browser`
- Unfortunately, **Webpack does not support outputting ES module targets** ([issue](https://github.com/webpack/webpack/issues/2933)).
- The `main` and `browser` targets are compiled, but the `module` target is unable to be compiled.
- Supports `node >= 8`, whereas the [rollup](../5-rollup) version is capable of supporting `node >= 4` by compiling the `module` target as well.
- Unless you have a good project-specific reason to use webpack over rollup, I would strongly recommend using rollup to bundle ES6 module libraries (at least until this webpack issue is addressed).

## Approaches

1. [naive](../1-naive) - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. [babel](../2-babel) - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. [esm-rollup](../3-esm-rollup) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](../4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. [rollup](../5-rollup) - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. webpack - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](../7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
