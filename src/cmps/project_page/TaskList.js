import React, { useEffect } from "react";
import "./project_page.css";
import taskDAL from "../../adapters/TMS/tasksDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { getProjById } from '../../store/projects';

const TaskList = ({ match }) => {
    // debugger;
    // const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.entities.projects);

    useEffect(() => {
        loadTasks();
        console.log('match.params.projectId', match.params.projectId);

    }, [match.params.projectId]);

    const loadTasks = async () => {
        const { projectId } = match.params;
        taskDAL.getAllTasks(projectId).then((res) => console.log(res));
        // console.log('tasks', tasks);
        // const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    };
    return (
        <table className="projects-table">
            <tr className="projects-row ">
                <th className="row-item">שם המשימה</th>
                <th className="row-item">עדיפות</th>
                <th className="row-item">מנהל</th>
                <th className="row-item">מוקצים למשימה</th>
                <th className="row-item">תאריך יעד</th>
                <th className="row-item">תקציר</th>
                <th className="row-item">סטאטוס</th>
                <th className="row-item">+</th>
            </tr>
            {projects.list.map((v, i) => {
                return (
                    <tr className="projects-row">
                        <td>
                            <Paper elevation={3} className="row-item">
                                {v.projectName}
                            </Paper>
                        </td>
                        {/* <td><Paper elevation={3} className="row-item" >
                                {v.startDate}
                            </Paper></td>  יש צורך?*/}
                        <td>
                            {" "}
                            <Paper elevation={3} className="row-item">
                                {v.maneger}
                            </Paper>
                        </td>
                        {/* <td> <Paper elevation={3} className="row-item" >
                                {v.(מוקצים למשימה)}
                            </Paper></td> */}
                        <td>
                            {" "}
                            <Paper elevation={3} className="row-item">
                                {v.endDate}
                            </Paper>
                        </td>
                        <td>
                            <Paper elevation={3} className="row-item">
                                {v.description}
                            </Paper>
                        </td>
                        <td>
                            <Paper elevation={3} className="row-item">
                                {v.projectStatus}
                            </Paper>
                        </td>
                    </tr>
                );
            })}
        </table>
    );
};

export default TaskList;