import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SearchResults.css';
import { getPopularPosts, selectPosts } from './SearchResultsSlice';
import { Post } from '../Post/Post';
import { selectSearchTerm } from '../SearchBar/searchTermSlice';

export const SearchResults = () => {

    const dispatch = useDispatch();
    const { searchTerm } = useSelector(selectSearchTerm);
    
    useEffect(() => {
        dispatch(getPopularPosts(searchTerm));
    }, [dispatch, searchTerm]);

    const posts = useSelector(selectPosts);

    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            
                {posts.map((thread, index) => 
                    <Post 
                        title={thread.title}
                        upvotes={thread.ups}
                        image={thread.url}
                        author={thread.author}
                        time={thread.created_utc}
                        num_comments={thread.num_comments}
                        ind={index}
                        permalink={thread.permalink}
                        name={thread.name}
                        key={thread.title}
                    />
                )}
        
        </div>
    )
};