import React, { useEffect, useState } from 'react';
import { data } from './jobsdata';
import { JobCard } from './JobCard';
export const JobsList = ({ setCurrentJob }) => {
    const [jobs, setJobs] = useState(data)
    useEffect(() => {
        setCurrentJob(data[0])
    }, [])
    return (
        <div className="jobs-list">
            {jobs.map((job, i) =>
                <JobCard
                    isClicked={i === 0 ? 'job-card-clicked' : ''}
                    title={job.title}
                    numJob={job?.numJob} />)}
        </div>
    )
}

