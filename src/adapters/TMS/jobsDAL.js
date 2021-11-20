import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllJobs = async () => await axios.get(URI + '/api/jobs/');

const createJob = async (job) => { await axios.post(URI + '/api/jobs/', job) };

const deleteJob = async (id) => { await axios.delete(URI + '/api/jobs/' + id); }

const editJob = (job) => { axios.put(URI + '/api/jobs/', job) }

export default { getAllJobs, createJob, deleteJob, editJob }