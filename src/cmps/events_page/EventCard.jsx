import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BiEdit } from "react-icons/bi";

const EventCard = ({ event, userIndicator }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div className="event-card">

            <Card className="card">
                <CardMedia
                    className="card-img"
                    component="img"
                    height="200px"
                    alt="founderImg"
                    image={event.img}
                />
                <Link to='\'>
                    <IconButton className="inButton" >
                        <LinkedInIcon className="inIcon" fontSize="medium" />
                    </IconButton>
                </Link>

                <CardActions className="card-footer">

                    <h2 className="date_HL">{event.date + ' ' + event.day}</h2>

                    <span className="time_HL">בשעה {event.hour}</span>

                    <h2 className="subject_HL"> {event.subject} </h2>

                    <hr />

                    <h4 className="lecture_HL">מציג: {event.lecturer} </h4>
                    {!userIndicator ?
                        <>
                            <span className="video">
                                <span className="videoIcon"></span>
                                קישור יישלח בסמוך לשעה
                            </span>

                            <input type="button" value="הירשם עכשיו" className="events-button" />
                        </>
                        :
                    <button className="editEvent-btn"
                    onClick={() => {
                      // setOpen(true);
                      // setAddProjToggle();
                      // setToggleLinks(!toggleLinks);
                    }}
                    >
                    עריכה
                    <BiEdit style={{ margin: "0 5px" }} />
                    </button>
                    }
                </CardActions>
            </Card>
        </div>
    )

}

export default EventCard