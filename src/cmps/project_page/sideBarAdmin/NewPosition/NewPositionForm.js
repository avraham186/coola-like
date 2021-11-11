import React, { useState, useEffect } from "react";

import AreaSerch from "./AreaSearch";
import Categories from "./Categories";
import TypeOfJob from "./TypeOfJob";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export default function NewPositionForm({toggleUserPermissions, setToggleUserPermissions}) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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
              כותרת הארוע
              <br />
              <input type="text" />
            </label>
            <br />

            <label className="event-title">
              מיקום <br />
              <input type="text" />
            </label>
            <br />

            <label>
              תחום
              <br />
              <Categories />
            </label>
            <br />
            <label>
              אזור
              <br />
              <AreaSerch />
            </label>
            <br />
            <label>
              סוג המשרה
              <br />
              <TypeOfJob />
            </label>
            <br />

            <label className="Description">
              תיאור
              <br />
              <textarea name="" id="" cols="40" rows="10"></textarea>
            </label>
            <br />

            <label className="Description">
              דרישות
              <br />
              <textarea name="" id="" cols="40" rows="10"></textarea>
            </label>
            <br />

            <label className="link-To-Linkedin">
              קישור לעמוד המשרה
              <br />
              <input type="text" placeholder="www.linkedin//shaharpolak" />
            </label>
            <br />
            <div className="submit-btn">
              <button className="save-btn">העלה משרה</button>
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}
