const webpack = require('webpack');
const path = require('path');
const plugins = require('./webpack.plugins.js');
const paths = require('./webpack.paths.js');
const loaders = require('./webpack.loaders.js');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'redux-form',
  'react-router', 'react-router-redux', 'redux-saga',
];

module.exports = {
  entry: {
    bundle: ['babel-polyfill', path.resolve(paths.src, 'index.js')],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(paths.root, 'build'),
    filename: '[name].[chunkhash].js',
    publicPath:    './',
  },
  module: {
    loaders: [
      loaders.eslint,
      loaders.js,
      loaders.image,
      loaders.extractCss,
    ],
  },
  resolve: {
    modules: [
      paths.root,
      'node_modules',
    ],
    alias: Object.assign({}, paths, {
      // fill in other customizations
    }),
    extensions: ['.js', '.jsx', '.json', 'scss', 'css'],
  },
  plugins: [
    plugins.environmentVariables,
    plugins.commonsChunk,
    plugins.htmlWebpack,
    plugins.stylelintPlugin,
    plugins.extractText,
  ]
};
