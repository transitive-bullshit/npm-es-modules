'use strict'

const path = require('path')

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: [
    './module.mjs'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
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
