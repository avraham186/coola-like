import { combineReducers } from "redux";
import projectsReducer from "./projects";
import jobReducer from "./jobs";
import { communityHeartReducer } from "./reducers/communityHeartReducer";
import { taskReducer } from "./reducers/taskReducer";
import eventsReducer from "./events";
import userReducer from "./user";

export default combineReducers({
  projects: projectsReducer,
  jobs: jobReducer,
  user: userReducer,
  communityHeartModule: communityHeartReducer,
  taskModule: taskReducer,
  events: eventsReducer,
});
