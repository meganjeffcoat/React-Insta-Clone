import React from 'react';
import logo from './logo.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchbar-wrapper'>
            <div className='nav img-logo'>
                <img src={logo} alt='insta-logo' />
            </div>
            <div className='nav'>
                <button>
                    <i className='search'></i>
                    search
                </button>
            </div>
            <div className="nav-icons">
                <div className='icons'>
                    <i className='fa fa-compass'></i>
                </div>
                <div className='icons'>
                    <i className='fa fa-heart'></i>
                </div>
                <div className='icons'>
                    <i className='fa fa-user'></i>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;