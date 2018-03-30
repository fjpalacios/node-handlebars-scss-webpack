'use strict';

const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'assets'),
  entry: [
    './scss/main.scss',
    './js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'main.min.css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
    ]
  },
  plugins: [
    new MinifyPlugin()
  ]
};
