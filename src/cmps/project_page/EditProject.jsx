import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { loadProjects } from "../../store/projects";
import { useDispatch } from "react-redux";
import "../../assets/cmps/project-page/EditDialog.scss";
import { closeIcon } from "../../assets/images/icons";

const EditProject = ({
  openModal,
  setOpenModal,
  stateModal,
  setStateModal,
}) => {
  const dispatch = useDispatch();
  const statusOptions = ["בתהליך", "באיחור", "הושלם", "חדש", "בוטל"];

  const statusOptions2 = {
    בתהליך: "IN_PROCESS",
    באיחור: "DELAY",
    הושלם: "COMPLETED",
    חדש: "STARTED",
    בוטל: "CANCELED",
  };

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

  const handleEdit = async () => {
    console.log("state modal", stateModal);
    await projectsDAL.editProject(stateModal);
    dispatch(loadProjects());
    setOpenModal((p) => !p);
  };

  return (
    <Dialog open={openModal} onClose={() => setOpenModal((p) => !p)}>
      <span className="btn-close" onClick={() => setOpenModal((p) => !p)}>
        <img src={closeIcon} />
      </span>
      <DialogTitle
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "26px",
          lineHeight: "36px",
          textAlign: "center",
          color: "#4a4a4a",
        }}
      >
        עריכת פרויקט
      </DialogTitle>
      <DialogContent style={{ alignItems: "center" }}>
        {/* <DialogContentText>Please provide the data</DialogContentText> */}
        <InputLabel className="label">שם הפרויקט</InputLabel>

        <TextField
          className="TextField"
          margin="dense"
          type="text"
          value={projectName}
          onChange={(e) =>
            setStateModal((p) => ({ ...p, projectName: e.target.value }))
          }
          fullWidth
        />
        <InputLabel className="label">תיאור הפרויקט</InputLabel>
        <TextField
          className="TextField"
          margin="dense"
          id="description"
          type="text"
          value={description}
          onChange={(e) =>
            setStateModal((p) => ({ ...p, description: e.target.value }))
          }
          fullWidth
        />
        <InputLabel className="label">סטטוס</InputLabel>
        <FormControl fullWidth>
          <Select
            className="TextField"
            labelId="select-label"
            id="select"
            value={Object.keys(statusOptions2).find(
              (key) => statusOptions2[key] === projectStatus
            )}
            onChange={(e) =>
              setStateModal((p) => ({
                ...p,
                projectStatus: statusOptions2[e.target.value],
              }))
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <InputLabel className="label">תאריך התחלה</InputLabel>

          <DesktopDatePicker
            className="dateField"
            inputFormat="dd/MM/yyyy"
            value={startDate}
            onChange={(e) => setStateModal((p) => ({ ...p, startDate: e }))}
            renderInput={(params) => <TextField {...params} />}
          />
          <br />
          <br />
          <InputLabel className="label">תאריך סיום</InputLabel>

          <DesktopDatePicker
            className="dateField"
            inputFormat="dd/MM/yyyy"
            value={endDate}
            onChange={(e) => setStateModal((p) => ({ ...p, endDate: e }))}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          style={{
            background: "#34018e",
            borderRadius: "3px",
            color: "white",
            width: "150px",
            marginBottom: "10px",
          }}
          onClick={() => {
            handleEdit();
          }}
        >
          שמור וסגור
        </Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default EditProject;
