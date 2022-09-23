import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/actions';
import { Loader } from './Loader';

import Post from './Post';

export const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

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
