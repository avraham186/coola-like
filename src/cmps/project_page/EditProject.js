import React from 'react';
import create_new_project from '../../assets/images/icons/create_new_project.png';

const EditProject = () => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit project</DialogTitle>
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
    )
}

export default EditProject;