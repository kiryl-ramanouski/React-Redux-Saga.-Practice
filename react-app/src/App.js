import React from 'react';

// Components
import { FetchedPosts } from './Components/FetchedPosts';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Synchronized posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Unsynchronized posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
