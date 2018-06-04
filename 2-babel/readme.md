# npm-es-modules-2-babel

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules-2-babel.svg)](https://www.npmjs.com/package/npm-es-modules-2-babel) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This approach uses [babel](https://babeljs.io/) with [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/) to transpile all Node.js and browser source files into `dist/`. It is relatively simple, with `package.json` properly supporting all three `main`, `module`, and `browser` fields.

- Source files end in `.mjs`
- Babel transpiles all source files to commonjs
- Tests are run on the transpiled source, which could make debugging slightly harder
- Currently, our `main` and `browser` are commonjs exports that support `node >= 4` (or whatever we specify in our babel-preset-env config), whereas the `module` export is an es module that supports `node >=8` due to its usage of `async await`.
- Unfortunately AFAIK, package.json `engines` doesn't support specifying that `main` supports a certain node version whereas `module` supports a different module version, and I'd go so far as to say this is a bad practice.
- To get around this, we could specify the minimum node version to be `node >= 8` like we did here or add a second babel step which transpiles the node version to an esm folder, although I find this somewhat clunky.

## Approaches

1. [naive](../1-naive) - The most naive possible use of ES modules supporting our functionality. This approach is *broken* and provided as an example starting point.
2. babel - Uses [babel](https://babeljs.io/) to transpile all Node.js and browser source files.
3. [esm-rollup](../3-esm-rollup) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile browser source files.
4. [esm-webpack](../4-esm-webpack) - Uses [esm](https://github.com/standard-things/esm) for Node.js and [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile browser source files.
5. [rollup](../5-rollup) - Uses [babel](https://babeljs.io/)+[rollup](https://rollupjs.org/guide/en) to compile all Node.js and browser source files.
6. [webpack](../6-webpack) - Uses [babel](https://babeljs.io/)+[webpack](https://webpack.js.org/) to compile all Node.js and browser source files.
7. [typescript](../7-typescript) - Uses [typescript](https://www.typescriptlang.org/) to transpile all Node.js and browser source files.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
