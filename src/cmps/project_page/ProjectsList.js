import React, { useEffect, useState } from "react";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch, useSelector } from "react-redux";
// import { Paper } from "@material-ui/core";
// import { width } from "@mui/system";
// import TaskList from "./TaskList";
// import edit from "../../assets/images/icons/edit_pen.png";
// import erase from "../../assets/images/icons/erase.png";
// import {
//   TextField,
//   Dialog,
//   Button,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
// } from "@mui/material";
// import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ProjectPreview } from "./ProjectPreview";

const ProjectsList = () => {
    const descriptionRef = React.createRef()
    const projectNameRef = React.createRef()
    const endDateRef = React.createRef()
    const startDateRef = React.createRef()
    const [project, setProject] = useState({})
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [projectStatus, setProjectStatus] = useState('')
    const statusOptions = ['COMPLETED', 'DELAY', 'IN_PROCESS', 'STARTED', 'CANCELED']

  useEffect(() => {
    dispatch(loadProjects());
  }, []);

  if (!projects) return <div>Loading...</div>;
  return (
    <div style={{ direction: "rtl" }}>
      <table className="projects-table">
        <thead>
          <tr className="projects-row ">
            <th></th>
            <th className="row-item">שם הפרויקט</th>
            <th className="row-item">סטטוס</th>
            <th className="row-item">תאריך התחלה וסיום</th>
            <th className="row-item">השלמת המשימה</th>
            <th className="row-item">משימות שהושלמו</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.list.map((project) => (
            <ProjectPreview project={project} key={project.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
