import { takeEvery, put } from 'redux-saga/effects';
import { showLoader } from './actions';
import { REQUEST_POSTS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}
function* sagaWorker() {
  yield put(showLoader());
}

async function fetcPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const posts = await response.json();
}
