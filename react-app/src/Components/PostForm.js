import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../Redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
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

const mapDispatchToProps = { createPost };

export default connect(null, mapDispatchToProps)(PostForm);
