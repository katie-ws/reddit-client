import React from 'react';
import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input 
                placeholder="Search Reddit"
            />
            <button
                className="SearchButton"
            >SEARCH</button>
        </div>
    )
};