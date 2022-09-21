import React from 'react';
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
        <div className="col">POSTS</div>
        <div className="col">FETCHED POST</div>
      </div>
    </div>
  );
}

export default App;
