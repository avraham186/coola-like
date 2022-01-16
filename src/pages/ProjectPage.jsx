import React, { useEffect, useState } from "react";
import EmptyProjects from "../cmps/project_page/EmptyProjects.jsx";
import ProjectsList from "../cmps/project_page/ProjectsList.jsx";
import AddNewProject from "../cmps/project_page/sideBarAdmin/AddNewProject.jsx";
import NewSideBar from "../cmps/project_page/sideBarAdmin/NewSideBar.jsx";
import { DashBoard } from "../cmps/project_page/dashboard/DashBoard";
import { add_new_content } from "../assets/images/icons";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [addProjToggle, setAddProjToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [showAllDashboard, setShowAllDashboard] = useState(false);
  const [listOrCompleted, setListOrCompleted] = useState(false)

  useEffect(() => {
    if (listOrCompleted) {
      projects.filter(project=>project.projectStatus==="COMPLETED")
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
        <button
          className="addProject-btn"
          style={{
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "Rubik",
            margin: "0 10px",
            direction: "rtl",
          }}
          onClick={() => {
            setOpen(true);
            setAddProjToggle();
            setToggleLinks(!toggleLinks);
          }}
        >
          הוספת פרוייקט חדש
          <MdOutlineAddToPhotos style={{ margin: "0 5px" }} />
        </button>
        <br />
        <br />
        <div
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
        </div>
        <div className={showAllDashboard ? "projectDown" : "projectUp"}>
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
