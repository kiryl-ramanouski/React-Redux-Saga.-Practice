import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p>We don't have any posts yet...</p>;
  }
  return syncPosts.map((post, i) => <Post key={i} post={post} />);
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
