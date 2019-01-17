import React from 'react';


import logo from './logo.png';
import './SearchBar.css';


const SearchBar = () => {
    return (
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <img alt="instagram logo" src={logo} className="logo-image" />
        </div>
        <div>
          <input type="text" placeholder="Search"  />
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="far fa-compass"></i>
          </div>
          <div className="social">
            <i className="far fa-heart"></i>
          </div>
          <div className="social">
            <i className="far fa-user-circle"></i>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
