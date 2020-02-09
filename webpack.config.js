const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(process.cwd(), './output/build'),
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  module: {
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
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
