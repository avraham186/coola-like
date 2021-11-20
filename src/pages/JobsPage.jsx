import React, {useEffect, useState} from 'react';
import JobDescription from '../cmps/jobs_page/jobs_main/job_description/JobDescription';
import axios from 'axios';
import JobList from '../cmps/jobs_page/jobs_main/job_list/JobList';
// ;
// }).then((data => {
//     title = data[1].title;
//     jobDesc = data[1].description;
//     console.log(data);
//     console.log(jobDesc);
//     setJoDescription(description)
// }))
import {data} from '../cmps/jobs_page/jobs_main/jobs_data/JobsData';

const JobsPage = () => {

    const [currentJob, setCurrentJob] = useState({});
    const [allJobs, setAllJobs] = useState([]);

    const getJobHandler = () => {
        axios.get(`https://cula-like-master.herokuapp.com/api/jobs`)
            .then(res => {
                console.log(res.data[1]);
                setAllJobs(res.data)
            })
    }

    useEffect(() => {
        setCurrentJob(data)

    }, [data]);

    useEffect(() => {
        getJobHandler();
        setAllJobs(data)
    }, [])

    return (
        <div className="jobs-body">

            <JobList setCurrentJob={setCurrentJob} currentJob={currentJob} dataJobs={allJobs}/>
            <JobDescription data={currentJob}/>
        </div>
    )
}

export default JobsPage;
