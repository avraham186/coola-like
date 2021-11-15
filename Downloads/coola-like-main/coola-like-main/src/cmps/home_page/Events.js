import React from 'react';
import {Link} from 'react-router-dom'
import EventCard from "./sub_cmps/EventCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Events = () => {
    return (
        <div className="events">
            <span className="events-title">#לא כדאי_לפספס</span>
            <div className="events-sub-title-container">
                <span className="events-sub-title">אירועי השבוע</span>
                <span className="events-sub-title-link">
                            <Link to="/">
                                לכל האירועים
                                <ArrowBackIcon className="sub-title-icon"/>
                            </Link>
                        </span>
            </div>
            <div className="events-cards">

                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>

            </div>
        </div>
    );
};

export default Events;