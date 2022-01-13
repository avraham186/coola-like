import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";
import { useDispatch } from 'react-redux'
import { deleteEventById } from '../../store/events.js';

const EventCard = ({ event, adminIndicator }) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    const [deleteConfirmString, setDeleteConfirmString ] = useState("")
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })

    const handleDelete = ()=>{
        
        if(deleteConfirm)
        deleteConfirmString === event.lecturer?
        (
            setOpen(false)
            &&
            setDeleteConfirm(false)
            // unMark when Backend connections is ready
            // &&
            // dispatch(deleteEventById(event._id)) 
        )
        :
        console.log("error! fill the lecturer name!")
       
    }
    
    return (

        <div className="event-card">
            {open?
                        <Modal
                        className="modals"
                        open={open}
                        onClose={() => {
                            setOpen(false);
                            setDeleteConfirm(false)
                            setDeleteConfirmString(null)}
                        }
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="boxStyle editEvent-box">
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
                            

                            {deleteConfirm &&
                            <label htmlFor=""> מטעמי בטיחות, הקלד את שם המרצה בעברית
                                <input type="text"
                                       style={deleteConfirm &&
                                         {"border":"1px red solid"}
                                        }
                                       name="confirm_delete"
                                       onChange={e => setDeleteConfirmString(e.target.value)}
                                       value={deleteConfirmString}
                                   />
                            </label>
                            }

                            <div className="card-btns">
                            <button className="save-modal-button btn-save"
                                onClick={() => {
                                    setToggleMode(
                                    //edit the event details
                                ); setOpen(false)}}>
                                שמור וסגור
                            </button>
                            <button 
                                className="save-modal-button btn-delete"
                                onClick={()=>
                                    {
                                    setDeleteConfirm(true);
                                    handleDelete();
                                    }
                                }
                                >
                                מחק אירוע
                            </button>
                            </div>

                        </Box>
                    </Modal>
                    : null}
                    
            <Card className="card">

                <CardMedia
                    className="card-img"
                    component="picture"
                    height="200px"
                    alt="founderImg"
                    image={event.img}
                />

                <Link to='\'>
                    <IconButton className="inButton" >
                        <LinkedInIcon className="inIcon" fontSize="medium" />
                    </IconButton>
                </Link>

                <CardContent className="card-footer">

                <h2 className="date_HL">{event.date + ' ' + event.day}</h2>

                    <span className="time_HL">בשעה {event.hour}</span>
                    

                    <h2 className="subject_HL"> {event.subject} </h2>

                    <hr />

                    <h4 className="lecture_HL">מציג: {event.lecturer} </h4>

               

                <CardActions className="card-btns">

                    
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
                </CardContent>
            </Card>

        </div>
    )

}

export default EventCard