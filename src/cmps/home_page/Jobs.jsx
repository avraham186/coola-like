import React, { useState, useEffect } from 'react';
import { loadJobs } from '../../store/jobs.js';
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { JobCard } from "./sub_cmps/JobCard.jsx";
import { useSelector, useDispatch } from 'react-redux';

const Jobs = () => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch()
    const {jobs} = useSelector(state => state.entities)
    useEffect(() => {
        dispatch(loadJobs())
    }, [])
    return (
        <div className="jobs flex column">
            <span className="jobs-title">#לוח_משרות לג'וניורים</span>
            <div className="jobs-sub-title-container flex align-center space-between">
                <span className="jobs-sub-title">המשרות החמות של השבוע</span>
                <span className="jobs-sub-title-link">
                    <Link to="/jobs" className="flex align-center">
                        <span className="jobs-link">לכל הפרטים</span>
                        <ArrowBackIcon className="sub-title-icon" />
                    </Link>
                </span>
            </div>
            <div className="jobs-cards flex space-between">
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