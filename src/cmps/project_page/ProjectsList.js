import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ProjectsList = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Project Name</TableCell>
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
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.projectName}
                            </TableCell>
                            <TableCell align="center">{row.description}</TableCell>
                            <TableCell align="center">{row.startDate && row.startDate.slice(0,10)}</TableCell>
                            <TableCell align="center">{row.endDate && row.endDate.slice(0,10)}</TableCell>
                            <TableCell align="center">{row.projectStatus}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProjectsList;