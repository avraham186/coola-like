import React from 'react';

export const JobCard = ({ title, isClicked }) => {
    return (
        <div className='job-card' id={isClicked ? isClicked : ""}>
            <p>{title}</p>
        </div>
    )
}