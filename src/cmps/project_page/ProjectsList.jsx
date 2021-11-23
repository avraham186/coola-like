import React, { useEffect, useState } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { ProjectPreview } from "./ProjectPreview.jsx";


const ProjectsList = ({rows}) => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)

    useEffect(() => {
        dispatch(loadProjects());
        
    }, []);

    useEffect(()=>{
        console.log("ProjectList projects: ",rows);
    },[projects]);

    return (


        <div style={{ direction: "rtl" }}>

            <table className="projects-table">

                <thead>
                    <tr className="projects-row ">
                        <th></th>
                        <th className="row-item">שם הפרויקט</th>
                        <th className="row-item">סטטוס</th>
                        <th className="row-item">תאריך התחלה וסיום</th>
                        <th className="row-item">השלמת המשימה</th>
                        <th className="row-item">משימות שהושלמו</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>


                    {
                        projects.list.map((project) => (
                            <ProjectPreview project={project} key={project.id} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsList;
