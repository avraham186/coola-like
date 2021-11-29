import React from 'react';
import { arrow_down } from '../../assets/images/icons'
export const SortingJobs = () => {
    return (
        <div className="sorting-jobs flex ">
            <div className="search-job-by-buttons">
                <span id="by-interest">
                    <img src={arrow_down} alt="arrow_down" />
                    תחום</span>
                <span id="by-job-type">
                    <img src={arrow_down} alt="arrow_down" />
                    סוג משרה</span>
                <span id="by-area">
                    <img src={arrow_down} alt="arrow_down" />
                    איזור</span>
            </div>
            <div className="search-job-by-text">
                <input type="text" placeholder="חפש תחום/מיקום/תפקיד" />
            </div>
        </div>
    )
}