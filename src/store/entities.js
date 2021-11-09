import { combineReducers } from "redux";
import projectsReducer from './projects';
import { jobReducer } from "./reducers/jobReducer";
import { communityHeartReducer } from "./reducers/communityHeartReducer";
import tasksReducer from './tasks'
export default combineReducers({
    projects: projectsReducer,
    jobsModule: jobReducer,
    tasks: tasksReducer,
    communityHeartModule: communityHeartReducer
})