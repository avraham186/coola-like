import React, { useState } from 'react';
import { Description } from '../cmps/jobs/DescriptionJob';
import { JobsList } from '../cmps/jobs/JobsList';
import { SortingJobs } from '../cmps/jobs/SortingJobs';
const JobsPage = () => {
    const [currentJob, setCurrentJob] = useState([])

    return (
        <div className="flex column justify-center">
            <SortingJobs />
            < div className='jobs-page flex justify-center' >
                <Description currentJob={currentJob} />
                <JobsList setCurrentJob={setCurrentJob} currentJob={currentJob} />
            </div >
        </div>
    )
}
export default JobsPage;