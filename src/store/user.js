import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({
    name: "user",
    initialState: {
        imageUrl: '',
        email: '',
        name: '',
        view: '',
        tasks: [],
        roles: [],
        loading: false
    },
    reducers: {
        isLoading: (user, action) => {
            user.loading = true
        },
        isFailed: (user, action) => {
            user.loading = false
        },
        googleProfile: (user, action) => {
            user.imageUrl = action.payload.imageURI;
            user.email = action.payload.email;
            user.name = action.payload.name;
            user.tasks = action.payload.tasks
            user.roles = action.payload.roles
            user.loading = false
        },
        facebookProfile: (user, action) => {
            user.imageUrl = action.payload.picture.data.url;
            user.email = action.payload.email;
            user.name = action.payload.name;
        },
        linkedInProfile: (user, action) => {
            user.imageUrl = action.payload.picture.data.url;
            user.email = action.payload.email;
            user.name = action.payload.name;
        },
        setLogin: (user, action) => {
            user.view = action.payload.view;
        },
    },
});

export const {
    googleProfile,
    setLogin,
    facebookProfile,
    linkedInProfile,
    isLoading,
    isFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_GET_USER_ME;
// const url = '/api/users/me'
// console.log('url in user ME', url)
export const googleLogin = () => apiCallBegan({ url, onStart: isLoading.type, onSuccess: googleProfile.type, onError: isFailed.type, })

// export const getUser = () => {
//     const url = process.env.getUserMe
//     apiCallBegan({
//         url,
//         onStart: isLoading.type,
//         onSuccess: googleProfile.type,
//         onError: isFailed.type,

//     })
// }
