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
  "סטטוס",
  "IN_PROCESS",
  "DELAY",
  "COMPLETED",
  "STARTED",
  "CANCELED",
];

const priorityOptions = ["עדיפות", "HIGH", "LOW", "MEDIUM"];

function AddNewProject({ toggleLinks, setToggleLinks }) {
  const [open, setOpen] = React.useState(false);
  const [newProjData, setNewProjData] = useState(projectData);

<<<<<<< HEAD
  // useEffect(() => {
  //     console.log(newProjData);
  // }, [newProjData]);
=======
  useEffect(() => {
    console.log(newProjData);
  }, [newProjData]);
>>>>>>> 9932bc12d714337dd0c71a2d8e312a4230aee56d
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

  const handleSubmit = () => {
    //

    dispatch(addProject(newProjData));
    setToggleLinks((p) => !p);
    console.log(newProjData);
    // ... submit to API or something
  };

  useEffect(() => {
<<<<<<< HEAD
    console.log("hello");
    console.log(toggleLinks);
=======
>>>>>>> 9932bc12d714337dd0c71a2d8e312a4230aee56d
    setOpen((p) => !p);
  }, [toggleLinks]);

  return (
    <Modal
      open={open}
      onClose={() =>
        setToggleLinks((p) => ({
          ...p,
<<<<<<< HEAD
          toggleLinks: !toggleLinks,
=======
          toggleLinks: !p.toggleLinks,
>>>>>>> 9932bc12d714337dd0c71a2d8e312a4230aee56d
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
                type="text"
                name="description"
                value={newProjData.description}
                onChange={handleChange}
              />
            </label>
            <br />

            <div className="status-and-priority flex">
              <select
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

              <select
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
            </div>
          </div>
          <div className="assigned-task">
            <h4>מוקצים למשימה</h4>
            {/* <AssignedTask areAssigned={pplAssigned} /> */}
          </div>
          <div className="submit-task">
            <button className="btn-save" onClick={handleSubmit}>
              שמור וסגור
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default AddNewProject;
