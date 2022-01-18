// import React, { useState } from 'react';
// import EmptyProjects from "../cmps/project_page/EmptyProjects";
// import ProjectsList from "../cmps/project_page/ProjectsList";
// import { Button } from "@material-ui/core";
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// // import SideBarAdmin from '../cmps/project_page/sideBarAdmin/SideBarAdmin';

// import { useDispatch } from "react-redux";
// import { addProject } from "../store/projects";

// const ProjectPage = () => {
//     const [projects, setProjects] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [projectName, setProjectName] = useState('');
//     const [description, setDescription] = useState('');
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [projectStatus, setProjectStatus] = useState('')

//     const statusOptions = ['COMPLETED', 'STARTED', 'IN_PROCESS', 'CANCELED', 'DELAY']

//     const dispatch = useDispatch();

//     const handleAdd = async () => {
//         setOpen(false);
//         const obj = {
//             projectName,
//             description,
//             startDate,
//             endDate,
//             projectStatus
//         }
//         dispatch(addProject(obj));
//     };


//     return (
//         <div>
//             {/* <SideBarAdmin /> */}
//             <Button variant="outlined" ></Button>
//             <Button variant="outlined" onClick={() => setOpen(true)}>
//                 Add new project
//             </Button>

//             <br /><br />

//             {
//                 !projects ? <EmptyProjects /> : <ProjectsList rows={projects} />
//             }

//             <Dialog open={open} onClose={() => setOpen(false)}>
//                 <DialogTitle>Add new project</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         Please provide the data
//                     </DialogContentText>
//                     <TextField
//                         margin="dense"
//                         id="name"
//                         label="Project Name"
//                         type="text"
//                         onChange={(e) => setProjectName(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         margin="dense"
//                         id="description"
//                         label="Project Description"
//                         type="text"
//                         onChange={(e) => setDescription(e.target.value)}
//                         fullWidth
//                     />
//                     <FormControl fullWidth>
//                         <InputLabel id="select-label">Status</InputLabel>
//                         <Select
//                             labelId="select-label"
//                             id="select"
//                             value={projectStatus}
//                             label="Status"
//                             onChange={(event) => setProjectStatus(event.target.value)}
//                         >
//                             {
//                                 statusOptions.map((x, index) => {
//                                     return <MenuItem key={index} value={x}>{x}</MenuItem>
//                                 })
//                             }

//                         </Select>
//                     </FormControl>
//                     <br />
//                     <br />
//                     <LocalizationProvider dateAdapter={AdapterDateFns}>
//                         <DesktopDatePicker
//                             label="Start Date"
//                             inputFormat="dd/MM/yyyy"
//                             value={startDate}
//                             onChange={(newValue) => setStartDate(newValue)}
//                             renderInput={(params) => <TextField {...params} />}
//                         /><br /><br />
//                         <DesktopDatePicker
//                             label="End desktop"
//                             inputFormat="dd/MM/yyyy"
//                             value={endDate}
//                             onChange={(newValue) => setEndDate(newValue)}
//                             renderInput={(params) => <TextField {...params} />}
//                         />
//                     </LocalizationProvider>

//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpen(false)}>Cancel</Button>
//                     <Button onClick={handleAdd}>Add</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// };

// export default ProjectPage;