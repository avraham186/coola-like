import { ActionTypes } from "../contants/action-types";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const setSelectedUsers = (user) => {
  return {
    type: ActionTypes.SET_SELECTED_USERS,
    payload: user,
  };
};
