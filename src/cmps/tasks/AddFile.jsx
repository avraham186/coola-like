import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import grommetIcon from "../../assets/images/icons/grommet-icons_attachment.png";
import "./css/AddFileDesign.css";

function AddFile({ toggleMode, setToggleMode }) {
  const [open, setOpen] = React.useState(false);
  const { file } = toggleMode;

  useEffect(() => {
    file && setOpen((p) => !p);
  }, [file]);

  return (
    <div className="style">
      <Modal
        open={open}
        onClose={() => setToggleMode((p) => ({ ...p, file: !p.file }))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxStyle">
          <span>
            קבצים <img src={grommetIcon} />
          </span>
          <hr style={{ width: "300px" }} />
          <div id="dropZone" className="dropZone">
            גרור לכאן קובץ
            <label className="chooseFromPC">
              בחר מהמחשב
              <input type="file" style={{ display: "none" }} />
            </label>
          </div>
          <span className="addLinkText">צרף קישור</span>
          <input
            type="text"
            className="addLinkInput"
            placeholder="הדבק קישור"
          ></input>
          <button className="addLinkButton">שמור</button>
        </Box>
      </Modal>
    </div>
  );
}

export default AddFile;
