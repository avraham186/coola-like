import React, { useState,  useEffect, useRef } from "react";
import {useDispatch} from 'react-redux';
import {addJob} from '../../../../store/jobs';
import AreaSerch from "./AreaSearch";
import Categories from "./Categories";
import TypeOfJob from "./TypeOfJob";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const initialNewPositionFormData = {
    title: "",
    location: "",
    Categories: [],
    AreaSearch: [],
    TypeOfJob: [],
    description:"",
    requirements: "",
    link: "",
  }


export default function NewPositionForm({
  toggleLinks, setToggleLinks
}) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialNewPositionFormData);
  const dispatch = useDispatch();
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  
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
    dispatch(addJob(formData));
    setOpen(false);
    };

  useEffect(() => {
    toggleLinks && setOpen((p) => !p);
    setFormData(initialNewPositionFormData)
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
        <div className="newPosition-container">
          <form action="">
            <label className="event-title">
              כותרת המשרה
              <br />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="event-title">
              מיקום <br />
              <input
                type="text"
                name="location"
                value={formData.location}
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
                name="description"
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
                name="requirements"
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
                name="link"
                value={formData.link}
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
