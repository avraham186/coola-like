import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        imageUrl: '',
        email: '',
        name: ''
    },
    reducers: {
        addUser: (user, action) => {
            user.imageUrl = action.payload.imageUrl;
            user.email = action.payload.email;
            user.name = action.payload.name;
        },
    },
});

export const {
    addUser
} = slice.actions;

export default slice.reducer;
