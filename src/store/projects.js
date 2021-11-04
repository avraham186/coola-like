import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from "reselect";
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
            projects.list.push(
                {
                    description: action.payload.description,
                }
            );
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
const url = "/api/projects/";

export const loadProjects = () => apiCallBegan({
    url,
    onStart: projectsRequested.type,
    onSuccess: projectsReceived.type,
    onError: projectsRequestFailed.type
});

// Selector

// Memoization
// export const getUnresolvedBugs = createSelector(
//     state => state.entities.bugs,
//     state => state.entities.projects,
//     (bugs, projects) => bugs.filter(bug => !bug.resolved)
// );
//
// export const getBugsByUser = userId =>
//     createSelector(
//         state => state.entities.bugs,
//         bugs => bugs.filter(bug => bug.userId === userId)
//     );