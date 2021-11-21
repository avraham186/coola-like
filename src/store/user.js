import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        loading: false,
        lastFetch: null
    },
    reducers: {
        userRequested: (user, action) => {
            user.loading = true;
        },
        userReceived: (user, action) => {
            user.user = action.payload;
            user.loading = false;
            user.lastFetch = Date.now();
        },
        userAdded: (user, action) => {
            debugger
            user.user = action.payload;
        },
        userRequestFailed: (user, action) => {
            user.loading = false;
        },
        getUser: (user, action) => {
            return user.user
        }
    }
});

export const {
    userRequested,
    userReceived,
    userAdded,
    userRequestFailed
} = slice.actions;

export default slice.reducer;

