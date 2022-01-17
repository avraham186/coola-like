import { jobService } from "../../services/toy-service";

export function loadJobss(filterBy) {
  // console.log('toys in action', filterBy);
  return (dispatch) => {
    try {
      const jobs = jobService.query(filterBy);
      const action = {
        type: "SET_JOBS",
        jobs,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch loadToys", err);
    }
  };
}

export function removeJob(jobId) {
  return (dispatch) => {
    try {
      jobService.remove(jobId);
      const action = {
        type: "REMOVE_JOB",
        jobId,
      };
      dispatch(action);
    } catch (err) {
      console.log("error from catch remove toy", err);
    }
  };
}


export function saveJob(job) { // Action Creator
  const type = job._id ? 'UPDATE_JOB' : 'ADD_JOB'

  return (dispatch) => {
    try {
      const savedJob = jobService.save(job)
      const action = {
        type,
        job: savedJob
      }
      dispatch(action)
    } catch (err) {
      console.log('error from catch save toy', err);
    }
  }
}


