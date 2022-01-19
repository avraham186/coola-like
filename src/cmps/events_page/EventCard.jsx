import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import  edit_pen  from "../../assets/images/icons/edit_pen.png";
import { Box, Modal } from "@mui/material";
import Categories from "../project_page/sideBarAdmin/new_position/Categories";
import { erase } from "../../assets/images/icons";
import CardDetails from "./CardDetails.jsx";

const EventCard = ({ event, adminIndicator }) => {
  const [open, setOpen] = useState(false);
  const [toggleMode, setToggleMode] = useState({
    label: false,
    pplAssigned: false,
    dueDate: false,
    file: false,
  });

  const [openCardInfo, setOpenCardInfo] = useState(false);

  // const handleCardInfo = (_id) => {
  //     console.log('open modal', openCardInfo)

  //     // setOpenCardInfo(p => !p)

  //     console.log('open modal', openCardInfo)
  // }

  return (
    <div className="event-card">
      {openCardInfo ? (
        <Modal open={openCardInfo} onClose={() => setOpenCardInfo((p) => !p)}>
          <Box className="boxStyle-eventsCards">
            <CardDetails event={event} />
          </Box>
        </Modal>
      ) : null}

      {open ? (
        <Modal
          className="modals"
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <Box className="boxStyle editEvent-box"> */}
          <Box className="boxStyle">
            <div className="adding-job-container">
              <form action="adding-job">
                <label className="event-title">
                  כותרת האירוע
                  <input type="text" value={event.subject} />
                </label>
                {/* <div className="input-date"> */}
                <div className="data-and-time-input">
                  <label htmlFor="">
                    מועד האירוע
                    <input
                      type="text"
                      // className="data-and-time"
                      value={event.date + " " + event.day}
                    />
                    <input
                      // className="data-and-time"
                      type="date"
                      name="eventDate"
                      value={event.date}
                      // onChange={handleChange}
                    />
                  </label>
                </div>
                {/* <label htmlFor="">תחום</label>
                            <select type="text" /> */}
                <label>
                  {/* תחום */}
                  <br />
                  <Categories />
                  {/* <option value="1"><input type="checkbox" checked={} /></option>
            <option value="2">Test 2</option> */}
                </label>
                <br />

                <label htmlFor="">
                  מציג
                  <input type="text" value={event.lecturer} />
                </label>

                <label htmlFor="">
                  תיאור
                  <input type="text" value={event.subject} />
                </label>

                <label htmlFor="">
                  העלאת גרפיקה
                  <input type="text" />
                </label>

                <label htmlFor="">
                  קישור לעמוד לינקדאין של המרצה
                  <input
                    type="text"
                    className="link-To-Linkedin"
                    value={event.link}
                  />
                </label>

                <div className="card-btns">
                  <button
                    className="save-modal-button btn-save"
                    onClick={() => {
                      setToggleMode();
                      //edit the event details
                      setOpen(false);
                    }}
                  >
                    שמור וסגור
                  </button>
                  <button
                    className="save-modal-button btn-delete"
                    onClick={() => {
                      setToggleMode();
                      //edit the event details
                      setOpen(false);
                    }}
                  >
                    מחק אירוע
                    <img src={erase} alt="delete icon" />
                  </button>
                </div>
              </form>
            </div>
          </Box>
        </Modal>
      ) : null}

      <Card className="card" onClick={() => setOpenCardInfo((p) => !p)}>
        <div className="event-imgs-wraper">
          <CardMedia
            className="card-img"
            component="picture"
            height="200px"
            alt="founderImg"
            image={event.img}
          />
          <Link to="\" className="link-icon">
            <IconButton className="inButton">
              <LinkedInIcon className="inIcon" fontSize="medium" />
            </IconButton>
          </Link>
        </div>

        <CardActions className="card-footer">
          <h2 className="date_HL">{event.date + " " + event.day}</h2>

          <span className="time_HL">בשעה {event.hour}</span>

          <h2 className="subject_HL"> {event.subject} </h2>

          <hr />

          <h4 className="lecture_HL">מציג: {event.lecturer} </h4>
        </CardActions>

        <div>
          {!adminIndicator ? (
            <div className="bottom-card">
              <span className="video">
                <span className="videoIcon"></span>
                קישור יישלח בסמוך לשעה
              </span>

              <input
                type="button"
                value="הירשם עכשיו"
                className="events-button"
              />
            </div>
          ) : (
            <div className="bottom-card">
              <button
                className="editEvent-btn flex justify-center"
                onClick={() => {
                  setOpen(true);
                  // setAddProjToggle();
                  // setToggleLinks(!toggleLinks);
                }}
              >
                <img src={edit_pen} alt='edit-pen-icon' style={{ margin: "0 5px" }} />
                עריכה
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
