import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const slice = createSlice({
    name: 'tasks',
    initialState: {
        list: [
            {
                _id: 'a2a2a',
                text: `דרוש/ה תכניתן/ית
                 Java
                  לחברה טכנולוגית היושבת בתל אביב`,
                job: 'משרה מלאה',
                loc: ''
            },
            {
                _id: 'a3a3a',
                text: `אנחנו מגייסים למשרת 
                Developer Fe Junior
                לחברה ממש מגניבה בתחום ה 
                Computer Fitness and Vision`,
                job: 'משרה היבירדית',
                loc: 'אור יהודה'
            }
        ],
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
        tasksRequestFailed: (tasks, action) => {
            tasks.loading = false;
        },
    }
});

export const {
    tasksAdded,
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

