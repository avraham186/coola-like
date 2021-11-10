import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({

    name: 'projects',
    initialState: {
        list: [
            {
                id: "1111",
                projectName: "projet",
                descirpcin: "sdfghj",
                projecStatus: "completad",
                startDate: "10/10/2020",
                endDate: "14/10/2020",
                task: []
            }
        ],
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
            debugger
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