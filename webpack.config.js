var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: './output/build',
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  module: {
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin('output/build'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      deps: {
      }
    })
  ].concat(process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []),
  devServer: {
    contentBase: './output/build'
  }
};
