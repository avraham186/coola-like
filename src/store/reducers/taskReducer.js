import {ActionTypes} from "../contants/action-types";

const initialState = {
    users: []
};

export const taskReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return {...state, users: payload};
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
