import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchResults.css';
import { getPopularPosts, selectPosts } from './SearchResultsSlice';
import { Post } from '../Post/Post';

export const SearchResults = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularPosts());
    }, [dispatch]);

    const posts = useSelector(selectPosts);

    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <ul>
                {posts.map((thread) => 
                    <Post 
                        title={thread.title}
                        upvotes={thread.ups}
                        image={thread.url}
                        author={thread.author}
                        num_comments={thread.num_comments}
                    />
                )}
            </ul>
        </div>
    )
};