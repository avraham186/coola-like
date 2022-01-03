import React, { useEffect, useState } from 'react';
import { data } from './jobsdata';
import { JobCard } from './JobCard';
import { useSelector, useDispatch } from 'react-redux';
import { loadJobs } from '../../store/jobs'

export const JobsList = ({ setCurrentJob, currentJob, }) => {
    const { list: jobs } = useSelector(({ entities }) => entities.jobs)
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('jobs',jobs);
        dispatch(loadJobs())
    }, [])
    useEffect(() => {
        setCurrentJob(jobs[0])
    }, [jobs])

    const isJobClicked = ({ id }) => {
        if (currentJob.id === id) return 'job-card-clicked'
        else return 'none'
    }
    return (
        <div className="jobs-list">
            {jobs.map((job) => {
                return (<div
                    key={job.id}
                    onClick={() => setCurrentJob(job)}>
                    <JobCard
                        isClicked={isJobClicked(job)}
                        title={job.title}
                    />
                </div>)
            })}
        </div>
    )
}

