import { CREATE_POST } from './types';
import { FETCH_POSTS } from './types';

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const json = await response.json();
    return dispatch({ type: FETCH_POSTS, payload: json });
  };

  // Is it also correct way to get posts or not?
  // const response = async () =>
  //   await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  // const posts = response.json();
  // return {
  //   type: FETCH_POSTS,
  //   payload: posts,
  // };
};
