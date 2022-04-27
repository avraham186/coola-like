import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import  edit_pen  from "../../assets/images/icons/edit_pen.png";
import { Box, Modal } from "@mui/material";
import CardDetails from "./CardDetails.jsx";
import AdminEditEvent from "./sub_cmps/AdminEditEvent";

const EventCard = ({ event, adminIndicator }) => {

  const [openEdit, setOpenEdit] = useState(false);
  const handleEventRegistration = () => {
    console.log(event.id)
    /**
        if (user.eventRegistration.includes(event.id)){
          user.eventRegistration.filter(e => e !== event.id)
          dispatch(updateUserEventsRegistration())
        }
        else{
            user.eventRegistration.push(event.id)
            dispatch(updateUserEventsRegistration())
        }
     *  */
  }
  const ProfileImg = () => <object height="100%" width="100%" data={event.image} type="image/svg+xml"></object>


  const [openCardInfo, setOpenCardInfo] = useState(false);

  return (
    <div className="event-card">

      <Card className="card" onClick={() => setOpenCardInfo((p) => !p)} >
        <div className="event-imgs-wraper">
          <CardMedia
            className="card-img"
            height="200px"
            children={<ProfileImg />}  
          >
            </CardMedia>
          <Link to="\" className="link-icon">
            <IconButton className="inButton">
              <LinkedInIcon className="inIcon" fontSize="medium" />
            </IconButton>
          </Link>
        </div>

        <CardActions className="card-footer">
          <h2 className="date_HL">{event.eventDate}</h2>

          <span className="time_HL">בשעה {event.eventDate.slice(2)}</span>

          <h2 className="subject_HL"> {event.subject} </h2>

          <hr />

          <h4 className="lecture_HL">מציג: {event.lector} </h4>
        </CardActions>

        <div>
          {
            !adminIndicator ? (
              <div className="bottom-card">
                <span className="video">
                  <span className="videoIcon"></span>
                  קישור יישלח בסמוך לשעה
                </span>

                <input
                  onClick={() => setOpenCardInfo(false)}
                  type="button"
                  value="הירשם עכשיו"
                  //value = {!user.eventRegistration.includes(event.id)? "בטל הרשמה" : "הירשם עכשיו"}
                  className="events-button"
                  onClick={handleEventRegistration}
                />
              </div>
          ) : (
            <div className="bottom-card">
              <button
                className="editEvent-btn flex justify-center"
                onClick={() => {
                  setOpenEdit(() => {
                    setOpenCardInfo(false)
                    return true
                  });
                }}
              >
                <img src={edit_pen} alt='edit-pen-icon' style={{ margin: "0 5px" }} />
                עריכה
              </button>
              

            </div>
          )
          }

        </div>
      </Card>

      {
      !!openCardInfo &&
      (
        <Modal open={openCardInfo} onClose={() => setOpenCardInfo((p) => !p)}>
          <Box className="boxStyle-eventsCards">
            <CardDetails event={event} eventImage={<ProfileImg />}/>
          </Box>
        </Modal>
      ) }

      {
        !!openEdit && <AdminEditEvent event={event} openEdit={openEdit} setOpenEdit={setOpenEdit} />
      }

    </div>
  );
};

export default EventCard;
