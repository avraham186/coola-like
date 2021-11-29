import React, { useState, useEffect } from 'react';
import { loadJobs } from '../../store/jobs.js';
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { JobCard } from "./sub_cmps/JobCard.jsx";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Jobs = () => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.entities.jobs)
    useEffect(() => {
        dispatch(loadJobs())
    }, [])
    return (
        <div className="jobs">
            <span className="jobs-title">#לוח_משרות לג'וניורים</span>
            <div className="jobs-sub-title-container">
                <span className="jobs-sub-title">המשרות החמות של השבוע</span>
                <span className="jobs-sub-title-link">
                    <Link to="/jobs">
                        <span className="jobs-link">לכל הפרטים</span>
                        <ArrowBackIcon className="sub-title-icon" />
                    </Link>
                </span>
            </div>
            <div className="jobs-cards">
                {jobs.list.slice(-3).map((job) => {
                    return <div key={job.id}>
                        <JobCard job={job} />
                    </div>
                })}
            </div>
        </div>
    );
};

export default Jobs;