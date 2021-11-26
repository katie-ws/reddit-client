import React from 'react';
import './Subreddits.css';
import { getSubReddits } from './subRedditsSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubReddits } from './subRedditsSlice';

import {Subreddit} from '../Subreddit/Subreddit';

export const Subreddits = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubReddits());
    }, [dispatch]);

    const subReddits = useSelector(selectSubReddits);
    
    console.log(subReddits);
    return (
        <div className="Subreddits">
            <h2>Subreddits</h2>  
            <Subreddit />
        </div>
    )
};