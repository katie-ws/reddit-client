import React from 'react';
import './Subreddit.css';

const clickResponse = (e) => {
    e.preventDefault();

};

export const Subreddit = (props) => {
    return (
        <ul>
            <button 
                className="subreddit-button"
                onClick={clickResponse}
            >
                <li>
                    <img className="iconImage" src={props.icon} />
                    {props.title}
                </li>
            </button>
        </ul>
    )
};