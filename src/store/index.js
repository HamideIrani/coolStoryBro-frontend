import { configureStore } from "@reduxjs/toolkit";
import spacesReducer from "./spaces/slice";
import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    spaces: spacesReducer,
  },
});
