import React, { useState,useRef, useEffect} from 'react';
import { Box, Modal } from "@mui/material";

const AddEvent = ({open, setOpen}) => {

    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })
    
    const initState = {
        headline:"" ,
        date:"" ,
        category:"" ,
        lecturer:"" ,
        description: "",
        graphic: "",
        link: "",

    };

    const onChange = ({target:{name, value}}) =>{
        
        setNewEvent({
            ...newEvent,
            [name]: value
        })
        console.log(newEvent);
     }

    const [newEvent, setNewEvent] = useState(initState)
    
    return (

        <Modal
            className="modals"
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
           
        >
            <Box className="boxStyle editEvent-box" >
                <label htmlFor="headline">
                    <input
                    name="headline" 
                    type="text"
                    value={newEvent.headline}
                    onChange={ e => onChange(e)}
                    //     (e) => {setNewEvent(prevState => 
                    //         ({...prevState, [e.target.name]: e.target.value})
                    //         )}}
                    />
                    כותרת האירוע
                </label>
                <div className="input-date">
                    <label htmlFor="">
                        <input
                            type="date"
                            name="eventDate"
                            value={newEvent.eventDate}
                            onChange={ e => onChange(e)}
                            // onChange={
                            //     (e) => {setNewEvent(prevState => 
                            //         ({...prevState, [e.target.name]: e.target.value})
                            //         )}}
                        />
                        מועד האירוע
                    </label>
                </div>
                <label htmlFor="">תחום</label>
                <select type="text" />

                <label htmlFor="">מציג
                    <input
                        type="text"
                        name="lecturer"
                        value={newEvent.lecturer}
                        onChange={ e => onChange(e)}
                        />
                </label>

                <label htmlFor="">תיאור
                    <input
                        type="text"
                        name="description"
                        value={newEvent.description}
                        onChange={ e => onChange(e)}
                         />
                </label>

                <label htmlFor="">העלאת גרפיקה
                    <input
                        type="text"
                        name="graphic"
                        value={newEvent.graphic}
                        onChange={ e => onChange(e)}
                    />
                </label>

                <label htmlFor="">קישור לעמוד לינקדאין של המרצה
                    <input type="text"
                           name="link"
                           value={newEvent.link}
                           onChange={ e => onChange(e)}
                    />
                </label>

                <div className="card-btns">
                    <button 
                        className="ad-event" 
                        onClick={() => {
                            setToggleMode();
                            setOpen(false)
                        }}>
                            הוסף אירוע וסגור
                        </button>
                    
                    <button 
                        className="save-modal-button btn-delete"
                        onClick={() => {
                            setToggleMode(
                                //edit the event details
                            );
                            setOpen(false);
                            setNewEvent(initState)
                        }}>
                        מחק אירוע
                    </button>
                </div>
                

            </Box>
        </Modal>
    )
}

export default AddEvent