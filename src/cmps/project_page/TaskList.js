import React, { useEffect } from "react";
import "./project_page.css";
import taskDAL from "../../adapters/TMS/tasksDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { getProjById } from '../../store/projects';
import { Link } from "react-router-dom";

const TaskList = ({ match }) => {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.entities.projects);
    const { projectId } = match.params;
    const projectIdx = (project) => project.id === +projectId

    useEffect(() => {
        dispatch(loadProjects())
    }, [match.params.projectId]);

    return (
        <div className="task-list">
            <Link to={`/projects/task/new-task/${projectId}`}>Add New Task</Link>
            {/* <Link to="/projects/task/new-task">Add New Task</Link> */}
            <table className="projects-table">
                <thead>
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
                </thead>
                <tbody>
                    {projects.list[projects.list.findIndex(projectIdx)].tasks.map((task) => {
                        return (
                            <tr className="projects-row" key={task.id}>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.title}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.taskPriority}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.adminTask?.map((admin) => {
                                            return <span>{admin}</span>
                                        })}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.team.map((member) => {
                                            return <span>{member}</span>
                                        })}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.startDate}
                                    </Paper>
                                    -
                                    <Paper elevation={3} className="row-item">
                                        {task.endDate}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.description}
                                    </Paper>
                                </td>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.taskStatus}
                                    </Paper>
                                </td>
                                <td></td>






                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;