import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

export const getPostComments = createAsyncThunk(
    "postComments/getPostComments",
    async (permalink) => {
        const root = 'https://www.reddit.com'
        const data = await fetch(`${root}${permalink}.json`);
        const json = await data.json();
        return json[1].data.children.map((comment) => comment.data);
    }
);

export const commentsSlice = createSlice({
    name: 'postComments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getPostComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getPostComments.fulfilled]: (state, action) => {
            state.postComments = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getPostComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});



export const selectSubReddits = (state) => state.subReddits.subReddits;
export default subRedditsSlice.reducer;