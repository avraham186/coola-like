import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllTasks = async (projectId) => { await axios.get(URI + '/api/projects/tasks/', projectId); }

const createTask = async (projectId, task) => await axios.post(URI + '/api/projects/tasks/' + projectId, task);

export default { getAllTasks, createTask }