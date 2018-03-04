const webpack              = require('webpack');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const StylelintPlugin      = require('stylelint-webpack-plugin');
const path                 = require('path');
const paths                = require('./webpack.paths.js');

exports.environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});

// how to seperate 3rd-party lib code from our code
// https://github.com/webpack/webpack/issues/1315
// https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab#.t08fegesc
exports.commonsChunk = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest']
});

exports.extractText = (() => {
  const config = {
    filename:  '[name].css',
    allChunks: true,
  };
  if (process.env.NODE_ENV === 'production') {
    config.filename = '[name]-[chunkhash:6].css';
  }
  return new ExtractTextPlugin(config);
})();

exports.htmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html'
});

exports.stylelintPlugin      = new StylelintPlugin();
exports.hotModuleReplacement = new webpack.HotModuleReplacementPlugin();
exports.noEmitOnErrors       = new webpack.NoEmitOnErrorsPlugin();
