import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Description } from '../cmps/jobs/DescriptionJob';
import { JobsList } from '../cmps/jobs/JobsList';
import { SortingJobs } from '../cmps/jobs/SortingJobs';
import { deleteJobById, loadJobs } from '../store/jobs'
const JobsPage = () => {
    const dispatch = useDispatch()
    const [currentJob, setCurrentJob] = useState([])
    const editJob = () => {
        console.log('this is edit job');
    }
    const removeJob = (id) => {
        console.log('this is remove job, job id', id);
        dispatch(deleteJobById(id))
        dispatch(loadJobs())
    }

    return (
        <div className="flex column justify-center">
            <SortingJobs />
            < div className='jobs-page flex justify-center' >
                <Description currentJob={currentJob} editJob={editJob} removeJob={removeJob} />
                <JobsList setCurrentJob={setCurrentJob} currentJob={currentJob} />
            </div >
        </div>
    )
}
export default JobsPage;