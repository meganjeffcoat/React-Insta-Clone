import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';
import SearchBar from './Components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    )
  }
}

export default App;
