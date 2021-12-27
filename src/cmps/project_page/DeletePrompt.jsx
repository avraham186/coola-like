import { Dialog, DialogContent } from "@mui/material";
import { useRef, useState } from "react";
export default ({ isDeleting, projectName, onCancel, onDelete }) => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const verifyDeletionHandler = () => {
    const enteredInput = inputRef.current.value;
    if (enteredInput === projectName) {
      setIsValid(true);
      onDelete();
      onCancel();
    } else {
      setIsValid(false);
    }
  };
  return (
    <Dialog
      open={isDeleting}
      onClose={onCancel}
      sx={{
        ".MuiPaper-root": {
          width: "833px",
          height: "523px",
          direction: "rtl",
          border: "1px solid #C4C4C4",
          borderRadius: "0",
          boxSizing: "border-box",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          maxWidth: "unset",
          maxHeight: "unset",
        },
        ".MuiDialogContent-root": {
          padding: "50px",
          margin: "0 auto",
        },
      }}
    >
      <DialogContent>
        <div className="delete-prompt-title">
          האם אתה בטוח שברצונך למחוק את הפרויקט?
        </div>
        <div className="delete-prompt-warning">
          <p className="delete-prompt-warning-text">
            שים לב! פעולה זו אינה ניתנת לשחזור.
            <br /> האם אתה בטוח שברצונך למחוק לצמיתות את הפרויקט והמשימות
            שבתוכו?
          </p>
        </div>
        <div className="delete-prompt-verify">
          אשר את הפעולה באמצעות הקלדת שם הפרויקט -{" "}
          <span style={{ color: "#9D3332" }}>{projectName}</span> מטה :
        </div>
        {!isValid && (
          <div style={{ color: "#9D3332" }}>
            השם שהוקלד לא תואם את שם הפרויקט
          </div>
        )}
        <input
          ref={inputRef}
          className={
            isValid ? "delete-prompt-input" : "delete-prompt-input invalid"
          }
        />
        <div className="delete-prompt-buttons">
          <button
            className="delete-prompt-button delete-button"
            onClick={verifyDeletionHandler}
          >
            מחיקה
          </button>
          <button className="delete-prompt-button" onClick={onCancel}>
            ביטול
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
