import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import grommetIcon from "../../../assets/images/icons/grommet-icons_attachment.png";
import { closeIcon } from "../../../assets/images/icons";

export const AddFile = ({ toggleMode, setToggleMode }) => {
  const [open, setOpen] = React.useState(false);
  const { file } = toggleMode;

  useEffect(() => {
    file && setOpen((p) => !p);
  }, [file]);

  return (
    <Modal
      className="modals"
      open={open}
      onClose={() => setToggleMode((p) => ({ ...p, file: !p.file }))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box-modal">
        <div className="add-files-headline flex">
          <span
            className="btn-close"
            onClick={() => setToggleMode((p) => ({ ...p, file: !p.file }))}
          >
            <img src={closeIcon} />
          </span>
          <div className="add-files-title flex align-center">
            קבצים <img src={grommetIcon} alt="add-files-title" />
          </div>
        </div>
        <hr style={{ width: "300px" }} />
        <div className="drag-drop-file">
          גרור לכאן קובץ
          <p>או</p>
          <label className="choose-from-pc">
            בחר מהמחשב
            <input type="file" style={{ display: "none" }} />
          </label>
        </div>
        <label style={{ textAlign: "right" }}>צרף קישור</label>
        <input
          type="text"
          className="add-link-text"
          placeholder="הדבק קישור"
        ></input>

        <button
          className="btn-save-task"
          onClick={() => setToggleMode((p) => ({ ...p, file: !p.file }))}
        >
          שמור
        </button>
      </Box>
    </Modal>
  );
};
