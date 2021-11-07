import React, { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import AddNewJob from "./AddNewJob.js";
import "./SidebarAdmin.scss";

function SideBarAdmin() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [show, setshow] = useState(false);

  const handelsideBar = () => {
    setOpenSideBar(!openSideBar);
    setshow(false)
  };

  const addNewProject = () => {
    console.log("add New Project");
  };
  const addNewEvent = () => {
    console.log("addNewEvent");
  };
  const addNewJob = () => {
    if (show === false) {
      setshow(true);
    } else if (show === true) {
      setshow(false);
    }

    console.log("addNewJob", show);
  };
  const updateEventPage = () => {
    // props.onUploadFiles()
    console.log("updateEventPage");
  };
  const updateJobsPage = () => {
    // props.onRemove()
    console.log("updateJobsPage");
  };
  const changeUserPermissions = () => {
    // props.onRemove()
    console.log("changeUserPermissions");
  };
  return (
    <div className='sideBar'>
      <div className='sideBar-container'>
      {openSideBar ? (
          <div className='sidbar-left-arrow'>
        <AiOutlineDoubleLeft  onClick={handelsideBar} />
        </div>
      ) : (
        <div className="sidebar-admin-right-arrow">
          <AiOutlineDoubleRight onClick={handelsideBar} />
          <label className="arrow-icon">תפריט ניהול</label>
        </div>
      )}
      </div>

      <nav className={openSideBar ? "sidebar-admin-hidden" : "sidebar-admin"}>
        <div className="sidebar-container">
          <div className="content">
            <div className="flex" onClick={addNewProject}>
              <span> הוספת פרוייקט</span>
            </div>
            <div className="flex" onClick={addNewEvent}>
              <span>הוספת ארוע</span>
            </div>
            <div className="flex" onClick={addNewJob}>
              <span>הוספת משרה</span>
            </div>

            <div className="flex" onClick={updateEventPage}>
              <span>עדכון דף ארועים</span>
            </div>
          </div>
          <div className="flex" onClick={updateJobsPage}>
            <span>עדכון דף משרות</span>
          </div>
          <div className="flex" onClick={changeUserPermissions}>
            <span>שינוי הרשאות משתמשים</span>
          </div>
        </div>
      </nav>
      {show ? <AddNewJob /> : null}
    </div>
  );
}

export default SideBarAdmin;
