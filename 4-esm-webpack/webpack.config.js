import { join } from 'path'

export default {
  target: 'web',
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: [
    './browser.js'
  ],
  output: {
    path: join(__dirname, 'dist'),
    filename: 'browser.js',
    libraryTarget: 'commonjs2'
  }
}
