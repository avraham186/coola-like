import edit from "../../assets/images/icons/edit_pen.png";
import erase from "../../assets/images/icons/erase.png";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import "./project_page.css";
import { useDispatch } from "react-redux";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import EditProject from "./EditProject.jsx";
import { loadProjects } from "../../store/projects";
import DeleteProject from "./DeleteProject";

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
export const ProjectPreview = ({ project }) => {
  const {
    projectName,
    startDate,
    description,
    endDate,
    projectStatus,
    id,
    tasks,
    adminProject,
    projectPriority,
  } = project;

  const [stateModal, setStateModal] = useState({
    description,
    projectName,
    endDate,
    startDate,
    projectStatus,
    id,
    tasks,
    adminProject,
    projectPriority,
  });
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [statusClass, setstatusClass] = useState();
  const [finisehdTasks, setTasks] = useState();
  const [precenTasks, setPrecenTasks] = useState();
  const color = colorStatus[projectStatus];
  const deleteProject = async (id) => await projectsDAL.deleteProject(id);

  useEffect(() => {
    setStatusClass();
    getFinishedTasks();
  }, []);

  useEffect(() => {
    getPrecent();
  }, [finisehdTasks]);

  const dispatch = useDispatch();

  const getFinishedTasks = () => {
    if (!project.tasks) return;
    const tasksDisplay = project.tasks.reduce((acc, task) => {
      if (task.taskStatus === "COMPLETED") acc++;
      return acc;
    }, 0);
    setTasks(tasksDisplay);
  };

  function getPrecent() {
    const precent = project.tasks.length
      ? (finisehdTasks / project.tasks.length) * 100
      : 0;
    setPrecenTasks(precent.toFixed(0));
  }

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

  const setStatusClass = () => {
    setstatusClass(projectStatus.toLowerCase());
  };
  const handelDelate = async (id) => {
    await deleteProject(id);
    dispatch(loadProjects());
  };

  // if (!projectStatus) return
  return (
    <tr style={{ direction: "rtl" }} className="projects-row">
      <td>
        {" "}
        <img onClick={() => setOpen((p) => !p)} src={edit}></img>
      </td>
      {/* <Link style={{ direction: "rtl" }} to={`/projects/task/${project.id}`}> */}
      <td>
        <Link style={{ direction: "rtl" }} to={`/projects/task/${project.id}`}>
          {projectName}
        </Link>
      </td>
      <td className={statusClass} style={{ background: color, width: "15%" }}>
        <Link
          className={statusClass}
          style={{ direction: "rtl" }}
          to={`/projects/task/${project.id}`}
        >
          <p>{status[projectStatus]}</p>
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <span>{convertDate(new Date(startDate))}</span> -{" "}
        <span>{convertDate(new Date(endDate))}</span>
      </td>
      <td>
        <Link style={{ direction: "rtl" }} to={`/projects/task/${project.id}`}>
          {project.tasks.length} / {finisehdTasks}
        </Link>
      </td>
      <td id="precentTd">
        <span
          className={parseInt(precenTasks) ? "precent completed" : "precent"}
          style={precenTasks === 0 ? {} : { width: `${precenTasks}%` }}
        >
          {precenTasks}%
        </span>
      </td>

      <td>
        <img
          onClick={() => {
            setOpenDeleteModal(!openDeleteModal);
          }}
          src={erase}
        />
      </td>
      <EditProject
        openModal={open}
        setOpenModal={setOpen}
        stateModal={stateModal}
        setStateModal={setStateModal}
      />
      <DeleteProject
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        project={project.id}
      />
    </tr>
  );
};
