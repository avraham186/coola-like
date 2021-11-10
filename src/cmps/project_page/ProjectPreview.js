import edit from '../../assets/images/icons/edit_pen.png';
import erase from '../../assets/images/icons/erase.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
export const ProjectPreview = ({ project,editproject, deleteProject }) => {

const [finisehdTasks, setTasks] = useState();
  useEffect(() => {
      getFinishedTasks();
    }, [])

  const getFinishedTasks = () =>{
    if(!project.tasks) return
 const tasksDisplay = project.tasks.reduce((acc, task) => {
             if (task.taskStatus === 'COMPLETED') acc++
            
            return acc;
        },0)        
        setTasks(tasksDisplay)
  }

  return (
  <tr className="projects-row">
  <img onClick={(e) => { editproject(project.id) }} src={edit}></img>
  <Link to={`/projects/task/${project.id}`}>   
    <td>{project.projectName}</td>
    <td>{project.projectStatus}</td>
    <td>
      {project.startDate}-{project.endDate}
    </td>
    <td>{finisehdTasks}</td>
    <td></td>
   </Link>
    <td>
      <img
        style={{ width: "10px" }}
        src={erase}
      />
    </td>
  </tr>
  )
};
