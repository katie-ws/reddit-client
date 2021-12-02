import React, { useEffect } from "react";
import "./Subreddits.css";
import { getSubReddits, selectSubReddits } from "./subRedditsSlice";
import { useSelector, useDispatch } from "react-redux";
// import { Subreddit } from "../Subreddit/Subreddit";
import { addSearchTerm } from "../SearchBar/searchTermSlice";

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
        {subReddits.map((subreddit) => (
          <li 
            key={subreddit.id}
            className="subreddit-list"
        >
            <button
              type="button"
              className="subreddit-button"
              onClick={() => dispatch(addSearchTerm(subreddit.url))}
              aria-label="subreddits"
            >
              <img
                className="iconImage"
                src={subreddit.icon_img}
                alt=""
                style={{ border: `3px solid ${subreddit.primary_color}` }}
                onError={(event) => (event.target.style.visibility = "hidden")}
              />
              <p className="subreddit-name">{subreddit.display_name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
