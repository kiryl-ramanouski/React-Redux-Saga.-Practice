import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    console.log(newPost);
    this.setState({ title: '' });
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    );
  }
}
