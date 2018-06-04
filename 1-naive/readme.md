# npm-es-modules-1-naive

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules-1-naive.svg)](https://www.npmjs.com/package/npm-es-modules-1-naive) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

In this approach, we use normal `.js` file extensions for es modules and no transpilation.

It is relatively simple and straightforward but breaks several of our module [goals](https://github.com/transitive-bullshit/npm-es-modules#goals):

- Not usable from node.js because its `main` field is an es module whereas it should be a commonjs file.
- Not usable from the browser via webpack or rollup because its `browser` field is an es module whereas it should be a commonjs file.
- The only advantage of this approach is its simplicity, and this may be good enough if you are just working on private modules.
- **Warning**: unless you are using strictly local or private modules, we strongly encourage you **not** to use this approach in practice. It is meant as an example of what not to do when transitioning from commonjs to ES modules, and if you publish a module publicly using this approach, the JavaScript Gods will find and shame you.
- Unfortunately AFAIK, there is really nothing built into the npm ecosystem which prevents you from publishing broken modules like this, although as ES modules gain popularity over the coming years, I believe this will be addressed.

## Approaches

1. naive - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. [babel](../2-babel) - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. [esm-rollup](../3-esm-rollup) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](../4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. [rollup](../5-rollup) - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. [webpack](../6-webpack) - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](../7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
