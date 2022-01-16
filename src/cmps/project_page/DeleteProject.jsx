import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import "../../assets/cmps/project-page/deleteDialog.scss";
import { loadProjects } from "../../store/projects";
import { useDispatch } from "react-redux";
import projectsDAL from "../../adapters/TMS/projectsDAL";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      width: "100%",
      height: "52px",
      background: "#FFFFFF",
      border: " 3px solid #0067C5",
      boxSizing: "border-box",
    },
  },
});
const DeleteProject = ({
  openDeleteModal,
  setOpenDeleteModal,
  project,
  projecName,
}) => {
  const dispatch = useDispatch();
  const [deleteProjectText, setDeleteProjectText] = useState("");
  const [msg, setMsg] = useState("");
  const classes = useStyles();
  const deleteProject = async (id) => await projectsDAL.deleteProject(id);

  const handelDelete = async () => {
    console.log(deleteProjectText, projecName);
    if (deleteProjectText === projecName) {
      await deleteProject(project);
      dispatch(loadProjects());
      setMsg("");
    } else {
      setMsg("***הקלד את שם הפרויקט אותו תרצה למחוק בתוך התיבה*** ");
    }
  };

  return (
    <Dialog
      open={openDeleteModal}
      onClose={() => setOpenDeleteModal((p) => !p)}
      style={{ alignItems: "center", width: "100%" }}
    >
      <DialogTitle
        className="title"
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "26px",
          lineHeight: "36px",
          textAlign: "center",
          color: "#4a4a4a",
          margin: "10px",
        }}
      >
        ?האם אתה בטוח שברצונך למחוק את הפרויקט
      </DialogTitle>
      <DialogContent style={{ textAlign: "center" }}>
        <DialogContentText className="alertCard">
          <p className="alertText">
            {" "}
            .שים לב! פעולה זו אינה ניתנת לשחזור
            <br />
            ?האם אתה בטוח שברצונך למחוק לצמיתות את הפרויקט והמשימות שבתוכו
          </p>
        </DialogContentText>
        <br />
        <DialogContentText>
          <p
            style={{
              display: "inline-block",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "18px",
              lineHeight: "21px",
              textAlign: "right",
              color: "#4a4a4a",
              margin: 10,
            }}
          >
            אשר את הפעולה באמצעות הקלדת שם הפרויקט
            <span
              style={{ color: " #9D3332", display: "inherit", margin: "2px" }}
            >
              {JSON.stringify(projecName)}
            </span>
            מטה
          </p>
        </DialogContentText>
        <br />

        <TextField
          type="text"
          onChange={(e) => setDeleteProjectText(e.target.value)}
          style={{
            width: "90%",
          }}
          InputProps={{
            classes: {
              root: classes.root,
            },
          }}
        />
      </DialogContent>
      <DialogContentText
        style={{
          display: "inline-block",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "14px",
          lineHeight: "21px",
          textAlign: "center",
          color: "#9d3332",
        }}
      >
        {msg}
      </DialogContentText>
      <DialogActions style={{ justifyContent: "center", margin: 10 }}>
        <Button
          style={{
            width: "100px",
            border: "1px solid #c4c4c4",
            boxSizing: "border-box",
            borderRadius: "3px",
            backgroundColor: "#ffffff",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            color: "#2C2C2C",
          }}
          onClick={() => {
            setOpenDeleteModal((p) => !p);
            setMsg("");
          }}
        >
          ביטול
        </Button>
        <Button
          style={{
            width: "100px",
            border: "1px solid #c4c4c4",
            boxSizing: "border-box",
            borderRadius: "3px",
            backgroundColor: "#d74843",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "21px",
            textAlign: "center",
            color: "#ffffff",
          }}
          onClick={() => {
            handelDelete();
          }}
        >
          מחיקה
        </Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProject;
