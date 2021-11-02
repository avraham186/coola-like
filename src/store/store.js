import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { jobReducer } from "./reducers/jobReducer";
import { taskReducer } from "./reducers/taskReducer";
import { communityHartReducer } from "./reducers/communityHartReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // userModule: userReducer,
  communityHartModule: communityHartReducer,
  jobsModule: jobReducer,
  taskModule: taskReducer,
  communityHartModule: communityHartReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
); //passing the reducer
