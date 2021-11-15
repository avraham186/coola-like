import React from 'react';
import {Link} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import JobCard from "./sub_cmps/JobCard";

const Jobs = () => {
    return (
        <div className="jobs">
            <span className="jobs-title">#לוח_משרות לג'וניורים</span>
            <div className="jobs-sub-title-container">
                <span className="jobs-sub-title">המשרות החמות של השבוע</span>
                <span className="jobs-sub-title-link">
                    <Link to="/">
                        <span className="jobs-link">לכל הפרטים</span>
                        <ArrowBackIcon className="sub-title-icon"/>
                    </Link>
                </span>
            </div>
            <div className="jobs-cards">
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
        </div>
    );
};

export default Jobs;