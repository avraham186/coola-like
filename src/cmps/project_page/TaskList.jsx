import React, { useEffect, useState } from "react";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { add_new_content, arrow_down, group } from "../../assets/images/icons";
import user_icon from "../../assets/images/home-page-imgs/user_icon.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
  const [project_name, setProject_name] = useState("");

  const isMatchTask = (id) => id === parseInt(projectId);
  let history = useHistory();

  useEffect(() => {
    dispatch(loadProjects());
  }, [match.params.projectId]);

  useEffect(() => {
    let id = parseInt(match.params.projectId);
    let project = projects.list.find((x) => x.id === id);
    setProject_name(project.projectName);
  }, []);

  const allTasks = () =>
    projects.list.reduce(
      (p, { id, tasks }) => (isMatchTask(id) ? [...p, ...tasks] : p),
      []
    );

  function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split("");
    var ddChars = dd.split("");

    return `${ddChars[1] ? dd : "0" + ddChars[0]}.${
      mmChars[1] ? mm : "0" + mmChars[0]
    }.${yyyy}`;
  }

  const handleRowClick = (task) => {
    history.push({
      pathname: `/projects/task/new-task/${task.id}`,
      state: task,
    });
    // history.push(`/projects/task/new-task/${task.id}`);
  };

  return (
    <div className="task-list">
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "47px",
          textAlign: "right",
        }}
      >
        {project_name}{" "}
      </p>
      <div className="actions-task" style={{ margin: "10px" }}>
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

      <table className="projects-table" style={{ marginTop: "50px" }}>
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
              <tr
                className="projects-row"
                key={task.id}
                onClick={() => {
                  handleRowClick(task);
                }}
              >
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
                          width: "120px",
                        }
                      : { width: "12%" }
                  }
                >
                  <p>{namePriority[task.taskPriority]}</p>
                </td>
                <td style={{ width: "7%" }}>
                  <img
                    src={user_icon}
                    alt={task.admin}
                    style={{ width: "2.5em" }}
                  />
                </td>
                <td style={{ width: "12%" }}>
                  <div className="ppl-assigned">
                    {task.team?.map(({ firstName, lastName }, key) => {
                      const name = `${firstName} ${lastName}`;
                      return <img key={key} src={user_icon} alt={name} />;
                    })}
                  </div>
                </td>
                <td style={{ width: "10%" }}>
                  <p>{convertDate(new Date(task.endDate))}</p>
                </td>
                <td>
                  <p>{task.description?.slice(0, 30)}...</p>
                </td>
                <td style={{ background: color, width: "10%" }}>
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
