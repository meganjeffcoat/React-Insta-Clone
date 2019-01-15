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
        <nav className='container'>
          <SearchBar />
        </nav>
        <div className='body-wrapper'>
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App;
