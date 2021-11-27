import React from 'react';
import './Subreddit.css';

/*const clickResponse = (e) => {
    e.preventDefault();
    // const urlSegment = e.target.id;
    console.log(e.target.key);
};*/

export const Subreddit = (props) => {
    return (
        <li key={props.index}>
          <button
            type="button"
            className="subreddit-button"
            onClick={() => console.log(props.url)}
            key={props.index}
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