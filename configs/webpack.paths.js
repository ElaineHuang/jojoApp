const path = require('path');

const root   = path.resolve(__dirname, '..');
const src    = path.resolve(root, 'src');
const assets = path.resolve(src, 'assets');

module.exports = {
  root,
  src,
  'store':       path.resolve(src, 'store'),
  'routers':     path.resolve(src, 'routers'),
  'components':  path.resolve(src, 'components'),
  'constants':   path.resolve(src, 'constants'),
  'utils':       path.resolve(src, 'utils'),
  'reducers':    path.resolve(src, 'reducers'),
  'containers':  path.resolve(src, 'containers'),
  'sagas':       path.resolve(src, 'sagas'),
  'stylesheets': path.resolve(src, 'stylesheets'),
  assets,
};
