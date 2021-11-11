import React, { useState, useEffect } from "react";
// import "./AddNewEvent.scss";
import Categories from "../NewPosition/Categories";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const initialEventData = {
  EventTitle: "",
  Date: "",
  Time: "",
  Categories: [],
  Description: "",
  File: "",
  Link: "",
};

function AddNewEvent({ toggleUserPermissions, setToggleUserPermissions }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialEventData);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
        <div className="adding-job-container">
          <form action="adding-job">
            <label className="event-title">
              כותרת הארוע
              <br />
              <input
                type="text"
                value={formData.EventTitle}
                name="EventTitle"
                onChange={handleChange}
              />
            </label>

            <label className="data-and-time">
              <br />
              מועד הארוע
              <br />
              <div className="data-and-time-input">
                <input
                  type="date"
                  name="Date"
                  value={formData.Date}
                  placeholder="dd/mm/yyyy"
                  onChange={handleChange}
                />
                <input
                  type="time"
                  name="Time"
                  value={formData.Time}
                  placeholder="00:00"
                  onChange={handleChange}
                />
              </div>
            </label>

            <label>
              תחום
              <br />
              <Categories setFormData={setFormData} />
              {/* <option value="1"><input type="checkbox" checked={} /></option>
            <option value="2">Test 2</option> */}
            </label>
            <br />

            <label className="Description">
              תיאור
              <br />
              <textarea
                name="Description"
                onChange={handleChange}
                id=""
                cols="40"
                rows="10"
              ></textarea>
            </label>
            <br />

            <div id="dropZone" className="add-file">
              גרור לכאן קובץ
              <label className="chooseFromPC">
                בחר מהמחשב
                <input
                  type="file"
                  name="File"
                  value={formData.File}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <br />

            <label className="link-To-Linkedin">
              קישור לעמוד הלינקדאין של המרצה
              <br />
              <input
                type="text"
                name="Link"
                value={formData.Link}
                onChange={handleChange}
                placeholder="www.linkedin//shaharpolak"
              />
            </label>
            <br />
            <div className="submit-btn">
              <button className="save-btn" onClick={handleSubmit}>
                שמור וסגור
              </button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default AddNewEvent;
