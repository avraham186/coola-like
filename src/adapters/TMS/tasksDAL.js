import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllTasks = () => axios.get(URI + '/api/projects/tasks/');

const createTask = (projectId, task) => axios.post(URI + '/api/projects/tasks/' + projectId, task);

export default {getAll: getAllTasks, createTask}