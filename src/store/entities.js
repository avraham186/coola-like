import {combineReducers} from "redux";
import projectsReducer from './projects';

export default combineReducers({
    projects: projectsReducer,
})