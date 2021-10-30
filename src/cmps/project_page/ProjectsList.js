import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import projectsDAL from "../../adapters/TMS/projectsDAL";


const ProjectsList = (props) => {
    const [showAction, setShowAction] = useState({});

    const deleteProject = async (id) => await projectsDAL.deleteProject(id);


    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell align="center">Project Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Start Date</TableCell>
                        <TableCell align="center">End Date</TableCell>
                        <TableCell align="center">Status</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            onMouseEnter={() => setShowAction({id: row.id, show: true})}
                            onMouseLeave={() => setShowAction({id: '', show: false})}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {
                                    showAction.show
                                    && showAction.id === row.id
                                    && <>
                                        <IconButton
                                            aria-label="delete"
                                            size="small"
                                            color="secondary"
                                            onClick={() => deleteProject(row.id)}
                                        >
                                            <DeleteIcon fontSize="inherit"/>
                                        </IconButton>
                                        <IconButton aria-label="edit" size="small" color="success">
                                            <EditIcon fontSize="inherit"/>
                                        </IconButton>
                                    </>
                                }

                            </TableCell>
                            <TableCell align="left">{row.projectName}</TableCell>
                            <TableCell align="center">

                                {row.description}
                            </TableCell>
                            <TableCell align="center">{row.startDate && row.startDate.slice(0, 10)}</TableCell>
                            <TableCell align="center">{row.endDate && row.endDate.slice(0, 10)}</TableCell>
                            <TableCell align="center">{row.projectStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProjectsList;