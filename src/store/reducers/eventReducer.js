const initialState = {
    events: [
        {
            _id: 'a1a1a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour:'18:00',
            lecturer: 'שחר פולק',
            img: 'adi.png'
        },
        {
            _id: 'a2a2a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour:'20:00',
            lecturer: 'שחר ברלב',
            img: 'stav.png'
        },
        {
            _id: 'a3a3a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: 'shimon.png'
        },
        {
            _id: 'a3a3a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '26.10',
            day: 'יום שלישי',
            hour:'19:00',
            lecturer: "איריס ברקוביץ'",
            img: 'iris.png'
        },
        {
            _id: 'a1a1a',
            subject: 'Nailing the tech interview',
            date: '27.10',
            day: 'יום רביעי',
            hour:'18:00',
            lecturer: 'שחר פולק',
            img: 'adi.png'
        },
        {
            _id: 'a2a2a',
            subject: 'לבנות מותג בלינקדאין כדי למצוא עבודה ראשונה',
            date: '24.10',
            day: 'יום ראשון',
            hour:'20:00',
            lecturer: 'שחר ברלב',
            img: 'stav.png'
        },
        {
            _id: 'a3a3a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: 'shimon.png'
        },
        {
            _id: 'a3a3a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '26.10',
            day: 'יום שלישי',
            hour:'19:00',
            lecturer: "איריס ברקוביץ",
            img: 'iris.png'
        },
        {
            _id: 'a3a3a',
            subject: 'הכנה לראיון טכני במקצועות תקשורת, ענן ואבטחת מידע',
            date: '27.10',
            day: 'יום רביעי',
            hour:'21:00',
            lecturer: 'משה מוזס',
            img: 'shimon.png'
        }
    ]
}

export function eventReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_events':
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