import { CREATE_POST } from './types';
import { FETCH_POSTS } from './types';
import { SHOW_LOADER } from './types';
import { HIDE_LOADER } from './types';

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const posts = await response.json();
    dispatch({ type: FETCH_POSTS, payload: posts });
    dispatch(hideLoader());
  };
};
