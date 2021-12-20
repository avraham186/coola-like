import React, { useEffect, useState } from 'react';
import { data } from './jobsdata';
import { JobCard } from './JobCard';
import { useSelector, useDispatch } from 'react-redux';
import { loadJobs } from '../../store/jobs'

export const JobsList = ({ setCurrentJob, currentJob, }) => {
    // const [jobs, setJobs] = useState(data) // when the server side updated a mocked jobs details you can delete this line
    const { list: jobs } = useSelector(({ entities }) => entities.jobs) // remove comment this line when above comment is done
    const dispatch = useDispatch();
    useEffect(() => { dispatch(loadJobs()) }, [])
    useEffect(() => { setCurrentJob(jobs[0]) }, [jobs])
    const isJobClicked = ({ id }) => currentJob.id === id && 'job-card-clicked'
    return (
        <div className="jobs-list">
            {jobs.map((job, i) => <div onClick={() => setCurrentJob(job)}>
                <JobCard
                    isClicked={isJobClicked(job)}
                    title={job.title}
                    numJob={job?.numJob} />
            </div>
            )}
        </div>
    )
}

