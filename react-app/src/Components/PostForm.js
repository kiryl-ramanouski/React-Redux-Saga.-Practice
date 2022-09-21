import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Post Form</h1>
        <form onSubmit={this.submitHandler}></form>
      </>
    );
  }
}
