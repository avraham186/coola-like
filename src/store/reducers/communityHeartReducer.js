import shimon from '../../assets/images/founders-imgs/shimon.svg'
import adi from '../../assets/images/founders-imgs/adi.svg'
import stav from '../../assets/images/founders-imgs/stav.svg'
import iris from '../../assets/images/founders-imgs/iris.svg'

const initialState = {
    persons: [
        {
            name: 'Shimon Moyal',
            img: `${shimon}`,
            roleText: `director of traninng & volenteers`
        },
        {
            name: 'Adi Porath',
            img: `${adi}`,
            roleText: 'founder & navigator'
        },
        {
            name: 'Stav Brener',
            img: `${stav}`,
            roleText: 'community manager'
        },
        {
            name: 'Iris Nironi',
            img: `${iris}`,
            roleText: 'community manager'
        }
    ]
}

export function communityHeartReducer(state = initialState, action) {
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