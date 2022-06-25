import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  mySpace: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.mySpace = action.payload.space;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.mySpace = action.payload.space;
    },
    storyPostSuccess: (state, action) => {
      state.mySpace.stories = [action.payload, ...state.mySpace.stories];
    },
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload;
      state.mySpace.stories = state.mySpace.stories.filter(
        (s) => s.id !== storyId
      );
    },
    spaceEdited: (state, action) => {
      state.mySpace = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  storyPostSuccess,
  storyDeleteSuccess,
  spaceEdited,
} = userSlice.actions;

export default userSlice.reducer;
