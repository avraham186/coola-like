import React, {useEffect, useState} from 'react';
import ProjectStart from "../cmps/project_page/ProjectStart";
import projectsDAL from "../adapters/TMS/projectsDAL";
import ProjectsList from "../cmps/project_page/ProjectsList";
import {Button} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false);

    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [projectStatus, setProjectStatus] = useState('')

    const statusOptions = ['On Track', 'On Hold', 'Done', 'Ready', 'Off Track', 'Blocked']


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
        const response = await projectsDAL.createProject({projectName, description, startDate, endDate, projectStatus: "STARTED"})
        console.table(response.data)
    };

    useEffect(async () => {
        const response = await projectsDAL.getAllProjects()
        setProjects(response.data)
    }, [])


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new project
            </Button>

            <br/><br/>

            {
                !projects ? <ProjectStart/> : <ProjectsList rows={projects}/>
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
                    <br/>
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Start Date"
                            inputFormat="dd/MM/yyyy"
                            value={startDate}
                            onChange={handleChangeStart}
                            renderInput={(params) => <TextField {...params} />}
                        /><br/><br/>
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
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ProjectPage;