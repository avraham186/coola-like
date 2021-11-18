import React, {useEffect} from "react";
import {loadProjects} from "../../store/projects";
import {useDispatch, useSelector} from "react-redux";
import {Paper} from "@material-ui/core";
import {Link} from "react-router-dom";

const TaskList = ({match}) => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.entities.projects);
    const {projectId} = match.params;
    const projectIdx = (project) => project.id === +projectId;

    useEffect(() => {
        dispatch(loadProjects());
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
                {projects.list[projects.list.findIndex(projectIdx)].tasks.map(
                    (task) => {
                        return (
                            <tr className="projects-row" key={task.id}>
                                <td>
                                    <Paper elevation={3} className="row-item">
                                        {task.title}
                                    </Paper>
                                </td>
                                <td>
                                    {task.taskPriority && <Paper elevation={3} className="row-item">
                                        {task.taskPriority}
                                    </Paper>}

                                </td>
                                <td>
                                    {task.adminTask &&
                                    <Paper elevation={3} className="row-item">
                                        {task.adminTask?.map((admin) => {
                                            return <span>{admin}</span>;
                                        })}
                                    </Paper>
                                    }
                                </td>
                                <td>
                                    {task.team.length &&
                                    <Paper elevation={3} className="row-item">

                                        {task.team.map((member) => {
                                            return <span className="flex"
                                                         style={{gap: '5px'}}>{member.firstName}&nbsp;{member.lastName}</span>;
                                        })}
                                    </Paper>
                                    }
                                </td>
                                <td>
                                    {task.startDate &&
                                    <Paper elevation={3} className="row-item">
                                        {task.startDate}
                                    </Paper>
                                    }
                                    {task.endDate &&
                                    <Paper elevation={3} className="row-item">
                                        {task.endDate}
                                    </Paper>
                                    }
                                </td>
                                <td>
                                    {task.description &&
                                    <Paper elevation={3} className="row-item">
                                        {task.description}
                                    </Paper>
                                    }
                                </td>
                                <td>
                                    {task.taskStatus &&
                                    <Paper elevation={3} className="row-item">
                                        {task.taskStatus}
                                    </Paper>
                                    }
                                </td>
                                <td></td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
