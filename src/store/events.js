import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import axios from 'axios'


const slice = createSlice({

    name: 'events',
    initialState: {
        list: [

        ],
        loading: false,
        lastFetch: null
    },
    reducers: {

        eventsRequested: (events, action) => {
            events.loading = true;
        },
        eventsReceived: (events, action) => {
            events.list = action.payload;
            events.loading = false;
            events.lastFetch = Date.now();
        },
        eventAdded: (events, action) => {
            events.list.push(action.payload);
        },
        eventsRequestFailed: (events, action) => {
            events.loading = false;
        },
        updateEvents: (events, action) => {
            events.list.map(prod => {
                return prod.id === action.payload.event.id ? action.payload.event : prod
            })
        },
        delateEvent: (events, action) => {
            events.list.filter(prod => prod.id !== action.id)
        }

    }
}
)

export const {
    eventAdded,
    eventsReceived,
    eventsRequested,
    eventsRequestFailed,
    updateEvents,
    delateEvent
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_PROJECT;

export const loadEvents = () => apiCallBegan({
    url,
    onStart: eventsRequested.type,
    onSuccess: eventsReceived.type,
    onError: eventsRequestFailed.type
});

export const addEvent = event => apiCallBegan({

    url,
    method: "post",
    data: event,
    onSuccess: eventAdded.type
});
export const getProjById = async (projId) => {
    try {
        const response = await axios.get(`https://cula-like-master.herokuapp.com/api/events/${projId}`)
        console.log('response', response);

    } catch (err) {
        console.log('err', err);

    }

}
export const delateEventById = eventId => apiCallBegan({
    url,
    method: "delete",
    data: eventId,
    onSuccess: delateEvent.type
})
export const updateEvents1 = event => apiCallBegan({
    url,
    method: "put",
    data: event,
    onSuccess: updateEvents.type
});

// Selector

// Memoization
// export const getUnresolvedBugs = createSelector(
//     state => state.entities.bugs,
//     state => state.entities.events,
//     (bugs, events) => bugs.filter(bug => !bug.resolved)
// );
//
// export const getBugsByUser = userId =>
//     createSelector(
//         state => state.entities.bugs,
//         bugs => bugs.filter(bug => bug.userId === userId)
//     );