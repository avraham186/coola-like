import React, { useState, useEffect } from "react";
import "./JobDescription.css";
import { Card } from "@mui/material";
import DESCRIPTION from "../JobsData/JobsData";
import { CardHeader } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import RoomIcon from "@mui/icons-material/Room";
import IconButton from "@mui/material/IconButton";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// const initialJobType = <div>
//     {DESCRIPTION.map(data => (
//       <p>{data.jobType}</p>))}
// </div>

const JobDescription = ({ data: { title, description, email, jobType } }) => {
  return (
    <div className="job-description">
      <div className="job-title">
        <h3>{title}</h3>
      </div>

      <CardHeader
        className="header"
        title={
          <IconButton className="type">
            <BusinessCenterIcon className="business-icon" />
            <p>{title}</p>

            <IconButton className="location">
              <RoomIcon className="room-icon" />
              <p>{email}</p>
            </IconButton>
          </IconButton>
        }
      ></CardHeader>

      <CardContent className="content">
        <p>{description}</p>
        
     
      </CardContent>
    </div>
  );
};

export default JobDescription;
