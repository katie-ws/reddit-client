import React from "react";
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  TiMessage,
} from "react-icons/ti";
import moment from "moment";
import Skeleton from 'react-loading-skeleton';
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostComments,
  selectCommentsLoading,
  selectComments,
  selectCommentButtonId,
  addCommentButtonId,
  clearComments
} from "../Comments/CommentsSlice";
import {
  toggleShowComments,
  selectShowComments,
} from "../SearchResults/SearchResultsSlice";

export const Post = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const showComments = useSelector(selectShowComments);
  const loadComments = useSelector(selectCommentsLoading);
  const commentId = useSelector(selectCommentButtonId);

  const displayComments = () => {
    if (loadComments && showComments && commentId === props.title) {
      return (
        <div className="loading">
          <Skeleton />
          <p className="loadingP">Loading Comments....</p>
          <Skeleton />
        </div>
      )
    };
        
    if (comments[0] && showComments) {
      if (props.name === comments[comments.length - 1].parent_id) {
        return (
          <>
            {comments.map((comment, index) => {
              if (index < 5) {
                return (
                    <div className="commentContainer" key={index}>
                        <p className="commentAuthor">{comment.author}</p>
                        <p className="commentBody">{comment.body}</p>
                    </div>
                );
              }
                return <> </>;
            })}
          </>
        )
      }
    }
  };

  const handleClick = (e) => {
    dispatch(toggleShowComments());
    dispatch(clearComments());
    if (!showComments)
    {
      dispatch(getPostComments(props.permalink));
      dispatch(addCommentButtonId(e.currentTarget.id));
    }
  };



  return (
    <div className="reddit-post" key={props.ind}>
        <div className="upvotes-container">
            <TiArrowUpOutline className="upbutton" />
            {props.upvotes}
            <TiArrowDownOutline className="downbutton" />
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
                className="comments-button"
                id={props.title}
              >
                <TiMessage className="message-icon" />
                {props.num_comments}
                </button>
            </span>
            </span>
            <div className="comment-container">{displayComments()}</div>
        </div>
    </div>
  );
};