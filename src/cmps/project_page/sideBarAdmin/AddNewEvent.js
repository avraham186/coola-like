import React, { useState, useEffect } from "react";
import "./AddNewEvent.scss";
import Categories from "./Ctegories.js";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function AddNewEvent({ handleChange }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    //   <Box className="boxStyle">
    <div className="adding-job-container">
      <form action="adding-job">
        <label className="event-title">
          כותרת הארוע
          <br />
          <input type="text" />
        </label>

        <label className="data-and-time">
          <br />
          מועד הארוע
          <br />
          <div className="data-and-time-input">
            <input type="date" placeholder="dd/mm/yyyy" />
            <input type="time" placeholder="00:00" />
          </div>
        </label>

        <label>
          תחום
          <br />
          <Categories />
          {/* <option value="1"><input type="checkbox" checked={} /></option>
            <option value="2">Test 2</option> */}
        </label>
        <br />

        <label className="Description">
          תיאור
          <br />
          <textarea name="" id="" cols="40" rows="10"></textarea>
        </label>
        <br />

        <div id="dropZone" className="add-file">
          גרור לכאן קובץ
          <label className="chooseFromPC">
            בחר מהמחשב
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
        <br />

        <label className="link-To-Linkedin">
          קישור לעמוד הלינקדאין של המרצה
          <br />
          <input type="text" placeholder="www.linkedin//shaharpolak" />
        </label>
        <br />
        <div className='submit-btn'>
          <button className="save-btn">שמור וסגור</button>
        </div>
      </form>
    </div>
    /* </Box>
    </Modal> */
  );
}

export default AddNewEvent;
