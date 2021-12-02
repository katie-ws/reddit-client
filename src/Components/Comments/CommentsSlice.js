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
        hasError: false,
        commentButtonId: ''
    },
    reducers: {
        addCommentButtonId: (state, action) => {
            state.commentButtonId = action.payload;
        },
        clearComments: (state, action) => {
            state.comments = [];
        }
    },
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


export const selectCommentsLoading = (state) => state.comments.isLoading;
export const selectComments = (state) => state.comments.comments;
export const selectCommentButtonId = (state) => state.comments.commentButtonId;
export const { addCommentButtonId, clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;