import React from "react";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage
} from 'react-icons/ti';
import moment from 'moment';
import './Post.css';
import { useDispatch, useSelector } from "react-redux";
import { getPostComments } from "../Comments/CommentsSlice";
import { selectComments } from "../Comments/CommentsSlice";
import { toggleShowComments, selectShowComments } from "../SearchResults/SearchResultsSlice";

 
export const Post = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const showComments = useSelector(selectShowComments);

    const displayComments = () => {
        if (comments[0] && showComments) {
            if (props.name === comments[comments.length - 1].parent_id) {
                return (
                    <ul>
                        {comments.map((comment, index) => {
                            if (index < 5) 
                            return (
                                <li>
                                    <p>{comment.author}</p>
                                    <p>{comment.body}</p>
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        }
    };
    
    // }

    const handleClick = () => {
        
        dispatch(getPostComments(props.permalink));
        dispatch(toggleShowComments());
    }

     return (
        <ul>
            <li className="reddit-post">
                <div className="upvotes-container">
                    <TiArrowUpOutline />
                    {props.upvotes}
                    <TiArrowDownOutline />
                </div>
                <div className="post-container">
                    <h3 className="post-title">{props.title}</h3>
                    <div className="image-container">
                        <img src={props.image} alt="" />
                    </div>
                    <span className="post-details-container"> 
                        <span className="post-details">
                            <p className="post-author">{props.author}</p>
                            <p>{moment.unix(props.time).fromNow()}</p>
                            <button
                                type="button"
                                aria-label="Show comments"
                                onClick={handleClick}
                            >
                                <TiMessage />
                                {props.num_comments}
                                
                            </button>
                        </span>
                    </span>
                     <p>{displayComments()}</p>
                    {/* <p>{comments[0].body}</p> */}
                </div>
                
            </li>
        </ul>
    )
}