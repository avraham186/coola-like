import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { jobReducer } from './reducers/jobReducer'
import { communityHeartReducer } from './reducers/communityHeartReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    // userModule: userReducer,
    jobsModule: jobReducer,
    communityHeartModule: communityHeartReducer
})

export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk)))//passing the reducer