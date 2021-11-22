import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        imageUrl: '',
        email: '',
        name: '',
        view: ''
    },
    reducers: {
        addUser: (user, action) => {
            user.imageUrl = action.payload.imageUrl;
            user.email = action.payload.email;
            user.name = action.payload.name;
        },
        setLogin: (user, action) => {
            user.view = action.payload.view;
        },
    },
});

export const {
    addUser,
    setLogin
} = slice.actions;

export default slice.reducer;