import React from "react";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage
} from 'react-icons/ti';
import './Post.css';
 
export const Post = (props) => {
    return (
        <ul>
            <li className="reddit-post">
                <TiArrowUpOutline />
                {props.upvotes}
                <TiArrowDownOutline />
                <h3 className="post-title">{props.title}</h3>
                <img src={props.image} />
                <p className="post-author">{props.author}</p>
                <TiMessage />
                {props.num_comments}
            </li>
        </ul>
    )
}