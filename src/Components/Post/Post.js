import React from "react";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage
} from 'react-icons/ti';
import moment from 'moment';
import './Post.css';
 
export const Post = (props) => {
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
                            <span>
                                <TiMessage />
                                {props.num_comments}
                            </span>
                        </span>
                    </span>
                </div>
                
            </li>
        </ul>
    )
}