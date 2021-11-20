import {combineReducers} from "redux";
import projectsReducer from './projects';
import jobsReducer from "./jobs";
import userReducer from "./user";
import {communityHeartReducer} from "./reducers";
import {taskReducer} from "./reducers/taskReducer";
import {eventReducer} from "./reducers";

export default combineReducers({
    projects: projectsReducer,
    jobs: jobsReducer,
    user: userReducer,
    communityHeartModule: communityHeartReducer,
    taskModule: taskReducer,
    eventsModule: eventReducer
})