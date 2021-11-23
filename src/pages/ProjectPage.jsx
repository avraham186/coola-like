import React, { useEffect, useState } from "react";
import EmptyProjects from "../cmps/project_page/EmptyProjects.jsx";
import ProjectsList from "../cmps/project_page/ProjectsList.jsx";
import AddNewProject from "../cmps/project_page/sideBarAdmin/AddNewProject.jsx";
import NewSideBar from "../cmps/project_page/sideBarAdmin/NewSideBar.jsx";
import { DashBoard } from "../cmps/project_page/dashboard/DashBoard"
import { add_new_content } from '../assets/images/icons'
import { MdOutlineAddToPhotos } from "react-icons/md";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [addProjToggle, setAddProjToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);

  useEffect(() => {
    if (addProjToggle) {
      setToggleLinks(true);
    }
    if (!toggleLinks) {
      setAddProjToggle((p) => !p);
    }
  }, []);

  return (
    <div className="flex justify-center" style={{ flexDirection: "row-reverse", gap: '30px' }}>

      {/* <div className="flex"> */}
      <NewSideBar
        addProjToggle={addProjToggle}
        setAddProjToggle={setAddProjToggle}
      />
      {/* <div className="flex" style={{ direction: "rtl", gap: "15px" }}>
          <h1 className="page-title">לוח ניהול כללי</h1> */}

      {/* </div> */}
      <div className="flex column-reverse">

        {!projects ? <EmptyProjects /> : <ProjectsList rows={projects} />}
        {open ? (
          <AddNewProject
            toggleLinks={toggleLinks}
            setToggleLinks={setToggleLinks}
          />
        ) : null}
        <DashBoard />
        <div className="btn">
          <button
            className="addProject-btn"
            style={{
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              fontFamily: "Rubik",
              margin: "0 10px",
            }}
            onClick={() => {
              setOpen(true);
              setAddProjToggle();
              setToggleLinks(!toggleLinks);
            }}
          >
            הוספת פרוייקט חדש
            {/* <MdOutlineAddToPhotos style={{ margin: "0 5px" }} /> */}
            <img src={add_new_content} alt="add-new-content" />
          </button>
        </div>

      </div>
    </div>
    // </div>
  );
};

export default ProjectPage;
