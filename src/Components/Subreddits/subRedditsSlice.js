import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSubReddits = createAsyncThunk(
    "subReddits/getSubReddits",
    async () => {
        const data = await fetch("https://www.reddit.com/subreddits/popular.json");
        const json = await data.json();
        console.log(json);
        return json.data.children.map((subReddit) => subReddit.data);
    }
);

export const subRedditsSlice = createSlice({
    name: 'subReddits',
    initialState: {
        subReddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [getSubReddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getSubReddits.fulfilled]: (state, action) => {
            state.subReddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [getSubReddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
    });

export const selectSubReddits = (state) => state.subReddits.subReddits;
export default subRedditsSlice.reducer;