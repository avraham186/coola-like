const initialState = {
    jobs: [
        {
            _id: 'a1a1a',
            text: 'בוגר/ת תואר ראשון בהנדסה? יריית הפתיחה של הקריירה שלך לפניך! (משרה 32391)',
            job: 'משרה מלאה',
            loc: 'באר שבע ישראל'
        },
        {
            _id: 'a2a2a',
            text: `דרוש/ה תכניתן/ית
             Java
              לחברה טכנולוגית היושבת בתל אביב`,
            job: 'משרה מלאה',
            loc: ''
        },
        {
            _id: 'a3a3a',
            text: `אנחנו מגייסים למשרת 
            Developer Fe Junior
            לחברה ממש מגניבה בתחום ה 
            Computer Fitness and Vision`,
            job: 'משרה היבירדית',
            loc: 'אור יהודה'
        }
    ]
}

export function jobReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_JOBS':
            return { ...state, jobs: action.jobs }
        case 'REMOVE_JOB':
            return { ...state, jobs: state.jobs.filter(job => job._id !== action.jobId) }
        case 'ADD_JOB':
            return { ...state, jobs: [action.job, ...state.jobs] }
        case 'UPDATE_JOB':
            return {
                ...state, jobs: state.jobs.map(job => {
                    return job._id === action.job._id ? action.job : job
                })
            }
        default:
            return state
    }
}