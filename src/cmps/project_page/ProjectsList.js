import React, {useEffect, useState} from 'react';
import projectsDAL from "../../adapters/TMS/projectsDAL";
import {loadProjects} from "../../store/projects";
import {useDispatch, useSelector} from "react-redux";
import {Paper} from "@material-ui/core";

const ProjectsList = () => {

    const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)

    useEffect(() => {
        dispatch(loadProjects());

    }, [])


    return (
        <div>

                {
                    projects.list.map((v, i) => {
                        return (
                            <Paper elevation={3} >
                                {v.projectName}
                            </Paper>
                        )
                    })
                }

        </div>

    )
};

export default ProjectsList;