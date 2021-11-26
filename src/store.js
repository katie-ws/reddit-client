import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from './Components/Subreddits/subRedditsSlice';

export default configureStore({
  reducer: {
    subReddits: subRedditsReducer,
  },
});
