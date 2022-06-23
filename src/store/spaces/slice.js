import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: [],
  spaceDetails: null,
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    spacesFetched: (state, action) => {
      state.allSpaces = [...action.payload];
    },
    spaceDetailsFetched: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { spacesFetched, spaceDetailsFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
