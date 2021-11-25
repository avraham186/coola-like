import React, { useState } from 'react';

export const JobCard = ({ title, numJob, isClicked }) => {
    return (
        <div className='job-card' id={isClicked}>
            <p>{title}</p>
            <p>({numJob ? numJob : 'null'})</p>
        </div>
    )
}