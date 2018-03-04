const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.eslint = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  'eslint-loader',
  enforce: 'pre',
};

exports.js = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  'babel-loader',
  query:   {},
};

exports.image = {
  test: /.(jpeg|jpg|png|gif|svg)$/,
  loaders: [
    {
      loader: 'url-loader',
      query: {
        limit: 10000,
        name:  '[name]-[hash:6].[ext]',
      },
    },
  ],
};

exports.css = {
  test:    /\.(css|scss|sass)$/,
  loaders: [
    {
      loader: 'style-loader',
      query: {
        sourceMap: true,
      },
    },
    {
      loader: 'css-loader',
      query: {
        modules:        true,
        sourceMap:      true,
        localIdentName: '[name]-[local]-[hash:6]',
      },
    },
    {
      loader: 'postcss-loader',
      query: {
        sourceMap: true,
      },
    },
  ],
};

exports.extractCss = {
  test:   /\.(css|scss|sass)$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:6]',
          discardComments: {removeAll: true},
        },
      },
      'postcss-loader',
    ],
  }),
};
