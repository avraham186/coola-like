import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadProjects} from "../../store/projects";
import {Paper} from "@material-ui/core";

const DashBoard = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)
    const [dashCount, setDashCount] = useState([])

    useEffect(() => {
        dispatch(loadProjects());
        statusOptions.map(status => {
            const value = projects.list.filter(item => item.projectStatus === status).length;
            dashCount.push({status: value})
        });
    }, [])

    const total = projects.list.length;
    const statusOptions = ['COMPLETED', 'STARTED', 'IN_PROCESS', 'CANCELED', 'DELAY']


    return (
        <div>

            <Paper elevation={3} className="projects-dashBoard">
                Total
                {/*{total}*/}

                {
                    dashCount.map(v => {
                        return v.status
                    })
                }
            </Paper>
        </div>
    );
};

export default DashBoard;