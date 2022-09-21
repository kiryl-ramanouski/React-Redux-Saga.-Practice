/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Post from './Post';

export default ({ posts }) => {
  if (!posts.length) {
    return <button className="btn btn-primary">Download</button>;
  }
  return posts.map((post, i) => <Post key={i} post={post} />);
};
