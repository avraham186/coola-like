import React, { useContext, useEffect, useState } from "react";
import tagsIcon from "../../../assets/images/icons/pepicons_label.png";
import editIcon from "../../../assets/images/icons/clarity_edit-line.png";
import { closeIcon } from "../../../assets/images/icons";
import { Box, Modal } from "@mui/material";
import { TaskContext } from "../../../context/TaskContext";

export const AddLabel = ({ toggleMode, setToggleMode }) => {
  const [open, setOpen] = useState(false);
  const [colorPlate, setColorPlate] = useState([
    "#61BD4F",
    "#F2D600",
    "#FF9F1A",
    "#EB5A46",
    "#0079BF",
  ]);
  const [choosenLabel, setChoosenLabel] = useState();
  const { label } = toggleMode;
  const { taskContent, setTaskContent } = useContext(TaskContext);

  useEffect(() => {
    console.log("taskContext", taskContent);
  }, []);

  const setLabel = (color) => {
    setChoosenLabel(color);
    setTaskContent((p) => ({ ...p, label: color }));
    // setTaskToSave((p) => ({ ...p, label: color }));
  };
  const Labels = () => {
    return colorPlate.map((color, i) => {
      const isClicked = choosenLabel === color;
      const styleLabel = isClicked
        ? { border: "3px solid black", backgroundColor: color }
        : { backgroundColor: color };
      return (
        <div key={i} className="label-container">
          <img
            src={editIcon}
            style={{ width: "20px", height: "20px", marginTop: "3px" }}
          />{" "}
          <div
            className="label"
            onClick={() => setLabel(color)}
            style={styleLabel}
          />
        </div>
      );
    });
  };

  useEffect(() => {
    label && setOpen((p) => !p);
  }, [label]);
  const handleColor = (ev) => {
    const color = ev.target.value;
    setColorPlate((p) => {
      p.pop();
      p.push(color);
      return [...p];
    });
    setChoosenLabel(color);
    setTaskContent((p) => ({ ...p, label: color }));
  };
  return (
    <Modal
      className="modals"
      open={open}
      onClose={() => setToggleMode((p) => ({ ...p, label: !p.label }))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box-modal">
        <div className="label-modal">
          <div className="label-headline flex">
            <span
              className="btn-close"
              onClick={() => setToggleMode((p) => ({ ...p, label: !p.label }))}
            >
              <img src={closeIcon} />
            </span>
            <div className="label-title flex align-center">
              תגיות <img src={tagsIcon} alt="due-date-title" />
            </div>
          </div>
          <hr style={{ width: "300px" }} />
          <input
            type="text"
            className="add-link-input"
            placeholder="חפש תגית"
          />
          <div className="labels">
            <Labels />
          </div>
          <button className="add-label">
            <input type="color" onChange={handleColor} />
            <span>צור תגית חדשה</span>
          </button>
        </div>
        <button
          className="save-btn"
          onClick={() => setToggleMode((p) => ({ ...p, label: !p.label }))}
        >
          שמור
        </button>
      </Box>
    </Modal>
  );
};
