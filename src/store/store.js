import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { jobReducer } from './reducers/jobReducer'
import { communityHartReducer } from './reducers/communityHartReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    // userModule: userReducer,
    communityHartModule: communityHartReducer,
    jobsModule: jobReducer,
})

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk)))//passing the reducer