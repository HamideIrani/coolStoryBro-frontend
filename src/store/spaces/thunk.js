import axios from "axios";
import { spacesFetched, spaceDetailsFetched } from "./slice";

const API_URL = "http://localhost:4000";

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState().spaces.allSpaces;
      console.log("what is getState", state);
      const response = await axios.get(`${API_URL}/spaces`);
      console.log("what do i have in the response? ", response.data);
      dispatch(spacesFetched(response.data.rows));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${API_URL}/spaces/${id}`);
      console.log(response);
      dispatch(spaceDetailsFetched(response.data.space));
    } catch (e) {
      console.log(e);
    }
  };
};
