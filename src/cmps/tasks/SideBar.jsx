import React from "react";
import { user, watch, label, files, erase } from "../../assets/images/icons";

export const SideBar = ({ setToggleMode }) => {
  const assignToMission = () => {
    setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned }));
    console.log("assigned");
  };

  const chooseEndDate = () => {
    setToggleMode((p) => ({ ...p, dueDate: !p.dueDate }));
    console.log("date choosed");
  };

  const chooseLables = () => {
    setToggleMode((p) => ({ ...p, label: !p.label }));
    console.log("lable choosed");
  };

  const uploadFiles = () => {
    setToggleMode((p) => ({ ...p, file: !p.file }));
    console.log("file upload");
  };

  const remove = () => {
    // props.onRemove()
    console.log("mission erased");
  };
  return (
    <nav className="new-task-sidebar">
      <div className="sidebar-container flex column space-between">
        <div className="content flex column space-between">
          <div className="flex" onClick={assignToMission}>
            <img src={user} alt="מוקצים למשימה" />
            &nbsp;
            <span> מוקצים למשימה</span>
          </div>
          <div className="flex" onClick={chooseEndDate}>
            <img src={watch} alt="תאריך יעד" />
            &nbsp;
            <span>תאריך יעד</span>
          </div>
          <div className="flex" onClick={chooseLables}>
            <img src={label} alt="תוויות" />
            &nbsp;
            <span>תוויות</span>
          </div>
          <div className="flex" onClick={uploadFiles}>
            <img src={files} alt="קבצים" />
            &nbsp;
            <span>קבצים</span>
          </div>
        </div>
        <div className="erase flex">
          <div className="flex" onClick={remove}>
            <img src={erase} alt="מחיקה" />
            &nbsp;
            <span>מחיקה</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
