import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Description } from "../cmps/jobs/DescriptionJob";
import { JobsList } from "../cmps/jobs/JobsList";
import { SortingJobs } from "../cmps/jobs/SortingJobs";
import NewPositionForm from "../cmps/project_page/sideBarAdmin/new_position/NewPositionForm";
import { deleteJobById, loadJobs } from "../store/jobs";

const JobsPage = () => {
  ///// in the future isAdmin value will come from the server //////
  let isAdmin = false;
  /////////////////////////////////////////////
  const dispatch = useDispatch();
  const [currentJob, setCurrentJob] = useState([]);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [open, setOpen] = useState(false);
  const editJob = () => {
    console.log("this is edit job");
  };
  const removeJob = (id) => {
    console.log("this is remove job, job id", id);
    dispatch(deleteJobById(id));
    dispatch(loadJobs());
  };

  return (
    <div className="flex column justify-center">
      {open ? (
        <NewPositionForm
          open={open}
          setOpen={setOpen}
          toggleLinks={toggleLinks}
          setToggleLinks={setToggleLinks}
        />
      ) : null}
      <div className="label_div">
        <h1>לוח_משרות#</h1>
        {isAdmin && (
          <button
            onClick={() => {
              setOpen(true);
              setToggleLinks(!toggleLinks);
            }}
            className="add_new_job"
          >
            הוספת משרה חדשה
          </button>
        )}
      </div>
      <SortingJobs />
      <div className="jobs-page flex justify-center">
        <Description
          currentJob={currentJob}
          editJob={editJob}
          removeJob={removeJob}
        />
        <JobsList setCurrentJob={setCurrentJob} currentJob={currentJob} />
      </div>
    </div>
  );
};
export default JobsPage;
