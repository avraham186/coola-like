import React, { useState, useEffect} from 'react';
import { Box, Modal } from "@mui/material";

const AddEvent = ({open, setOpen}) => {
    
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })
    

    const [newEvent, setNewEvent] = useState({
        headline:"" ,
        date:"" ,
        category:"" ,
        lecturer:"" ,
        description: "",
        grafic: "",
        link: "",

    })
    
    useEffect(() => {
        console.log(newEvent)
    }, [newEvent])

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
                    onChange={
                        (e) => {setNewEvent(prevState => 
                            ({...prevState, [e.target.name]: e.target.value})
                            )}}
                    />
                    כותרת האירוע
                </label>
                <div className="input-date">
                    <label htmlFor="">
                        <input
                            type="date"
                            name="eventDate"
                            value={" "}
                       
                        />
                        מועד האירוע
                    </label>
                </div>
                <label htmlFor="">תחום</label>
                <select type="text" />

                <label htmlFor="">מציג
                    <input type="text" value={" "} />
                </label>

                <label htmlFor="">תיאור
                    <input type="text" value={" "} />
                </label>

                <label htmlFor="">העלאת גרפיקה
                    <input type="text" />
                </label>

                <label htmlFor="">קישור לעמוד לינקדאין של המרצה
                    <input type="text" value={" "} />
                </label>

                <div className="card-btns">
                    <button className="ad-event" 
                        onClick={() => {
                            setToggleMode();
                            setOpen(false)
                        }}>
                            הוסף אירוע וסגור
                        </button>
                    
                    <button className="save-modal-button btn-delete"
                        onClick={() => {
                            setToggleMode(
                                //edit the event details
                            ); setOpen(false)
                        }}>
                        מחק אירוע
                    </button>
                </div>
                

            </Box>
        </Modal>
    )
}

export default AddEvent