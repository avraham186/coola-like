import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";
import axios from 'axios'

const slice = createSlice({
    name: "jobs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        jobsRequested: (jobs, action) => {
            jobs.loading = true;
        },
        jobsReceived: (jobs, action) => {
            jobs.list = action.payload;
            jobs.loading = false;
            jobs.lastFetch = Date.now();
        },
        jobAdded: (jobs, action) => {
            jobs.list.push(action.payload);
        },
        jobsRequestFailed: (jobs, action) => {
            jobs.loading = false;
        },
        updateJobs: (jobs, action) => {
            jobs.list.map((prod) => {
                return prod.id === action.payload.job.id
                    ? action.payload.job
                    : prod;
            });
        },
        deleteJob: (jobs, action) => {
            jobs.list.filter((prod) => prod.id !== action.id);
        },
    },
});

export const {
    jobAdded,
    jobsReceived,
    jobsRequested,
    jobsRequestFailed,
    updateJobs,
    deleteJob,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_JOB;

export const addJob = job => apiCallBegan({

    url: "https://cula-like-master.herokuapp.com/api/jobs/",
    method: "post",
    data: job,
    onSuccess: jobAdded.type
});
export const getJobById = async (jobId) => {
    try {
        const response = await axios.get(`https://cula-like-master.herokuapp.com/api/jobs/${jobId}`)
        console.log('response', response);

    } catch (err) {
        console.log('err', err);

    }

}
export const deleteJobById = jobId => apiCallBegan({
    url,
    method: "delete",
    data: jobId,
    onSuccess: deleteJob.type
})

export const loadJobs = () =>
    apiCallBegan({
        url,
        onStart: jobsRequested.type,
        onSuccess: jobsReceived.type,
        onError: jobsRequestFailed.type,
    });

export const updateJob = (job) =>
    apiCallBegan({
        url,
        method: "put",
        data: job,
        onSuccess: updateJobs.type,
    });
