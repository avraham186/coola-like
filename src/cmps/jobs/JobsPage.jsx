import React, { useState } from 'react';
import { Description } from './DescriptionJob';
import { JobsList } from './JobsList';
const JobsPage = () => {
    const [currentJob, setCurrentJob] = useState([])
    return (
        <div className='jobs-page flex justify-center'>
            <Description currentJob={currentJob} />
            <JobsList setCurrentJob={setCurrentJob} />
        </div>
    )
}
export default JobsPage;