import React, { useEffect } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { ProjectPreview } from "./ProjectPreview.jsx";

const ProjectsList = () => {


    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)

    useEffect(() => {
        dispatch(loadProjects());
    }, []);

    if (!projects) return <div>Loading...</div>;
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
                    {projects.list.map((project) => (
                        <ProjectPreview project={project} key={project.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsList;
