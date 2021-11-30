import React from 'react';
import './Subreddit.css';
import { useDispatch } from 'react-redux';
import { addSearchTerm } from '../SearchBar/searchTermSlice';

export const Subreddit = (props) => {
  const dispatch = useDispatch;
  const subRedditURL = props.url;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addSearchTerm('r/sheep'))
  };

    return (
        <li>
          <button
          type="button"
          className="subreddit-button"
          onClick={handleClick} 
          >
            <img 
                className="iconImage" 
                src={props.icon} 
                alt=""
                style={{ border: `3px solid ${props.color}` }}
                onError={(event) => event.target.style.visibility = 'hidden'}
                // onError={(event) => event.target.src = {props.altimg}}
            />
            <p>{props.title}</p>
          </button>
        </li>
    );
};