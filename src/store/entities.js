import { combineReducers } from "redux";
import projectsReducer from './projects';
import { jobReducer } from "./reducers/jobReducer";
import { communityHeartReducer } from "./reducers/communityHeartReducer";
import { taskReducer } from "./reducers/taskReducer";
import { eventReducer } from "./reducers/eventReducer";
import userReducer from "./user";

export default combineReducers({
    projects: projectsReducer,
    jobs: jobsReducer,
    user: userReducer,
    communityHeartModule: communityHeartReducer,
    taskModule: taskReducer,
    eventsModule: eventReducer
})