import axios from "axios";

const URI = process.env.REACT_APP_URI;

const getAllTasksByProjId = async (projectId) => {
  await axios.get(URI + "/api/projects/tasks/", projectId);
};

const getAllTasks = async () => {
  const tasks = await axios.get(URI + "/api/projects/tasks/");
  return tasks.data;
};

const createTask = async (task) => {
  console.log(task);
  let resp = await axios.post(URI + "/api/projects/tasks/", task);
  console.log(resp.data);
};

export default { getAllTasks, createTask };
