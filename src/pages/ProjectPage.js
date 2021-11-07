import React, { useEffect, useState } from 'react';
import EmptyProjects from "../cmps/project_page/EmptyProjects";
import projectsDAL from "../adapters/TMS/projectsDAL";
import ProjectsList from "../cmps/project_page/ProjectsList";
import { Button } from "@material-ui/core";
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from "react-redux";
import { addProject, loadProjects } from "../store/projects";


const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [projectStatus, setProjectStatus] = useState('')

    const statusOptions = ['On Track', 'On Hold', 'Done', 'Ready', 'Off Track', 'Blocked']

    const dispatch = useDispatch();

    const handleChangeStart = (newValue) => {
        setStartDate(newValue);
    };

    const handleChangeEnd = (newValue) => {
        setEndDate(newValue);
    };

    const handleStatus = (event) => {
        setProjectStatus(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const handleAdd = async () => {
        setOpen(false);
        const obj = {
            projectName,
            description,
            projectStatus
        }
        dispatch(addProject(obj));
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new project
            </Button>

            <br /><br />

            {
                !projects ? <EmptyProjects /> : <ProjectsList rows={projects} />
            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide the data
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Project Name"
                        type="text"
                        onChange={(e) => setProjectName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Project Description"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Status</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={projectStatus}
                            label="Status"
                            onChange={handleStatus}
                        >
                            {
                                statusOptions.map((x, index) => {
                                    return <MenuItem key={index} value={x}>{x}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Start Date"
                            inputFormat="dd/MM/yyyy"
                            value={startDate}
                            onChange={handleChangeStart}
                            renderInput={(params) => <TextField {...params} />}
                        /><br /><br />
                        <DesktopDatePicker
                            label="End desktop"
                            inputFormat="dd/MM/yyyy"
                            value={endDate}
                            onChange={handleChangeEnd}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAdd}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProjectPage;