import 'stylesheets/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store';
import Root from 'routers';

const render = (app) => {
  ReactDOM.render(
    app,
    document.getElementById('root')
  );
};

render(<Root store={store} />);

if (module.hot) {
  module.hot.accept();
}

