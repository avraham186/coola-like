import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { jobReducer, communityHeartReducer } from './reducers'
import { taskReducer } from "./reducers/taskReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // userModule: userReducer,
  jobsModule: jobReducer,
  taskModule: taskReducer,
  communityHeartModule: communityHeartReducer
})
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
); //passing the reducer
