import React, { useEffect, useState } from "react";
import { data } from "./jobsdata";
import { JobCard } from "./JobCard";
import { useSelector, useDispatch } from "react-redux";
import { loadJobs } from "../../store/jobs";

export const JobsList = ({ setCurrentJob, currentJob }) => {
  // const [jobsList, setJobsList] = useState(jobs); // when the server side updated a mocked jobs details you can delete this line
  const { list: jobs } = useSelector(({ entities }) => entities.jobs); // remove comment this line when above comment is done
  const { title, type, location } = useSelector(
    ({ entities }) => entities.jobsFilter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJobs());
  }, [dispatch]);

  useEffect(() => {
    setCurrentJob(jobs[0]);
  }, [jobs, setCurrentJob]);
  const isJobClicked = ({ id }) => currentJob.id === id && "job-card-clicked";
  return (
    <div className="jobs-list">
      {jobs
        .filter((job) => {
          if (title !== "") {
            return job.title === title;
          } else {
            return (job) => job;
          }
        })
        .filter((job) => {
          if (type !== "") {
            return job.type === type;
          } else {
            return (job) => job;
          }
        })
        .filter((job) => {
          if (location !== "") {
            return job.location === location;
          } else {
            return (job) => job;
          }
        })
        .map((job, i) => (
          <div onClick={() => setCurrentJob(job)}>
            <JobCard
              isClicked={isJobClicked(job)}
              title={job.title}
              numJob={job?.numJob}
            />
          </div>
        ))}
    </div>
  );
};
