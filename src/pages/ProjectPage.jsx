import React, { useEffect, useState } from "react";
import EmptyProjects from "../cmps/project_page/EmptyProjects.jsx";
import ProjectsList from "../cmps/project_page/ProjectsList.jsx";
import AddNewProject from "../cmps/project_page/sideBarAdmin/AddNewProject.jsx";
import NewSideBar from "../cmps/project_page/sideBarAdmin/NewSideBar.jsx";
import { DashBoard } from "../cmps/project_page/dashboard/DashBoard";
import { add_new_content } from "../assets/images/icons";
// import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import CreateNewProject from "../cmps/project_page/CreateNewProject.jsx";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [addProjToggle, setAddProjToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [showAllDashboard, setShowAllDashboard] = useState(false);
  const [listOrCompleted, setListOrCompleted] = useState(false)

  useEffect(() => {
    if (listOrCompleted) {
      projects.filter(project => project.projectStatus === "COMPLETED")
    }
  }, [listOrCompleted])

  useEffect(() => {
    if (addProjToggle) {
      setToggleLinks(true);
    }
    if (!toggleLinks) {
      setAddProjToggle((p) => !p);
    }
  }, []);
  const listDivClassName = () => {
    if (listOrCompleted) {
      return ""
    } else {
      return showAllDashboard ? "projectDown" : "projectUp"
    }
    
  }
  return (
    <div
      className="project-page-main flex"
      style={{ gap: "30px", width: "100%" }}
    >
      <div style={{ width: "100%" }}>
        <NewSideBar
          addProjToggle={addProjToggle}
          setAddProjToggle={setAddProjToggle}
          setListOrCompleted={setListOrCompleted}
        />
        <CreateNewProject setOpen={setOpen} setAddProjToggle={setAddProjToggle}
          setToggleLinks={setToggleLinks} toggleLinks={toggleLinks} />
        {!listOrCompleted && <div
          className={
            showAllDashboard ? "show-all-dash-board" : "not-all-dash-board"
          }
        >
          <DashBoard showDashboard={showAllDashboard} />
          <div className={showAllDashboard ? "planTop" : "planUp"}>
            {showAllDashboard ? (
              <BsChevronDoubleUp
                onClick={() => {
                  setShowAllDashboard(!showAllDashboard);
                }}
              />
            ) : (
              <BsChevronDoubleDown
                onClick={() => {
                  setShowAllDashboard(!showAllDashboard);
                }}
              />
            )}
            <p style={{ marginTop: "auto" }}>
              {showAllDashboard ? " צמצם חלונית" : "הרחב חלונית"}
            </p>
          </div>
        </div>}
        {/* <div className={showAllDashboard ? "projectDown" : "projectUp"}> */}
        <div className={listDivClassName()}>
          {!projects ? <EmptyProjects /> : <ProjectsList rows={projects} listOrCompleted={listOrCompleted} />}
          {open ? (
            <AddNewProject
              toggleLinks={toggleLinks}
              setToggleLinks={setToggleLinks}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
