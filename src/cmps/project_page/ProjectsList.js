import React, { useEffect } from 'react';
import "./project_page.css"
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector, } from "react-redux";
import { Paper } from "@material-ui/core";
import { width } from '@mui/system';
import TaskList from "./TaskList"

const ProjectsList = () => {

    const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)

    useEffect(() => {
        dispatch(loadProjects());
        console.log(projects.list)
    }, [])
    const tasksProject = () => {
        debugger
        <TaskList></TaskList>
    }

    return (
        <table className="projects-table">
            <tr className="projects-row ">
                <th className="row-item">שם הפרויקט</th>
                <th className="row-item">סטטוס</th>
                <th className="row-item">תאריך התחלה וסיום</th>
                <th className="row-item">השלמת המשימה</th>
                <th className="row-item">משימות שהושלמו</th>
                <th></th>
            </tr>
            {
                projects.list.map((v, i) => {
                    return (
                        <tr onClick={(e) => { tasksProject() }} className="projects-row">

                            <td><Paper elevation={3} className="row-item" >
                                {v.projectName}
                            </Paper></td>
                            <td> <Paper elevation={3} className="row-item" >
                                {v.projectStatus}
                            </Paper></td>

                            <td> <Paper elevation={3} className="row-item" >
                                {v.startDate}-{v.endDate}
                            </Paper></td>
                            <td><Paper elevation={3} className="row-item" >
                            </Paper></td>
                            <td><Paper elevation={3} className="row-item" >
                            </Paper></td>
                            <td>
                                <Paper elevation={3} className="row-item" >
                                    <button onClick={deleteProject(v.id)}> <img style={{ "width": "10px" }} src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-trash-mintab-for-ios-becris-lineal-becris.png" /></button>
                                </Paper></td>

                        </tr>
                    )
                })
            }
        </table>

    )
};

export default ProjectsList;