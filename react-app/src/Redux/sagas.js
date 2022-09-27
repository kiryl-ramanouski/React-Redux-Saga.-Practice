import { takeEvery, put } from 'redux-saga';
import { showLoader } from './actions';
import { REQUEST_POSTS } from './types';

const fetcPosts = async () => {}

export const sagaWatcher = () => {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
};

