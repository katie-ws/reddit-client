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
    
    // console.log(subReddits);
    // console.log(subReddits[0].url);

    return (
        <div className="Subreddits">
            <h2>Subreddits</h2>
            <ul>
                {subReddits.map((subreddit, index) =>
                    <Subreddit
                        icon={subreddit.icon_img}
                        altimg={subreddit.header_img}
                        title={subreddit.display_name}
                        index={index}
                        url={subreddit.url}
                        color={subreddit.primary_color}
                    />
                )}
            </ul>
        </div>
    )
};