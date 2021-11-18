import React, {useEffect, useState} from "react";
import EmptyProjects from "../cmps/project_page/EmptyProjects.jsx";
import ProjectsList from "../cmps/project_page/ProjectsList.jsx";
import AddNewProject from "../cmps/project_page/sideBarAdmin/AddNewProject.jsx";
import NewSideBar from "../cmps/project_page/sideBarAdmin/NewSideBar.jsx";
import {MdOutlineAddToPhotos} from "react-icons/md";

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
        <div className="flex justify-center " style={{gap: "30px"}}>
            <div>
                {/* <div className="flex" style={{ direction: "rtl", gap: "15px" }}>
          <h1 className="page-title">לוח ניהול כללי</h1> */}
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
                    <MdOutlineAddToPhotos style={{margin: "0 5px"}}/>
                </button>
                {/* </div> */}
                <br/>
                <br/>
                {!projects ? <EmptyProjects/> : <ProjectsList rows={projects}/>}
                {open ? (
                    <AddNewProject
                        toggleLinks={toggleLinks}
                        setToggleLinks={setToggleLinks}
                    />
                ) : null}
            </div>
            <NewSideBar
                addProjToggle={addProjToggle}
                setAddProjToggle={setAddProjToggle}
            />
        </div>
    );
};

export default ProjectPage;