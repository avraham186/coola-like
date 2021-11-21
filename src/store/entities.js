import { combineReducers } from "redux";
import projectsReducer from './projects';
import jobReducer from "./jobs";
import { communityHeartReducer } from "./reducers";
import { taskReducer } from "./reducers/taskReducer";
import { eventReducer } from "./reducers";
import userReducer from "./user";

export default combineReducers({
    projects: projectsReducer,
    jobs: jobReducer,
    user: userReducer,
    communityHeartModule: communityHeartReducer,
    taskModule: taskReducer,
    eventsModule: eventReducer
})