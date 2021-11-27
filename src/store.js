import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from './Components/Subreddits/subRedditsSlice';
import searchResultsReducer from './Components/SearchResults/SearchResultsSlice';
import searchTermReducer from './Components/SearchBar/searchTermSlice';

export default configureStore({
  reducer: {
    subReddits: subRedditsReducer,
    posts: searchResultsReducer,
    searchTerm: searchTermReducer
  },
});
