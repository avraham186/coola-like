import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../../store/projects";
import { MissionLineChart } from "./MissionLineChart";
import { MissionPieChart } from "./MissionPieChart";
import { AllTasksPieChart } from "./AllTasksPieChart";
import taskDAL from "../../../adapters/TMS/tasksDAL";

export const DashBoard = () => {
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
    console.log(data());
    dispatch(loadProjects());
    const taskstoState = await taskDAL.getAllTasks();
    setTasks(taskstoState);
  }, []);

  useEffect(() => {
    console.log(data());
  }, []);

  const total = projects.list.length;
  const statusOptions = [
    "COMPLETED",
    "STARTED",
    "IN_PROCESS",
    "CANCELED",
    "DELAY",
  ];

  return (
    <div>
      <div
        className="dash-board-headline flex justify-center align-center space-between"
        style={{
          position: "absolute",
          width: "1240px",
          height: "128px",
          left: "87px",
          top: "18px",
          background: "#FFFFFF",
          borderRadius: "20px",
        }}
      >
        <span style={{ textAlign: "center", paddingLeft: "30px" }}>
          <h3 style={{ marginBottom: 0 }}>
            {data()["CANCELED"] ? data()["CANCELED"] : 0}
          </h3>
          בוטל
        </span>
        <span style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: 0 }}>
            {" "}
            {data()["DELAY"] ? data()["DELAY"] : 0}
          </h3>
          באיחור
        </span>
        <span style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: 0 }}>
            {" "}
            {data()["IN_PROCESS"] ? data()["IN_PROCESS"] : 0}
          </h3>{" "}
          בתהליך
        </span>
        <span style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: 0 }}>
            {" "}
            {data()["COMPLETED"] ? data()["COMPLETED"] : 0}
          </h3>{" "}
          הושלמו
        </span>
        <span style={{ textAlign: "center", paddingRight: "30px" }}>
          <h3 style={{ marginBottom: 0 }}>
            {" "}
            {projects.list.length ? projects.list.length : 0}
          </h3>{" "}
          פרויקטים סה"כ
        </span>
      </div>
      <div className="line-chart">
        <MissionLineChart projects={projects} tasks={tasks} />
      </div>
      <div className="pie-Tasks-chart">
        <AllTasksPieChart projects={projects} tasks={tasks} />
      </div>
      <div className="pie-chart">
        <MissionPieChart projects={projects} />
      </div>
    </div>
  );
};
