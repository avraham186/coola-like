import React, { useEffect, useState } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { add_new_content, arrow_down, group } from "../../assets/images/icons";
import user_icon from "../../assets/images/home-page-imgs/user_icon.png";
import { Link } from "react-router-dom";

const colorStatus = {
  STARTED: "#7EB3FF",
  DELAY: "#FFA39C",
  COMPLETED: "#69EB7D",
  IN_PROCESS: "#FFC474",
};
const status = {
  STARTED: "חדש",
  DELAY: "באיחור",
  COMPLETED: "הושלם",
  IN_PROCESS: "בתהליך",
};
const namePriority = { HIGH: "גבוהה", MEDIUM: "בינונית", LOW: "נמוכה" };

const TaskList = ({ match }) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.entities.projects);
  const { projectId } = match.params;
  const isMatchTask = (id) => id === parseInt(projectId);

  useEffect(() => {
    dispatch(loadProjects());
  }, [match.params.projectId]);

  const allTasks = () =>
    projects.list.reduce(
      (p, { id, tasks }) => (isMatchTask(id) ? [...p, ...tasks] : p),
      []
    );

  return (
    <div className="task-list">
      <div className="actions-task">
        <Link id="add-new-task" to={`/projects/task/new-task/${projectId}`}>
          <img src={add_new_content} alt="add-new-content" />
          <p>הוספת משימה חדשה</p>
        </Link>
        <Link id="change-view" to="">
          <img src={group} alt="change-view" />
          <p>שינוי תצוגה</p>
          <img src={arrow_down} alt="arrow-down" />
        </Link>
      </div>
      <table className="projects-table">
        <thead>
          <tr className="projects-row ">
            {[
              "",
              "שם המשימה",
              "עדיפות",
              "מנהל",
              "מוקצים למשימה",
              "תאריך יעד",
              "תקציר",
              "סטטוס",
            ].map((header, key) => (
              <th className="row-item" key={key}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allTasks().map((task) => {
            const color = colorStatus[task.taskStatus];
            const priority = task.taskPriority === "HIGH";
            return (
              <tr className="projects-row" key={task.id}>
                <td id="label-task" style={{ background: color }}></td>
                <td>
                  <p>{task.title}</p>
                </td>
                <td
                  style={
                    priority
                      ? {
                          background: "#6D49AC",
                          color: "white",
                          width: "100px",
                        }
                      : { width: "100px" }
                  }
                >
                  <p>{namePriority[task.taskPriority]}</p>
                </td>
                <td>
                  <img
                    src={user_icon}
                    alt={task.admin}
                    style={{ width: "2.5em" }}
                  />
                </td>
                <td>
                  <div className="ppl-assigned">
                    {task.team?.map(({ firstName, lastName }, key) => {
                      const name = `${firstName} ${lastName}`;
                      return <img key={key} src={user_icon} alt={name} />;
                    })}
                  </div>
                </td>
                <td>
                  <p>{task.startDate}</p>
                  <p>{task.endDate}</p>
                </td>
                <td>
                  <p>{task.description?.slice(0, 30)}...</p>
                </td>
                <td style={{ background: color, width: "15%" }}>
                  <p>{status[task.taskStatus]}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
