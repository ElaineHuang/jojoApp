import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { toggleLoading } from 'reducers/ui';
import { GET_USER, getUserSuccess } from 'reducers/users';
import API from 'utils/api';

export function* getUser (action) {
  yield put(toggleLoading(true));
  yield call(delay, 500);
  try {
    const payload = yield call(API.getData, 'http://localhost:3000/api/v1/users');
    yield put(getUserSuccess(payload));
  } catch (e) {
    console.log(e);
  }
  yield put(toggleLoading());
}

export function* watchGetUser () {
  yield takeLatest(GET_USER, getUser);
}
