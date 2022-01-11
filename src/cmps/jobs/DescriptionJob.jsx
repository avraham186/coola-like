import React, { useEffect } from 'react';
import { jobs_icon, Facebook, Whatsapp, Copy_link, Linkedin, edit_pen, erase } from '../../assets/images/icons'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Description = ({ currentJob: { title, numJob, description, jobType, email, location, urlJob } }) => {
    return (
        <div className="description-job">
            <div className='container-job flex column'>
                <div>
                    <h2>{title}</h2>
                    <p>{numJob}</p>
                    <div className="card-content-info flex align-center">
                        <span><img src={jobs_icon} className="job-icon"  alt='Job icon' />{jobType}</span>
                        <span><LocationOnIcon className="job-icon" />{location}</span>
                    </div>
                    <p>{description}</p>
                    <a href={urlJob}>קישור לעמוד המשרה</a>
                </div>
                <div className="bottom-section flex space-between">
                    <div className="social">
                        <p>שתפ\י משרה</p>
                        <div className='icon-social flex'>
                            <img src={Facebook} alt="social icon" />
                            <img src={Whatsapp} alt="social icon" />
                            <img src={Copy_link} alt="social icon" />
                            <img src={Linkedin} alt="social icon" />
                        </div>
                    </div>
                    <div className="buttons-modify flex">
                        <span>
                            <img src={edit_pen} alt="edit icon" />
                            עריכה</span>
                        <span>
                            <img src={erase} alt="delete icon" />
                            מחיקה</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

