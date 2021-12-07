import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../../store/projects";
import { MissionLineChart } from "./MissionLineChart";
import { MissionPieChart } from "./MissionPieChart";
import { AllTasksPieChart } from "./AllTasksPieChart";
import taskDAL from "../../../adapters/TMS/tasksDAL";
import "../../../assets/cmps/project-page/dashboard.scss";
import { ManagementChart } from "./ManagementChart";

export const DashBoard = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.entities.projects);
  const [tasks, setTasks] = useState();

  const data = () => {
    let allProjects = {};

    projects.list.map((project) => {
      if (allProjects[project.projectStatus]) {
        allProjects[project.projectStatus]++;
      } else {
        allProjects[project.projectStatus] = 1;
      }
    });
    return allProjects;
  };

  useEffect(async () => {
    console.log(projects);
    dispatch(loadProjects());
    const taskstoState = await taskDAL.getAllTasks();
    setTasks(taskstoState);
  }, []);

  const statusOptions = [
    { eng: "DELAY", heb: "באיחור" },
    { eng: "CANCELED", heb: "בוטלו" },
    { eng: "IN_PROCESS", heb: "באיחור" },
    { eng: "STARTED", heb: "בתהליך" },
    { eng: "COMPLETED", heb: "הושלמו" },
  ];

  return (
    <div>
      <div
        className="dash-board-headline flex justify-center align-center space-between"
        style={{
          position: "absolute",
          width: "88%",
          height: "128px",
          left: "70px",
          top: "18px",
          background: "#FFFFFF",
          borderRadius: "20px",
        }}
      >
        {statusOptions.map((status, index) => {
          return (
            <span
              key={index}
              style={{
                textAlign: "center",
                paddingLeft: "30px",
              }}
            >
              <h3 style={{ marginBottom: 0 }}>
                {data()[status.eng] ? data()[status.eng] : 0}
              </h3>
              {status.heb}
            </span>
          );
        })}
        <span style={{ textAlign: "center", paddingRight: "30px" }}>
          <h3 style={{ marginBottom: 0 }}>
            {" "}
            {projects.list.length ? projects.list.length : 0}
          </h3>{" "}
          פרויקטים סה"כ
        </span>
      </div>
      {props.showDashboard && (
        <div>
          <div className="line-chart">
            <MissionLineChart projects={projects} tasks={tasks} />
          </div>
          <div className="allTasks">
            <AllTasksPieChart projects={projects} tasks={tasks} />
          </div>
          <div className="pie-chart">
            <MissionPieChart projects={projects} />
          </div>
          <div className="management-chart">
            <ManagementChart projects={projects} />
          </div>
        </div>
      )}
    </div>
  );
};
