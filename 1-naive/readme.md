# npm-es-modules-1-naive

> Breakdown of 7 different ways to use ES modules with npm today.

[![NPM](https://img.shields.io/npm/v/npm-es-modules.svg)](https://www.npmjs.com/package/npm-es-modules) [![Build Status](https://travis-ci.com/transitive-bullshit/npm-es-modules.svg?branch=master)](https://travis-ci.com/transitive-bullshit/npm-es-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

In this module, we use normal `.js` file extensions for es modules and no transpilation.

It is relatively simple and straightforward but breaks several of our module [goals](https://github.com/transitive-bullshit/npm-es-modules#goals):

- This module is not usable from normal node.js because its `main` field points to an es module file whereas it should point to a commonjs file.
- This module is not usable from the browser via webpack or rollup because its `browser` field points to an es module file whereas it should point to a commonjs file.
- The only advantage of this approach is its simplicity, and this may be good enough if you are just working on private modules.
- **Warning**: unless you are using strictly local or private modules, we strongly encourage you **not** to use this approach in practice. It is meant as an example of what not to do when transitioning from commonjs to ES modules, and if you publish a module publicly using this approach, the JavaScript Gods will find and shame you.
- Unfortunately AFAIK, there is really nothing built into the npm ecosystem which prevents you from publishing broken modules like this, although as ES modules gain popularity over the coming years, I believe this will be addressed.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
