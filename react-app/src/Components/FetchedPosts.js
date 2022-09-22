import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/actions';

import Post from './Post';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);

  if (!posts.length) {
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className="btn btn-primary"
      >
        Download
      </button>
    );
  }
  return posts.map((post) => <Post key={post.id} title={post.title} />);
};
