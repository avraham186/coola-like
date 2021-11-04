import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './SidebarAdmin.scss'

function SideBarAdmin() {
    const addNewProject = () => {
        
        console.log("add New Project");
      };
      const addNewEvent = () => {
        
        console.log("addNewEvent");
      };
      const addNewJob = () => {
        // props.onChooseLables()
        console.log("addNewJob");
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
    
      
      <nav className="sidebar-admin">
      <label className="arrow-icon">תפריט ניהול < AiOutlineDoubleRight /> </label>
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
   
  );
}

export default SideBarAdmin;
