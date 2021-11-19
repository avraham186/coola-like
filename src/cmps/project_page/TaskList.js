import React, { useEffect, useState } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { add_new_content } from '../../assets/images/icons'
import user_icon from '../../assets/images/home-page-imgs/user_icon.png'
import { Link } from "react-router-dom";

const rg = ['#FFC474', '#FFA39C', '#69EB7D']
const status = { STARTED: 'חדש', DELAY: 'באיחור', COMPLETED: 'הושלם', IN_PROCESS: 'בתהליך' }
const TaskList = ({ match }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.entities.projects);
  const { projectId } = match.params;
  const isMatchTask = id => id === parseInt(projectId);

  useEffect(() => {
    dispatch(loadProjects());
  }, [match.params.projectId]);

  const allTasks = () => projects.list.reduce((p, { id, tasks }) => isMatchTask(id) ? [...p, ...tasks] : p, [])

  return (
    <div className="task-list">
      <div id="add-new-task">
        <img src={add_new_content} alt="add-new-content" />
        <Link to={`/projects/task/new-task/${projectId}`}>
          הוספת משימה חדשה
        </Link>
      </div>
      <table className="projects-table">
        <thead>
          <tr className="projects-row ">
            <th className="row-item"></th>
            <th className="row-item">שם המשימה</th>
            <th className="row-item">עדיפות</th>
            <th className="row-item">מנהל</th>
            <th className="row-item">מוקצים למשימה</th>
            <th className="row-item">תאריך יעד</th>
            <th className="row-item">תקציר</th>
            <th className="row-item">סטטוס</th>
          </tr>
        </thead>
        <tbody>
          {allTasks().map(task => {
            const color = rg[Math.floor(Math.random() * (2 - 0 + 1))]
            const priority = task.taskPriority === 'HIGH';
            return (
              <tr className="projects-row" key={task.id}>
                <td id='label-task' style={{ background: color }}></td>
                <td>
                  <p>{task.title}</p>
                </td>
                <td style={priority ? { background: '#6D49AC', color: 'white' } : {}} >
                  <p>{task.taskPriority}</p>
                </td>
                <td>
                  {task.adminsTask?.map(admin => <span>{admin}</span>)}
                </td>
                <td >
                  <div className='ppl-assigned'>
                    {
                      task.team?.map(
                        ({ firstName, lastName }) => {
                          const name = `${firstName} ${lastName}`;
                          return <>
                            <img
                              src={user_icon} alt={name}
                              data-content={name}
                            />
                          </>
                        })
                    }
                  </div>
                </td>
                <td>
                  <p>{task.startDate}</p>
                  <p>{task.endDate}</p>
                </td>
                <td>
                  <p>{task.description?.slice(0, 30)}</p>
                </td>
                <td style={{ background: color, width: '15%' }}>
                  <p >{status[task.taskStatus]}</p>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </div >
  );
};

export default TaskList;
