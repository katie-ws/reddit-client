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

    return (
        <div className="SearchBar">
            <input
                type='text'
                placeholder="Search Reddit"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type='submit'
                className="SearchButton"
                onClick={handleSubmit}
            >SEARCH</button>
        </div>
    )
};