import { combineReducers } from "redux";
import projectsReducer from './projects';
import jobsReducer from "./jobs";
import { communityHeartReducer } from "./reducers/communityHeartReducer";
import { taskReducer } from "./reducers/taskReducer";
import { eventReducer } from "./reducers/eventReducer";

export default combineReducers({
    projects: projectsReducer,
    jobs: jobsReducer,
    communityHeartModule: communityHeartReducer,
    taskModule: taskReducer,
    eventsModule: eventReducer
})