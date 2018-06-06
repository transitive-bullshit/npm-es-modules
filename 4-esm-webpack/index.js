'use strict'

// Set options as a parameter, environment variable, or rc file.
require = require('esm')(module/*, options */) // eslint-disable-line
module.exports = require('./main.js').default
