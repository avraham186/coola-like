import React, { useState, useEffect } from "react";
// import "./AddNewEvent.scss";
import Categories from "../NewPosition/Categories";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const initialEventData = {
  title: "",
  eventDate: "",
  time: "",
  Categories: [],
  description: "",
  file: "",
  link: "",
};

function AddNewEvent({toggleLinks, setToggleLinks}) {
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
    toggleLinks && setOpen((p) => !p);
  }, [toggleLinks]);

  return (
    <Modal
      open={open}
      onClose={() =>
        setToggleLinks((p) => ({
          ...p,
          toggleLinks: !p.toggleLinks,
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
                value={formData.title}
                name="title"
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
                  name="eventDate"
                  value={formData.eventDate}
                  placeholder="dd/mm/yyyy"
                  onChange={handleChange}
                />
                <input
                  type="time"
                  name="time"
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
                name="description"
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
                  name="file"
                  value={formData.file}
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
                name="link"
                value={formData.link}
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
