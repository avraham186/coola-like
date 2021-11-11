import React, { useState, useEffect, useRef } from "react";

import AreaSerch from "./AreaSearch";
import Categories from "./Categories";
import TypeOfJob from "./TypeOfJob";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const initialNewPositionFormData = {
    JobTitle: "",
    Location: "",
    Categories: [],
    AreaSearch: [],
    TypeOfJob: [],
    Description:"",
    Requirements: "",
    Link: "",
  }


export default function NewPositionForm({
  toggleUserPermissions,
  setToggleUserPermissions,
}) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialNewPositionFormData);
  
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  useEffect(()=>{
    console.log(formData)
  },[formData])
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,

      // Trimming any whitespace
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  useEffect(() => {
    toggleUserPermissions && setOpen((p) => !p);
  }, [toggleUserPermissions]);

  return (
    <Modal
      open={open}
      onClose={() =>
        setToggleUserPermissions((p) => ({
          ...p,
          toggleUserPermissions: !p.toggleUserPermissions,
        }))
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="boxStyle">
        <div className="newPosition-container">
          <form action="">
            <label className="event-title">
              כותרת המשרה
              <br />
              <input
                type="text"
                name="JobTitle"
                value={formData.EventTitle}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="event-title">
              מיקום <br />
              <input
                type="text"
                name="Location"
                value={formData.Location}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              תחום
              <br />
              <Categories setFormData={setFormData} />
            </label>
            <br />
            <label>
              אזור
              <br />
              <AreaSerch setFormData={setFormData}/>
            </label>
            <br />
            <label>
              סוג המשרה
              <br />
              <TypeOfJob setFormData={setFormData} />
            </label>
            <br />

            <label className="Description">
              תיאור
              <br />
              <textarea
                name="Description"
                // value={formData.Description}
                id=""
                cols="40"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </label>
            <br />

            <label className="Description">
              דרישות
              <br />
              <textarea
                name="Requirements"
                // value={formData.Requirements}
                id=""
                cols="40"
                rows="5"
                onChange={handleChange}
              ></textarea>
            </label>
            <br />

            <label className="link-To-Linkedin">
              קישור לעמוד המשרה
              <br />
              <input
                type="text"
                name="Link"
                value={formData.Link}
                placeholder="www.linkedin//shaharpolak"
                onChange={handleChange}
              />
            </label>
            <br />
            <div className="submit-btn">
              <button className="save-btn" onClick={handleSubmit}>
                העלה משרה
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}
