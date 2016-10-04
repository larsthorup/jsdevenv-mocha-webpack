var webpack = require('webpack');

module.exports = {
  entry: [
    './test/karma-webpack.main.js'
  ],
  output: {
    path: './output/test',
    publicPath: '/',
    filename: 'karma-webpack.js'
  },
  module: {
    loaders: [
    ]
  },
  devtool: 'source-map',
  plugins: [
  ],
  node: {
    fs: 'empty'
  },
};
