import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
          {
            dummyData.map(data => {
              return <PostContainer key={data.id} data={data} />
            })
          }
      </div>
    );
  }
}

export default App;
