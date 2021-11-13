import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { user, v_sign, close_sign } from "../../../assets/images/icons";
import { adi, stav, iris, shimon } from "../../../assets/images/founders-imgs";

const imgUsers = [adi, stav, iris, shimon];

const projectData = {
  projectName: "",
  startDate: "",
  endDate: "",
  adminProject: [],
};

function AddNewProject({ toggleLinks, setToggleLinks }) {
  const [open, setOpen] = React.useState(false);
  const [newProjData, setNewProjData] = useState(projectData);

  useEffect(() => {
    console.log(newProjData);
  }, [newProjData]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewProjData({
      ...newProjData,
      [name]: value,

      // Trimming any whitespace
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProjData);
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
        <div className="newProj-container">
          <input 
           placeholder="שם הפרויקט" 
           type="text"
           name="title"
           value={newProjData.projectName}
           onChange={handleChange}/>
          {/* <h2> {newProjData.projectName} </h2> */}

          <div>
            <h4>תאריך התחלה וסיום</h4>
            <label>
              <input type="checkbox" />
              הגדרת פרוייקט שנתי
            </label>
            <br />

            <div className="input-date">
              <label>
                <input type="checkbox" />
                תאריך התחלה
                <br />
                <input 
                type="date" 
                name="startDate"
                value={newProjData.startDate}
                onChange={handleChange}
                />
              </label>
              <br />

              <label>
                <input type="checkbox" />
                תאריך סיום
                <br />
                <input 
                 type="date" 
                 name="endDate"
                 value={newProjData.endDate}
                 onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className="assigned-task">
            <h4> מוקצים למשימה </h4>
            {/* <AssignedTask areAssigned={pplAssigned} /> */}
          </div>

          <div className="submit-task">
            <button className="save-btn" onClick={handleSubmit}>
              שמור וסגור
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default AddNewProject;
