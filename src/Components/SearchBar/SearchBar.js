import React, { useState } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { addSearchTerm } from './searchTermSlice';


export const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        let addR = `/r/${searchTerm}`;
        dispatch(addSearchTerm(addR));
        setSearchTerm('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);  
    }

    return (
      <div className="SearchBar">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Reddit"
            value={searchTerm}
            onChange={handleChange}
            aria-label="Search bar"
          />
          <button 
            type="submit" 
            className="SearchButton" 
            onClick={handleSubmit}
            aria-label="Search button"
          >
            SEARCH
          </button>
        </form>
      </div>
    );
};