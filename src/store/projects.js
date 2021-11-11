import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import axios from 'axios'


const slice = createSlice({

    name: 'projects',
    initialState: {
        list: [

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
        updateProjects: (projects, action) => {
            debugger
            projects.list.map(prod => {
                return prod.id === action.payload.project.id ? action.payload.project : prod
            })
        },
        delateProject: (projects, action) => {
            projects.list.filter(prod => prod.id !== action.id)
        }
        //     case 'UPDATE_PERSON':
        // return {
        //     ...state, persons: state.persons.map(person => {
        //     })
    }
}
)

export const {
    projectAdded,
    projectsReceived,
    projectsRequested,
    projectsRequestFailed,
    updateProjects,
    delateProject
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
export const getProjById = async (projId) => {
    try {
        const response = await axios.get(`https://cula-like-master.herokuapp.com/api/projects/${projId}`)
        console.log('response', response);

    } catch (err) {
        console.log('err', err);

    }

}
export const delateProjectById = projectId => apiCallBegan({
    url,
    method: "delete",
    data: projectId,
    onSuccess: delateProject.type
})
export const updateProjects1 = project => apiCallBegan({
    url,
    method: "put",
    data: project,
    onSuccess: updateProjects.type
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