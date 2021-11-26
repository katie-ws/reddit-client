import React, { useEffect } from 'react';
import './Subreddits.css';
import { getSubReddits, selectSubReddits } from './subRedditsSlice';
import { useSelector, useDispatch } from 'react-redux';
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
            <ul>
                {subReddits.map((subreddit) =>
                    <Subreddit
                        icon={subreddit.icon_img}
                        title={subreddit.display_name}
                    />
                )}
            </ul>
        </div>
    )
};