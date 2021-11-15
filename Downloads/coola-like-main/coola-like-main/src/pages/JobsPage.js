import React, {useEffect, useState} from 'react';
import JobDescription from '../assets/cmps/JobsPage/JobsMain/JobDescription/JobDescription';
import axios from 'axios';
import JobList from '../assets/cmps/JobsPage/JobsMain/JobList/JobList';
import JobItem from '../assets/cmps/JobsPage/JobsMain/JobList/JobItem/JobItem';
import HeaderBottom from '../assets/cmps/JobsPage/JobsBoard/HeaderBottom/HeaderBottom';
// ;
// }).then((data => {
           
//     title = data[1].title;
//     jobDesc = data[1].description;
//     console.log(data);
//     console.log(jobDesc);
//     setJoDescription(description)
// }))
import {data} from '../assets/cmps/JobsPage/JobsMain/JobsData/JobsData';
const Body = () => {

    const [currentJob, setCurrentJob] = useState({});
    const [allJobs,setAllJobs]= useState([]);

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

    useEffect(()=>{
        getJobHandler();
        setAllJobs(data)
    },[])

    return (
        <div className="jobs-body">
           
            <JobList setCurrentJob={setCurrentJob} currentJob={currentJob} dataJobs={allJobs}/>
            <JobDescription data={currentJob}/>
        </div>
    )
}

export default Body;
