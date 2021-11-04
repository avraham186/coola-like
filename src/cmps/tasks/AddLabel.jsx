import React, { useEffect } from "react";
import tagsIcon from "../../assets/images/icons/pepicons_label.png";
import "./css/AddFileDesign.css";
import editIcon from "../../assets/images/icons/clarity_edit-line.png";
import { Modal, Box } from "@mui/material";

const ColorPlate = ["#61BD4F", "#F2D600", "#FF9F1A", "#EB5A46", "#0079BF"];

function AddLabel({ toggleMode, setToggleMode }) {
  const [open, setOpen] = React.useState(false);
  const { label } = toggleMode;

  useEffect(() => {
    label && setOpen((p) => !p);
  }, [label]);

  let Labels = () => {
    return ColorPlate.map((color, i) => {
      return (
        <div key={i} className="tagContainer">
          <img
            src={editIcon}
            style={{ width: "20px", height: "20px", marginTop: "3px" }}
          />{" "}
          <div className="tag" style={{ backgroundColor: color }} />
        </div>
      );
    });
  };

  return (
    <div className="style">
      <Modal
        open={open}
        onClose={() => setToggleMode((p) => ({ ...p, label: !p.label }))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxStyle">
          <span>
            תגיות <img src={tagsIcon} />
          </span>
          <hr style={{ width: "300px" }} />
          <input type="text" className="addLinkInput" placeholder="חפש תגית" />
          <div className={"tagsContainer"}>
            <Labels />
          </div>
          <button className="addTag">צור תגית חדשה</button>
          <button className="addLinkButton">שמור</button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddLabel;
