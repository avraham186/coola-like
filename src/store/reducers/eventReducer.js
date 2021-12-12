import shimon from '../../assets/images/founders-imgs/shimon.svg'
import adi from '../../assets/images/founders-imgs/adi.svg'
import stav from '../../assets/images/founders-imgs/stav.svg'
import iris from '../../assets/images/founders-imgs/iris.svg'

const initialState = {
    //api call for events
    events: [
        {
            _id: 'a1a1a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour: '18:00',
            lecturer: 'שחר פולק',
            img: `${adi}`,
            link: "",
            tag: "system"
        },
        {
            _id: 'a2a2a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour: '20:00',
            lecturer: 'שחר ברלב',
            img: `${stav}`,
            link: "",
            tag: "development"
        },
        {
            _id: 'a3a3a',
            subject: 'Build your worker profile',
            date: '27.10',
            day: 'יום רביעי',
            hour: '21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "uiux"
        },
        {
            _id: 'a4a4a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '26.10',
            day: 'יום שלישי',
            hour: '19:00',
            lecturer: "איריס ברקוביץ",
            img: `${iris}`,
            link: "",
            tag: "qa"
        },
        {
            _id: 'a5a5a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour: '18:00',
            lecturer: 'שחר פולק',
            img: `${adi}`,
            link: "",
            tag: "cybersecurity"
        },
        {
            _id: 'a6a6a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour: '20:00',
            lecturer: 'שחר ברלב',
            img: `${stav}`,
            link: "",
            tag: "development"
        },
        {
            _id: 'a7a7a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour: '21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "system"
        },
        {
            _id: 'a8a8a',
            subject: 'B U or Not to B',
            date: '26.10',
            day: 'יום שלישי',
            hour: '19:00',
            lecturer: "איריס ברקוביץ",
            img: `${iris}`,
            link: "",
            tag: "uiux"
        },
        {
            _id: 'a9a9a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour: '21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "hardware"
        }
    ]
}

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