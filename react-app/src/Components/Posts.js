/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if (!posts.length) {
    return <p>We don't have any posts yet...</p>;
  }
  return posts.map((post, i) => <Post key={i} post={post} />);
};
