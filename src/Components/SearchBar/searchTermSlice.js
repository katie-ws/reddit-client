import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: {searchTerm: ""},
    reducers: {
        addSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
      },
    }
  });

export const selectSearchTerm = (state) => state.searchTerm;
export const { addSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
