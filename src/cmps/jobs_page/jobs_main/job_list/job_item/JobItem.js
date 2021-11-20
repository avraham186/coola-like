import React, { useState } from "react";
// import "./job_item.css";
import { Card } from "@mui/material";
import DESCRIPTION from "../../jobs_data/JobsData";

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
