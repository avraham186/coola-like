import { ActionTypes } from "../contants/action-types";
import adi from "../../cmps/tasks/assets/reducer/userOne.png";
import shimon from "../../cmps/tasks/assets/reducer/userTwo.png";
import stav from "../../cmps/tasks/assets/reducer/userTrhee.png";
import iris from "../../cmps/tasks/assets/reducer/userFour.png";

const initialState = {
  users:[]
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.SET_SELECTED_USERS:
      return {
        ...state,
        users: state.users.map((user, i) =>
          user.Id === payload.Id
            ? {
                ...user,
                selected: true,
              }
            : user
        ),
      };
    default:
      return state;
  }
};
