import React, { useState } from "react";
// import "./JobItem.css";
import { Card } from "@mui/material";
import DESCRIPTION from "../../JobsData/JobsData";

function JobItem({ jobData: { title, jobType }, isJobClick }) {
  console.log(jobType);
  const classClicked = isJobClick
    ? { background: "aqua" }
    : { backgroundColor: "white" };

  return (

      <Card style={classClicked}>
            <div className="job-item">
        <p>{title}</p>
        <p>{jobType}</p>
        </div>
      </Card>
 
  );
}

export default JobItem;
