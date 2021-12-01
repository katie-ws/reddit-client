import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


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
            state.comments = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getPostComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});



export const selectComments = (state) => state.comments.comments;
export default commentsSlice.reducer;