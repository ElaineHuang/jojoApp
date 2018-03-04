import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import immatureHistory from './history';
import {
  router,
  saga,
} from './middlewares';

const middlewareEnhancer = (() => {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(saga, router));
  }
  return applyMiddleware(saga, router);
})();

const store = createStore(rootReducer, middlewareEnhancer);
const history = syncHistoryWithStore(immatureHistory, store);

saga.run(rootSaga);

export {
  store,
  history,
};
