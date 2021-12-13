import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";

const EventCard = ({ event, adminIndicator }) => {

    const [open, setOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })

    return (

        <div className="event-card">
            {open?
                        <Modal
                        className="modals"
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="box-modal">
                            <label htmlFor="">
                                <input type="text" value={event.subject}/>
                                כותרת האירוע
                            </label>
                            <div className="input-date">
                            <label htmlFor="">
                                {/* <input type="text" value={event.date + ' ' + event.day}/> */}
                                <input
                                    type="date"
                                    name="eventDate"
                                     value={event.date}
                                    // onChange={handleChange}
                                />
                                מועד האירוע
                            </label>
                            </div>
                            <label htmlFor="">תחום</label>
                            <select type="text" />

                            <label htmlFor="">מציג
                                <input type="text" value={event.lecturer}/>
                            </label>

                            <label htmlFor="">תיאור
                                <input type="text" value={event.subject}/>
                            </label>

                            <label htmlFor="">העלאת גרפיקה
                                <input type="text" />
                            </label>

                            <label htmlFor="">קישור לעמוד לינקדאין של המרצה
                                <input type="text" value={event.link}/>
                            </label>

                            <button className="save-modal-button"
                                onClick={() => setToggleMode(
                                    //edit the event details
                                )}>
                                שמור וסגור
                            </button>
                        </Box>
                    </Modal>
                    : null}
                    
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
                    {!adminIndicator ?
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
                      setOpen(true);
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