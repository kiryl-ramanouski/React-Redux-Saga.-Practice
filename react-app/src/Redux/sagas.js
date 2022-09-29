import { takeEvery, put, call } from 'redux-saga/effects';
import { showLoader } from './actions';
import { hideLoader } from './actions';
import { REQUEST_POSTS } from './types';
import { FETCH_POSTS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchPosts);
  yield put({ type: FETCH_POSTS, payload });
  yield put(hideLoader());
}

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return await response.json();
}
