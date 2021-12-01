import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularPosts = createAsyncThunk(
    "redditPosts/getRedditPosts",
    async (searchTerm = '', thunkAPI) => {
        const coreAPI = "https://www.reddit.com/";
        if (searchTerm === '') {
            searchTerm = "r/popular";
        };
        const url = `${coreAPI}${searchTerm}.json`;
        const data = await fetch(url);
        const json = await data.json();
        return json.data.children.map((post) => post.data);
    }
);

export const searchResultsSlice = createSlice({
    name: 'subredditPosts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false,
        showComments: false
    },
    reducers: {
        toggleShowComments: (state, action) => {
            state.showComments = !state.showComments;
        }
    },
    extraReducers: {
        [getPopularPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getPopularPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getPopularPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.posts.posts;
export const selectShowComments = (state) => state.posts.showComments;
export const {toggleShowComments} = searchResultsSlice.actions;
export default searchResultsSlice.reducer;