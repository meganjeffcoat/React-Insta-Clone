import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage';
import authenticate from './Components/Authentication/authenticate';
import LoginPage from './Components/Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticate(PostsPage)(LoginPage);

export default App;