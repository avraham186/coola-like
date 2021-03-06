import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { adi, iris, shimon, stav } from "../../../assets/images/founders-imgs";
import { addProject } from "../../../store/projects";

const imgUsers = [adi, stav, iris, shimon];

const projectData = {
  projectName: "",
  startDate: "",
  endDate: "",
  adminProject: [],
  description: "",
  projectStatus: "",
  projectPriority: "",
  tasks: [],
};

const statusOptions = [
  "",
  "IN_PROCESS",
  "DELAY",
  "COMPLETED",
  "STARTED",
  "CANCELED",
];

const priorityOptions = [ "","HIGH", "LOW", "MEDIUM"];

function AddNewProject({ toggleLinks, setToggleLinks }) {
  const [open, setOpen] = React.useState(false);
  const [newProjData, setNewProjData] = useState(projectData);

  useEffect(() => {
    // console.log(newProjData);
  }, [newProjData]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewProjData({
      ...newProjData,
      [name]: value,

      // Trimming any whitespace
    });
  };

  const checkSubmit = () => {
    if (
      newProjData.projectName === "" ||
      newProjData.startDate === "" ||
      newProjData.endDate === "" ||
      newProjData.projectPriority === "" ||
      // newProjData.projectPriority === "עדיפות" ||
      newProjData.description === "" ||
      newProjData.projectStatus === "" 
     
    ) {
      //  return false
      return console.log("אנא מלא את כל השדות");
    }
    //  else return true
    else {
      return handleSubmit();
    }
  };

  // }
  const handleSubmit = () => {
    dispatch(addProject(newProjData));
    setToggleLinks((p) => !p);
    console.log("newProjData", newProjData);
    // ... submit to API or something
  };

  useEffect(() => {
    setOpen((p) => !p);
    // checkSubmit()
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
        <form className="newProj-container">
          <input
            id="projectName"
            required
            placeholder="שם הפרויקט"
            type="text"
            name="projectName"
            value={newProjData.projectName}
            onChange={handleChange}
          />{" "}
          {/* <h2> {newProjData.projectName} </h2> */}
          <div>
            <h4>תאריך התחלה וסיום</h4>
            {/* <label>
              <input type="checkbox" />
              הגדרת פרוייקט שנתי
            </label>
            <br /> */}

            <div className="input-date">
              <label>
                {/* <input type="checkbox" /> */}
                תאריך התחלה
                <br />
                <input
                  required
                  type="date"
                  name="startDate"
                  value={newProjData.startDate}
                  onChange={handleChange}
                />
              </label>
              <br />

              <label>
                {/* <input type="checkbox" /> */}
                תאריך סיום
                <br />
                <input
                  required
                  type="date"
                  name="endDate"
                  value={newProjData.endDate}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              {/* <input type="checkbox" /> */}
              תיאור
              <br />
              <input
                required
                type="text"
                name="description"
                value={newProjData.description}
                onChange={handleChange}
              />
            </label>
            <br />

            <div className="status-and-priority flex">
              <label htmlFor="">סטטוס
              <select
                required
                name="projectStatus"
                onChange={handleChange}
                className="select-option"
              >
                {statusOptions.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              </label>
              <label htmlFor="">
                עדיפות
                <select
                  required
                  name="projectPriority"
                  onChange={handleChange}
                  className="select-option"
                >
                  {priorityOptions.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>
          <div className="assigned-task">
            <h4>מוקצים למשימה</h4>
            {/* <AssignedTask areAssigned={pplAssigned} /> */}
          </div>
          <div className="submit-task">
            <button
              className="btn-save"
              //  disabled={checkSubmit}
              onClick={checkSubmit}
            >
              שמור וסגור
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default AddNewProject;
