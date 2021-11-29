import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadProjects } from "../../../store/projects";
import { MissionLineChart } from './MissionLineChart';
import { MissionPieChart } from './MissionPieChart';
import taskDAL from '../../../adapters/TMS/tasksDAL'
export const DashBoard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)
    const [tasks, setTasks] = useState()

    useEffect(async () => {
        dispatch(loadProjects());
        const taskstoState = await taskDAL.getAllTasks()
        setTasks(taskstoState)
    }, [])

    const total = projects.list.length;
    const statusOptions = ['COMPLETED', 'STARTED', 'IN_PROCESS', 'CANCELED', 'DELAY']


    return (
        <div className="dash-board">
            <div className="dash-board-headline flex justify-center align-center space-between">
                <span>project</span>
                <span>complete</span>
                <span>in process</span>
                <span>late</span>
                <span>canceled</span>
            </div>
            <div className="missions-chart">
                <MissionLineChart projects={projects} tasks={tasks} />
                <MissionPieChart projects={projects}/>
            </div>
            <div className="project-chart">
                im projects-chart
            </div>
        </div>
    );
};