import { ActionTypes } from "../contants/action-types";
import axios from "axios";

export const setUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://cula-like-master.herokuapp.com/api/users`
      );
      const action = {
        type: ActionTypes.SET_USERS,
        payload: response.data,
      };

      dispatch(action);
    } catch (err) {
      console.log("error from catch loadToys", err);
    }
  };
};

export const setSelectedUsers = (user) => {
  return {
    type: ActionTypes.SET_SELECTED_USERS,
    payload: user,
  };
};
