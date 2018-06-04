'use strict'

const path = require('path')

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  entry: [
    './browser.mjs'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'browser.js'
  },
  module: {
    rules: [
      {
        test: /.jsm$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
