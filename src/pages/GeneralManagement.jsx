import React, { useEffect, useState } from "react";
import EmptyProjects from "../cmps/project_page/EmptyProjects.jsx";
import ProjectsList from "../cmps/project_page/ProjectsList.jsx";
import AddNewProject from "../cmps/project_page/sideBarAdmin/AddNewProject.jsx";
import NewSideBar from "../cmps/project_page/sideBarAdmin/NewSideBar.jsx";
import { DashBoard } from "../cmps/project_page/dashboard/DashBoard";
import { add_new_content } from "../assets/images/icons";
import { MdOutlineAddToPhotos } from "react-icons/md";
import generalPage from "../assets/cmps/generalManagement-page/generalPage.scss";
import { EOS_CONTENT_NEW } from "eos-icons-react";
const GeneralManagment = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [addProjToggle, setAddProjToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <div className="generalManagementPage">
      <div className="generalTitle">
        <p>
          {" "}
          <h1>
            <button
              className="addProject-btn"
              onClick={() => {
                setOpen(true);
                setAddProjToggle();
                setToggleLinks(!toggleLinks);
              }}
            >
              הוספת פרוייקט חדש <EOS_CONTENT_NEW style={{ margin: "0 5px" }} />
            </button>
            לוח ניהול כללי
          </h1>
        </p>
      </div>
      <br />
      <br />

      <div className="dash-board">
        <DashBoard />
      </div>
      {/* <div className="projects">
        <ProjectsList />
      </div> */}
      <NewSideBar
        addProjToggle={addProjToggle}
        setAddProjToggle={setAddProjToggle}
      />
    </div>
  );
};

export default GeneralManagment;
