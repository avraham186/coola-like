import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({
    name: 'tasks',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        tasksRequested: (tasks, action) => {
            tasks.loading = true;
        },
        tasksReceived: (tasks, action) => {
            tasks.list = action.payload;
            tasks.loading = false;
            tasks.lastFetch = Date.now();
        },
        tasksAdded: (tasks, action) => {
            tasks.list.push(action.payload);
        },
        taskUpdate: (tasks, action) => {
            tasks.list.map(task => {
                return task._id === action.payload.task._id ? action.payload : task
            })
        },
        taskDelete: (tasks, action) => {
            tasks.list.filter(task => task._id !== action.payload)
        },
        tasksRequestFailed: (tasks, action) => {
            tasks.loading = false;
        },
    }
});

export const {
    tasksAdded,
    taskUpdate,
    taskDelete,
    tasksReceived,
    tasksRequested,
    tasksRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_TASKS;

export const loadTasks = () => apiCallBegan({
    url,
    onStart: tasksRequested.type,
    onSuccess: tasksReceived.type,
    onError: tasksRequestFailed.type
});

export const addTask = task => apiCallBegan({
    url,
    method: "post",
    data: task,
    onSuccess: tasksAdded.type
});
export const updateTask = task => apiCallBegan({
    url,
    method: "post",
    data: task,
    onSuccess: taskUpdate.type
});
export const deleteTask = task_id => apiCallBegan({
    url,
    method: "post",
    data: task_id,
    onSuccess: taskDelete.type
});


