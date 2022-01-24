import shimon from '../../assets/images/founders-imgs/shimon.svg'
import adi from '../../assets/images/founders-imgs/adi.svg'
import stav from '../../assets/images/founders-imgs/stav.svg'
import iris from '../../assets/images/founders-imgs/iris.svg'

const initialState =

    [
        {
            id: '1',
            subject: 'Nailing the tech interview',
            eventdate: '27.10',
            lector: 'שחר פולק',
            image: `${adi}`,
            inlink: "",
            categories: "system",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: '2',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            eventdate: '24.10',
            lector: 'שחר ברלב',
            image: `${stav}`,
            inlink: "",
            categories: "development",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: '3',
            subject: 'Build your worker profile',
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "uiux",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a4a4a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            lector: "איריס ברקוביץ",
            image: `${iris}`,
            inlink: "",
            categories: "qa",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a5a5a',
            subject: 'Nailing the tech interview',
            lector: 'שחר פולק',
            image: `${adi}`,
            inlink: "",
            categories: "cybersecurity",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a6a6a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            lector: 'שחר ברלב',
            image: `${stav}`,
            inlink: "",
            categories: "development",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a7a7a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "system",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a8a8a',
            subject: 'B U or Not to B',
            lector: "איריס ברקוביץ",
            image: `${iris}`,
            inlink: "",
            categories: "uiux",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
        {
            id: 'a9a9a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            lector: 'משה מוזס',
            image: `${shimon}`,
            inlink: "",
            categories: "hardware",
            details: "thiss event isd going to be the tested event ever",
            detailsOnLector: "ahla person",
            registered: 23,
            eventLink: "https://...",
            image: "image.png"
        },
    ]

/**
 * {
        "id": 2,
        "eventDate": [
            2022,
            1,
            6,
            12,
            35,
            19
        ],
        "title": "Event of the yeear",
        "categories": null,
        "lector": "Elyashiv",
        "inLink": "https://linkedin...",
        "details": "thiss event isd going to be the tested event ever",
        "detailsOnLector": "ahla person",
        "registered": 23,
        "eventLink": "https://...",
        "image": "image.png"
    }
 */

export function eventReducer(state = initialState, action) {

    switch (action.type) {

        case 'SET_event':
            return { ...state, events: action.events }
        case 'REMOVE_event':
            return { ...state, events: state.events.filter(event => event._id !== action.eventId) }
        case 'ADD_event':
            return { ...state, events: [action.event, ...state.events] }
        case 'UPDATE_event':
            return {
                ...state, events: state.events.map(event => {
                    return event._id === action.event._id ? action.event : event
                })
            }
        default:
            return state
    }
}