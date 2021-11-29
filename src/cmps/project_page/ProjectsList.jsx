import React, { useEffect, useState } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { ProjectPreview } from "./ProjectPreview.jsx";
import { arrow_down } from '../../assets/images/icons'

const statusSort = { DELAY: 1, STARTED: 2, IN_PROCESS: 3, COMPLETED: 4 }

const ProjectsList = () => {

//fgerhegherhr//
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)
    const [sortHeaders, setSortHeaders] = useState({ status: false, date: false })
    useEffect(() => {
        dispatch(loadProjects());
    }, []);

    const applyProjects = () => {
        const { status, date } = sortHeaders;
        const allProjects = [...projects.list];
        if (status) {
            return allProjects.sort((a, b) => statusSort[b.projectStatus] - statusSort[a.projectStatus])
        } else if (date) {
            return allProjects.sort((a, b) => b.endDate - a.endDate)
        }
        const projectCompleted = allProjects.filter(({ projectStatus }) => projectStatus === 'COMPLETED')
        const restProject = allProjects.filter(({ projectStatus }) => projectStatus !== 'COMPLETED')
        return [...restProject, ...projectCompleted];
    }

    if (!projects) return <div>Loading...</div>;
    return (
        <div style={{ direction: "rtl" }}>
            <table className="projects-table">
                <thead>
                    <tr className="projects-row ">
                        <th></th>
                        <th >שם הפרויקט</th>
                        <th >
                            סטטוס
                            {' '}
                            <img
                                src={arrow_down}
                                alt="arrow down"
                                onClick={() => setSortHeaders(p => ({ date: false, status: !p.status }))} />
                        </th>
                        <th >
                            תאריך התחלה וסיום
                            {' '}
                            <img
                                src={arrow_down}
                                alt="arrow down"
                                onClick={() => setSortHeaders(p => ({ status: false, date: !p.date }))} />
                        </th>
                        <th >השלמת המשימה</th>
                        <th >משימות שהושלמו</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applyProjects().map((project) => {
                        // if (project.projectStatus !== 'COMPLETED')
                        return < ProjectPreview project={project} key={project.id} />
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsList;
