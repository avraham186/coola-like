import React, { useEffect } from 'react';
import { jobs_icon, Facebook, Whatsapp, Copy_link, Linkedin, edit_pen, erase } from '../../assets/images/icons'
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Description = ({ currentJob: { title, description, type, email, location, experience, id },
    removeJob, editJob }) => {
    return (
        <div className="description-job">
            <div className='container-job flex column'>
                <div>
                    <h2>{title}</h2>
                    <div className="card-content-info flex align-center">
                        <span><img src={jobs_icon} className="job-icon" />{type}</span>
                        <span><LocationOnIcon className="job-icon" />{location}</span>
                    </div>
                    <p>{description}</p>
                    <p>נסיון: <span>{experience}</span> שנים</p>
                    <p>מייל: <span>{email}</span></p>
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
                        <span onClick={editJob}>
                            <img src={edit_pen} alt="edit icon" />
                            עריכה</span>
                        <span onClick={() => removeJob(id)}>
                            <img src={erase} alt="delete icon" />
                            מחיקה</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

