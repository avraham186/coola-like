import React, { useEffect } from "react";
import tagsIcon from "../../../assets/images/icons/pepicons_label.png";
// import "./css/AddFileDesign.css";
import editIcon from "../../../assets/images/icons/clarity_edit-line.png";
import { Modal, Box } from "@mui/material";

const ColorPlate = ["#61BD4F", "#F2D600", "#FF9F1A", "#EB5A46", "#0079BF"];

export const AddLabel = ({ toggleMode, setToggleMode }) => {
  const [open, setOpen] = React.useState(false);
  const { label } = toggleMode;

  let Labels = () => {
    return ColorPlate.map((color, i) => {
      return (
        <div key={i} className="label-container">
          <img
            src={editIcon}
            style={{ width: "20px", height: "20px", marginTop: "3px" }}
          />{" "}
          <div className="label" style={{ backgroundColor: color }} />
        </div>
      );
    });
  };

  useEffect(() => {
    label && setOpen((p) => !p);
  }, [label]);

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
          <span>
            תגיות <img src={tagsIcon} />
          </span>
          <hr style={{ width: "300px" }} />
          <input
            type="text"
            className="add-link-input"
            placeholder="חפש תגית"
          />
          <div className="labels">
            <Labels />
          </div>
          <button className="add-label">צור תגית חדשה</button>
        </div>
        <button className="save-modal-button">שמור</button>
      </Box>
    </Modal>
  );
};
