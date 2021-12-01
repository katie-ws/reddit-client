import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from './Components/Subreddits/subRedditsSlice';
import searchResultsReducer from './Components/SearchResults/SearchResultsSlice';
import searchTermReducer from './Components/SearchBar/searchTermSlice';
import commentsReducer from './Components/Comments/CommentsSlice';

export default configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: searchResultsReducer,
    searchTerm: searchTermReducer,
    comments: commentsReducer
  },
});
