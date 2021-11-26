import React from 'react';
import './Subreddits.css';
import {Subreddit} from '../Subreddit/Subreddit';

export const Subreddits = () => {

    return (
        <div className="Subreddits">
            <h2>Subreddits</h2>  
            <Subreddit />
        </div>
    )
};