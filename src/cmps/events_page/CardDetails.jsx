import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Box, Modal } from "@mui/material";

const CardDetails = ({ event, eventImage }) => {
  const [open, setOpen] = useState(false);

  //   date: "27.10"
  // day: "יום רביעי"
  // hour: "18:00"
  // img: "/static/media/adi.1b09ea42.png"
  // lecturer: "שחר פולק"
  // link: ""
  // subject: "Nailing the tech interview"
  // tag: "cybersecurity"
  // _id: "a5a5a"

  return (
    <>
      <div className="card-details-container">
        <div className="event-section">
          <p>{event.date + " " + event.day}</p>
          <h2 className="event-title-details">{event.subject}</h2>
         
          <div className="lecture-details">
          <div className="profile-img">
          <CardMedia
            className="card-img-modal"
            height="30px"
            children={eventImage}
          />
          <Link to="\">
            <IconButton className="inButton-modal">
              <LinkedInIcon className="inIcon" fontSize="medium" />
            </IconButton>
          </Link>
          </div>
          <h4>מציג: {event.lecturer}</h4>
          </div>
          <br />

          <div className="time-and-date">
            <AccessTimeIcon />
            <p>
              {event.date + " " + event.day + " "}
              <br />
              {event.hour} בשעה
            </p>
          </div>
        </div>
        <div className="event-info">
          <h3>פרטים:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            consectetur autem nemo veritatis odio soluta maiores minus velit
            nostrum ipsam eius quo, numquam cupiditate aspernatur, officia ea
            perspiciatis quidem!
          </p>
        </div>
      </div>
      <div>
        <div className="submit-section">
          <button className="events-button-details"> הירשם עכשיו </button>
          <p>נרשמו כבר {100}</p>
        </div>
        <span className="video">
          <span className="videoIcon"></span>
          קישור יישלח בסמוך לשעה
        </span>
      </div>
    </>
  );
};

export default CardDetails;
