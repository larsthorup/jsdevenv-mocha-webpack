const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './test/karma-webpack.main.js'
  ],
  output: {
    path: path.resolve(process.cwd(), './output/test'),
    publicPath: '/',
    filename: 'karma-webpack.js'
  },
  module: {
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
  ],
  node: {
    fs: 'empty'
  },
};
