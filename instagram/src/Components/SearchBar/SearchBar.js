import React from 'react';


import logo from './app-icon2.png';
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
            <i className="fas fa-compass"></i>
          </div>
          <div className="social">
            <i className="fas fa-heart"></i>
          </div>
          <div className="social">
            <i classNape="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
