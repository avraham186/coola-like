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

const DeleteProject = ({ openDeleteModal, setOpenDeleteModal, project }) => {
  const dispatch = useDispatch();
  const [deleteProjectText, setDeleteProjectText] = useState("");
  const [msg, setMsg] = useState("");

  const deleteProject = async (id) => await projectsDAL.deleteProject(id);

  const handelDelate = async () => {
    if (deleteProjectText === "מחיקת פרויקט") {
      await deleteProject(project);
      dispatch(loadProjects());
    } else {
      setMsg("הקלד בתיבה ");
    }
  };

  return (
    <Dialog
      open={openDeleteModal}
      onClose={() => setOpenDeleteModal((p) => !p)}
      style={{ alignItems: "center" }}
    >
      <DialogTitle className="title">
        ?האם אתה בטוח שברצונך למחוק את הפרויקט{" "}
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
        <DialogContentText>
          <p className="confirmText">
            -אשר את הפעולה באמצעות הקלדת צמיד המילים
            <p style={{ color: " #9D3332" }}>מחיקת פרויקט</p>
            מטה
          </p>
        </DialogContentText>
        <TextField
          type="text"
          value={deleteProjectText}
          onChange={(text) => setDeleteProjectText(text)}
          style={{
            width: "90%",
            height: "30%",
            background: "#ffffff",
            border: "3px solid #0067c5",
            boxSizing: "border-box",
          }}
        />
      </DialogContent>
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
          onClick={() => setOpenDeleteModal((p) => !p)}
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
            handelDelate();
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
