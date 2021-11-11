import edit from '../../assets/images/icons/edit_pen.png';
import erase from '../../assets/images/icons/erase.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./project_page.css"
import { Paper } from "@material-ui/core";
import { width } from '@mui/system';
import TaskList from "./TaskList"
import { useDispatch, useSelector, } from "react-redux";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import EditProject from './EditProject';
import delateProjectById from '../../store/projects'
import { loadProjects } from "../../store/projects";

export const ProjectPreview = ({ project }) => {
    const dispatch = useDispatch()
    const { projectName, startDate, description, endDate, projectStatus, id, tasks, adminProject, projectPriority } = project
    const [stateModal, setStateModal] = useState({ description, projectName, endDate, startDate, projectStatus, id, tasks, adminProject, projectPriority })
    console.log(stateModal)
    const [open, setOpen] = useState(false);
    const deleteProject = async (id) => await projectsDAL.deleteProject(id);


    const [finisehdTasks, setTasks] = useState();
    useEffect(() => {
        getFinishedTasks();
    }, [])

    const getFinishedTasks = () => {
        if (!project.tasks) return
        const tasksDisplay = project.tasks.reduce((acc, task) => {
            if (task.taskStatus === 'COMPLETED') acc++

            return acc;
        }, 0)
        setTasks(tasksDisplay)
    }
    function convertDate(date) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = date.getDate().toString();

        var mmChars = mm.split('');
        var ddChars = dd.split('');

        return yyyy + '.' + (mmChars[1] ? mm : "0" + mmChars[0]) + '.' + (ddChars[1] ? dd : "0" + ddChars[0]);
    }





    const handelDelate = (id) => {
        deleteProject(id)
        dispatch(loadProjects())
    }
    return (
        <>
            <tr style={{ direction: "rtl" }} className="projects-row">
                <td> <img onClick={() => setOpen(p => !p)} src={edit}></img></td>
                <Link style={{ direction: "rtl" }} to={`/projects/task/${project.id}`}>
                    <td>{projectName}</td>
                    <td>{projectStatus}</td>
                    <td>
                        {convertDate(new Date(startDate))}-{convertDate(new Date(endDate))}
                    </td>
                    <td>{finisehdTasks}</td>
                    <td></td>
                </Link>
                <td style={{ textAlign: 'left' }}>
                    <img
                        onClick={() => { handelDelate() }}
                        src={erase}
                    />
                </td>
            </tr>
            <EditProject openModal={open} setOpenModal={setOpen} stateModal={stateModal} setStateModal={setStateModal} />
        </>
    )
};