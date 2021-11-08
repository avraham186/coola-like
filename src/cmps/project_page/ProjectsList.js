import React, {useEffect} from 'react';
import projectsDAL from "../../adapters/TMS/projectsDAL";
import {loadProjects} from "../../store/projects";
import {useDispatch, useSelector} from "react-redux";
import {Paper} from "@material-ui/core";
import { useTable } from "react-table";

const ProjectsList = () => {

    const deleteProject = async (id) => await projectsDAL.deleteProject(id);

    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects)

    useEffect(() => {
        dispatch(loadProjects());
        console.log(projects.list)
    }, [])


    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data })


    return (
        <div className="projects-table">
            {
                projects.list.map((v, i) => {
                    return (
                        <div className="projects-row">

                            <Paper elevation={3} className="row-item" >
                                {v.projectName}
                            </Paper>
                            <Paper elevation={3} className="row-item" >
                                {v.description}
                            </Paper>
                            <Paper elevation={3} className="row-item" >
                                {v.startDate}
                            </Paper>
                            <Paper elevation={3} className="row-item" >
                                {v.endDate}
                            </Paper>
                            <Paper elevation={3} className="row-item" >
                                {v.projectStatus}
                            </Paper>
                        </div>
                    )
                })
            }
        </div>

    )
};

export default ProjectsList;