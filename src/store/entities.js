import {combineReducers} from "redux";
import projectsReducer from './projects';
import {jobReducer} from "./reducers/jobReducer";
import {communityHeartReducer} from "./reducers/communityHeartReducer";
import { taskReducer } from "./reducers/taskReducer";

export default combineReducers({
    projects: projectsReducer,
    jobsModule: jobReducer,
    communityHeartModule: communityHeartReducer,
    taskModule:taskReducer
})