const initialState = {
    persons: [
        {
            name: 'shimon moyal',
            img: '../assets/images/fonders-imgs/shimon.svg',
            roleText:'director of traninng & volenteers'
        },
        {
            name: 'Adi porath',
            img: '../assets/images/fonders-imgs/adi.svg',
            roleText:'founder & navigator'
        },
        {
            name: 'stav brener',
            img: '../assets/images/fonders-imgs/stav.svg',
            roleText:'community manager'
        },
        {
            name: 'iris nironi',
            img: '../assets/images/iris.svg',
            roleText:'community manager'
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