import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage';
import authenticate from './Components/Authentication/authenticate';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      filteredPost: []
    };
  }

componentDidMount() {
  this.setState({ post: dummyData})
};

searchPostsHandler = e => {
  const posts = this.state.post.filter(p => {
    if (p.username.includes(e.target.value)) {
      return p;
    }
  });
}

  render() {
    return (
      <div className="App">
        <PostsPage />
        
      </div>
    );
  }
}



export default authenticate(App);
