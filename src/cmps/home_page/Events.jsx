import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import EventCard from "./sub_cmps/EventCard.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import heart from '../../assets/images/lectures/heart-btn.png'
import share from '../../assets/images/lectures/share-btn.png'
import { useDispatch, useSelector } from 'react-redux';
import { loadEvents } from '../../store/events.js';

const Events = () => {
    const { events } = useSelector(({ entities }) => entities.eventsModule)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadEvents())
    }, [])
    return (
        <div className="events flex column">
            <span className="events-title">#לא כדאי_לפספס</span>
            <div className="events-sub-title-container">
                <span className="events-sub-title">אירועי השבוע</span>
                <span className="events-link">
                    <Link className="events-sub-title-link" to="/events">
                        לכל האירועים
                        <ArrowBackIcon className="sub-title-icon" />
                    </Link>
                </span>
            </div>
            <div className="events-cards flex space-between">
                {events.slice(- 4).map((event, idx) => {
                    return <div key={idx}>
                        <EventCard event={event} />
                        <div className="btn-card flex justify-center">
                            <IconButton
                                aria-label="share"
                                className="events-icon">
                                <img src={share} alt="share-btn" />
                            </IconButton>
                            <IconButton
                                aria-label="add to favorites"
                                className="events-icon">
                                <img src={heart} alt="heart-btn" />
                            </IconButton>
                        </div>
                    </div>
                })}

                {/* <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/> */}

            </div>
        </div>
    );
};

export default Events;