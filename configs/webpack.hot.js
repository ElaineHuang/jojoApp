const loaders = require('./webpack.loaders.js');
const plugins = require('./webpack.plugins.js');
const ip      = require('ip');
const serverConfig = require('./server-config.js');
const path = require('path');
const paths = require('./webpack.paths.js');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: [`webpack-dev-server/client?${serverConfig.devServerAddress}`, 'webpack/hot/only-dev-server', 'babel-polyfill', path.resolve(paths.src, 'index.js')],
  },
  output: {
    // for resolving css/sass-loader with source map breaks url-loader
    // https://github.com/webpack/css-loader/issues/232
    publicPath: `${serverConfig.devServerAddress}/`,
  },
  module: {
    loaders: [
      loaders.eslint,
      loaders.js,
      loaders.image,
      loaders.css,
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
    plugins.htmlWebpack,
    plugins.hotModuleReplacement,
    plugins.noEmitOnErrors,
    plugins.stylelintPlugin,
  ],
};
