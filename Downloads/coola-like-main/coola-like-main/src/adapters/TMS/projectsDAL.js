import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllProjects = () => axios.get(URI + '/api/projects/');

const createProject = (project) => axios.post(URI + '/api/projects/', project);

const deleteProject = (id) => axios.delete(URI + '/api/projects/' + id);

export default {getAllProjects, createProject, deleteProject}