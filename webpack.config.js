var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
      "presets": [
        "es2015",
        "react",
        "stage-0"
      ],
      "plugins": []
    }
  },
  { 
    test: /\.(png|jpg)$/, 
    loader: 'url-loader?limit=8192'
  } // inline base64 URLs for <=8k images, direct URLs for the rest

];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'App.js'),
  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: loaders
  }
};
