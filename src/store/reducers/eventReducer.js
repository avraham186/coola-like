import shimon from '../../assets/images/founders-imgs/shimon.png'
import adi from '../../assets/images/founders-imgs/adi.png'
import stav from '../../assets/images/founders-imgs/stav.png'
import iris from '../../assets/images/founders-imgs/iris.png'

const initialState = {
    events: [
        {
            _id: 'a1a1a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour:'18:00',
            lecturer: 'שחר פולק',
            img: `${adi}`,
            link: "",
            tag: "sys all"
        },
        {
            _id: 'a2a2a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour:'20:00',
            lecturer: 'שחר ברלב',
            img: `${stav}`,
            link: "",
            tag: "prgrm all"
        },
        {
            _id: 'a3a3a',
            subject: 'Build your worker profile',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "ui all"
        },
        {
            _id: 'a4a4a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '26.10',
            day: 'יום שלישי',
            hour:'19:00',
            lecturer: "איריס ברקוביץ",
            img: `${iris}`,
            link: "",
            tag: "qa all"
        },
        {
            _id: 'a5a5a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour:'18:00',
            lecturer: 'שחר פולק',
            img: `${adi}`,
            link: "",
            tag: "cyber all"
        },
        {
            _id: 'a6a6a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour:'20:00',
            lecturer: 'שחר ברלב',
            img: `${stav}`,
            link: "",
            tag: "prgrm all"
        },
        {
            _id: 'a7a7a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "sys all"
        },
        {
            _id: 'a8a8a',
            subject: 'B U or Not to B',
            date: '26.10',
            day: 'יום שלישי',
            hour:'19:00',
            lecturer: "איריס ברקוביץ",
            img: `${iris}`,
            link: "",
            tag: "ui all"
        },
        {
            _id: 'a9a9a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: `${shimon}`,
            link: "",
            tag: "hrdwr all"
        }
    ]
}

export function eventReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_events':
            return { ...state, events: action.events }
        case 'REMOVE_events':
            return { ...state, events: state.events.filter(event => event._id !== action.eventId) }
        case 'ADD_events':
            return { ...state, events: [action.event, ...state.events] }
        case 'UPDATE_events':
            return {
                ...state, events: state.events.map(event => {
                    return event._id === action.event._id ? action.event : event
                })
            }
        default:
            return state
    }
}