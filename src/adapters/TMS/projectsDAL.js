import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllProjects = async () => await axios.get(URI + '/api/projects/');

const createProject = async (project) => {
    console.log('project')
    await axios.post(URI + '/api/projects/', project)
};

const deleteProject = async (id) => { await axios.delete(URI + '/api/projects/' + id); }

const editProject = (project) => { axios.put(URI + '/api/projects/', project) }



export default { getAllProjects, createProject, deleteProject, editProject }