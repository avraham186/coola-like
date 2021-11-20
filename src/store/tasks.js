import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";


const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        projectsRequested: (projects, action) => {
            projects.loading = true;
        },
        projectsReceived: (projects, action) => {
            projects.list = action.payload;
            projects.loading = false;
            projects.lastFetch = Date.now();
        },
        projectAdded: (projects, action) => {
            projects.list.push(action.payload);
        },
        projectsRequestFailed: (projects, action) => {
            projects.loading = false;
        },
    }
});

export const {
    projectAdded,
    projectsReceived,
    projectsRequested,
    projectsRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_PROJECT;

export const loadProjects = () => apiCallBegan({
    url,
    onStart: projectsRequested.type,
    onSuccess: projectsReceived.type,
    onError: projectsRequestFailed.type
});

export const addProject = project => apiCallBegan({
    url,
    method: "post",
    data: project,
    onSuccess: projectAdded.type
});
