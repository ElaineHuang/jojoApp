import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';

export const router = routerMiddleware(history);
export const saga   = createSagaMiddleware();
