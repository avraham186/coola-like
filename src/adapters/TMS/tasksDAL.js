import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllTasks = (projectId) => { axios.get(URI + '/api/projects/tasks/get/', projectId); }

const createTask = (projectId, task) => axios.post(URI + '/api/projects/tasks/' + projectId, task);

export default { getAllTasks, createTask }