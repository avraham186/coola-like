import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import axios from 'axios'
import shimon from '../assets/images/founders-imgs/shimon.svg'
import adi from '../assets/images/founders-imgs/adi.svg'
import stav from '../assets/images/founders-imgs/stav.svg'
import iris from '../assets/images/founders-imgs/iris.svg'

/**
 * {
        -"id": 2,
        -"eventDate": [
            2022,
            1,
            6,
            12,
            35,
            19
        ],
        -"title": "Event of the yeear",
        -"categories": null,
        -"lector": "Elyashiv",
       - "inLink": "https://linkedin...",
        "details": "thiss event isd going to be the tested event ever",
        "detailsOnLector": "ahla person",
        "registered": 23,
        "eventLink": "https://...",
        "image": "image.png"
    }
 */

const initialState =
    [
        {
            id: '1',
            subject: 'Nailing the tech interview',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'שחר פולק',
            image: `${adi}`,
            inlink: "",
            categories: "system",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: '2',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'שחר ברלב',
            image: `${stav}`,
            inlink: "",
            categories: "development",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: '3',
            subject: 'Build your worker profile',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "uiux",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a4a4a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: "איריס ברקוביץ",
            image: `${iris}`,
            inlink: "",
            categories: "qa",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a5a5a',
            subject: 'Nailing the tech interview',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'שחר פולק',
            image: `${adi}`,
            inlink: "",
            categories: "cybersecurity",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a6a6a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'שחר ברלב',
            image: `${stav}`,
            inlink: "",
            categories: "development",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a7a7a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "system",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a8a8a',
            subject: 'B U or Not to B',
            eventDate: [
                2022,
                1,
                6,
                12,
                35,
                19
            ],
            lector: "איריס ברקוביץ",
            image: `${iris}`,
            inlink: "",
            categories: "uiux",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
        {
            id: 'a9a9a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            eventDate: [
                2022,// year
                1,//date
                6,//date
                12,//date
                35,//mm
                19//hh
            ],
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "hardware",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",

        },
    ]


const slice = createSlice({

    name: 'events',
    initialState: {
        list: initialState,// set this to empty array when fetching events data from server
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
        deleteEvent: (events, action) => {
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
    deleteEvent
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = process.env.REACT_APP_URI + process.env.REACT_APP_EVENT;

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
export const getEventById = async (eventId) => {
    try {
        //REACT_APP_URI,REACT_APP_EVENT/${eventId}
        const response = await axios.get(url, `${eventId}`)
        console.log('response', response);

    } catch (err) {
        console.log('err', err);

    }

}
export const deleteEventById = eventId => apiCallBegan({
    url: url + `${eventId}`,
    method: "delete",
    data: eventId,
    onSuccess: deleteEvent.type
})
export const updateEvents1 = event => apiCallBegan({
    url,
    method: "put",
    data: event,
    onSuccess: updateEvents.type
});
