import React from 'react';
import logo from './app-icon2.png';

const SearchBar = () => {
    return (
        <div>SearchBar</div>
        <div className='searchbar-wrapper'>
            <div className='nav img-logo'>
                <img src={logo} alt='insta-logo' />
                <h1>Instagram</h1>
            </div>
            <div className='nav'>
                <button>
                    <i className='search'></i>
                    search
                </button>
            </div>
            <div className="nav-icons">
                <div className='icons'>
                    <i className='compass'></i>
                </div>
                <div className='icons'>
                    <i className='heart'></i>
                </div>
                <div className='icons'>
                    <i className='user'></i>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;