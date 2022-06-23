import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSpaces: [],
};

export const spaceSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    spacesFetched: (state, action) => {
      state.allSpaces = [...state.allSpaces, ...action.payload];
    },
  },
});

export const { spacesFetched } = spaceSlice.actions;

export default spaceSlice.reducer;
