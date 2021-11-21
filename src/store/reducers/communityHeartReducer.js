
import { shimon, adi, stav, iris } from '../../assets/images/founders-imgs';
const initialState = {
    persons: [
        {
            name: 'Shimon Moyal',
            img: `${shimon}`,
            roleText: `Director Of Training & Volenteers`
        },
        {
            name: 'Adi Porath',
            img: `${adi}`,
            roleText: 'Founder & Navigator'
        },
        {
            name: 'Stav Brener',
            img: `${stav}`,
            roleText: 'Community Manager'
        },
        {
            name: 'Iris Nironi',
            img: `${iris}`,
            roleText: 'Community Manager'
        }
    ]
}

export function communityHeartReducer(state = initialState, action) {
    debugger
    switch (action.type) {
        case 'SET_PERSONS':
            return { ...state, persons: action.persons }
        case 'REMOVE_PERSON':
            return { ...state, persons: state.persons.filter(person => person.name !== action.name) }
        case 'ADD_PERSON':
            return { ...state, persons: [action.person, ...state.person] }
        case 'UPDATE_PERSON':
            return {
                ...state, persons: state.persons.map(person => {
                    return person.name === action.person.name ? action.person : person
                })
            }
        default:
            return state
    }
}