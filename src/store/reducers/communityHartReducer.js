import shimon from '../../assets/images/founders-imgs/shimon.svg'
import adi from '../../assets/images/founders-imgs/adi.svg'
import stav from '../../assets/images/founders-imgs/stav.svg'
import iris from '../../assets/images/founders-imgs/iris.svg'
const initialState = {
    persons: [
        {
            name: 'Shimon moyal',
            img: `${shimon}`,
            roleText: `director of traninng & volenteers`
        },
        {
            name: 'Adi porath',
            img: `${adi}`,
            roleText: 'founder & navigator'
        },
        {
            name: 'Stav brener',
            img: `${stav}`,
            roleText: 'community manager'
        },
        {
            name: 'Iris nironi',
            img: `${iris}`,
            roleText: 'community manager'
        }
    ]
}

export function communityHartReducer(state = initialState, action) {
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