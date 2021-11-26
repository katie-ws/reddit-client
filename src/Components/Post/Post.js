import React from "react";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage
} from 'react-icons/ti';
 
export const Post = (props) => {
    return (
        <ul>
            <li>
                <TiArrowUpOutline />
                {props.upvotes}
                <TiArrowDownOutline />
                {props.title}
                <img src={props.image} />
                {props.author}
                <TiMessage />
                {props.num_comments}
            </li>
        </ul>
    )
}