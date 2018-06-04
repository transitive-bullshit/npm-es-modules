# npm-es-modules-3-esm-rollup

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules-3-esm-rollup.svg)](https://www.npmjs.com/package/npm-es-modules-3-esm-rollup) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This approach uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.

Some notes:
- Source files end in `.mjs`
  - One exception is the commonjs entrypoint, `main.js`.
- Supports all three targets `main` `module`, and `browser`
- The only target that is compiled is `browser`, making debugging the Node.js version easier

## Approaches

1. [naive](../1-naive) - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. [babel](../2-babel) - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. esm-rollup - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](../4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. [rollup](../5-rollup) - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. [webpack](../6-webpack) - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](../7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
