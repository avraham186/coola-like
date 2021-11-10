import React, { useEffect, useState } from "react";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";

const ProjectsList = () => {
  const deleteProject = async (id) => await projectsDAL.deleteProject(id);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.entities.projects);
  const [finishedTasks, setState] = useState();
  useEffect(() => {
    dispatch(loadProjects());
    console.log(projects.list);
    getFinishProj();
  }, []);

  const getFinishProj = () => {
    const finishedTasks = projects.list.reduce(
      (acc, project) => {
        acc["taskCount"] += project.tasks.length;
        project.tasks.forEach((task) => {
          if (task.taskStatus === "COMPLETED") {
            acc["taskCountDone"]++;
          }
        });
        return acc;
      },
      { taskCount: 0, taskCountDone: 0 }
    );
    setState(finishedTasks);
  };

  return (
    <div className="projects-table">
      <div className="project-title flex">
        <p>שם הפרוייקט</p>
        <p>סטאטוס</p>
        <p>תאריך התחלה וסיום</p>
        <p>השלמת משימות</p>
        <p>משימות שהושלמו</p>
      </div>
      {projects.list.map((v, i) => {
        return (
          <div className="projects-row">
            {/* <Paper elevation={3} className="row-item" > */}
            {v.projectName}
            {/* </Paper> */}
            {v.projectStatus}
            {/* <Paper elevation={3} className="row-item" > */}
            {/* {v.description} */}
            {/* </Paper> */}
            {/* <Paper elevation={3} className="row-item" > */}
            {v.startDate}
            {/* </Paper> */}
            {/* <Paper elevation={3} className="row-item" > */}
            {v.endDate}
            {/* </Paper> */}
            {/* <Paper elevation={3} className="row-item" > */}
            {/* </Paper> */}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
