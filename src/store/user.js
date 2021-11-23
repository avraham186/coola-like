import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";
import {projectsReceived, projectsRequested, projectsRequestFailed} from "./projects";


const slice = createSlice({
    name: "user",
    initialState: {
        imageUrl: '',
        email: '',
        name: '',
        view: '',
    },
    reducers: {
        googleProfile: (user, action) => {
            user.imageUrl = action.payload.imageUrl;
            user.email = action.payload.email;
            user.name = action.payload.name;
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
    linkedInProfile
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_PROJECT;

export const loadProjects = () =>
    apiCallBegan({
        url,
        onStart: projectsRequested.type,
        onSuccess: projectsReceived.type,
        onError: projectsRequestFailed.type,
    });