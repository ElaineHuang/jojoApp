import { fork, all } from 'redux-saga/effects';
import { watchGetUser } from './getApi';

export default function *rootSaga () {
  yield all([
    fork(watchGetUser),
  ]);
}
