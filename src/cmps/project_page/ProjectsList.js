import React, { useEffect } from "react";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";

const ProjectsList = () => {
  const deleteProject = async (id) => await projectsDAL.deleteProject(id);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.entities.projects);

  useEffect(() => {
    dispatch(loadProjects());
    console.log(projects.list);
  }, []);

  return (
    <div className="projects-table">

      {projects.list.map((v, i) => {
        return (

          <div className="projects-row">
          <tr>
          <td>Project name: </td>

          </tr>
            {/* <Paper elevation={3} className="row-item" > */}
            {v.projectName}
            {/* </Paper> */}
            {/* <Paper elevation={3} className="row-item" > */}
            {/* {v.description} */}
            {/* </Paper> */}
            {/* <Paper elevation={3} className="row-item" > */}
            {v.startDate}
            {/* </Paper>
                            <Paper elevation={3} className="row-item" > */}
            {v.endDate}
            {/* </Paper>
                            <Paper elevation={3} className="row-item" > */}
            {v.projectStatus}
            {/* </Paper> */}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
