import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAll = () => axios.get(URI + '/api/projects/tasks/');

const createTask = (projectId) => axios.post(URI + '/api/projects/tasks/' + projectId);

export default {getAll}