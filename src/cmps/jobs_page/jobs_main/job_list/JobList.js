import React, { useEffect, useState } from "react";
// import "./job_list.css";

import JobItem from "./job_item/JobItem";


function JobList({ setCurrentJob, currentJob, dataJobs }) {
  const [allJobs, setAllJobs] = useState([]);

  const isJobClicked = (job) => {
    return currentJob.email === job.email ? true : false;
  };
  useEffect(() => {
    console.log(dataJobs[1]);
    setAllJobs(dataJobs);
  }, [dataJobs]);

  return (
    <div className="job-list">
      {allJobs.map((job) => {
        return (
          <div
            onClick={() => setCurrentJob(job)}
          >
            <JobItem jobData={job} isJobClick={isJobClicked(job)} />
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
