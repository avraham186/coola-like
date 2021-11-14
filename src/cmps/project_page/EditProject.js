import React from "react";
import create_new_project from "../../assets/images/icons/create_new_project.png";
import {
  TextField,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import updateProjects from "../../store/projects";
import delateProjectById from "../../store/projects";
import { updateProjects1, loadProjects } from "../../store/projects";
import { useDispatch } from "react-redux";

const EditProject = ({
  openModal,
  setOpenModal,
  stateModal,
  setStateModal,
}) => {
  const dispatch = useDispatch();
  const statusOptions = [
    "IN_PROCESS",
    "DELAY",
    "COMPLETED",
    "STARTED",
    "CANCELED",
  ];
  const {
    description,
    projectName,
    endDate,
    startDate,
    projectStatus,
    id,
    tasks,
    adminProject,
    projectPriority,
  } = stateModal;
  // console.log(stateModal)

  const handleEdit = async () => {
    console.log("state modal", stateModal);
    await projectsDAL.editProject(stateModal);
    dispatch(loadProjects());
    setOpenModal((p) => !p);
  };
  return (
    <Dialog open={openModal} onClose={() => setOpenModal((p) => !p)}>
      <DialogTitle>Edit project</DialogTitle>
      <DialogContent>
        <DialogContentText>Please provide the data</DialogContentText>
        <TextField
          margin="dense"
          // id="name"
          label="Project Name"
          type="text"
          value={projectName}
          onChange={(e) =>
            setStateModal((p) => ({ ...p, projectName: e.target.value }))
          }
          // onChange={(e) => setProjectName(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          id="description"
          label="Project Description"
          type="text"
          value={description}
          onChange={(e) =>
            setStateModal((p) => ({ ...p, description: e.target.value }))
          }
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="select-label">Status</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={projectStatus}
            label="Status"
            onChange={(e) =>
              setStateModal((p) => ({ ...p, projectStatus: e.target.value }))
            }
          >
            {statusOptions.map((x, index) => {
              return (
                <MenuItem key={index} value={x}>
                  {x}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        {/* dateAdapter={AdapterDateFns} */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="dd/MM/yyyy"
            value={startDate}
            onChange={(e) => setStateModal((p) => ({ ...p, startDate: e }))}
            // onChange={handleChangeStart}
            // ref={startDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <br />
          <br />
          <DesktopDatePicker
            label="End desktop"
            inputFormat="dd/MM/yyyy"
            value={endDate}
            // onChange={handleChangeEnd}
            onChange={(e) => setStateModal((p) => ({ ...p, endDate: e }))}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenModal((p) => !p)}>Cancel</Button>
        <Button
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default EditProject;
