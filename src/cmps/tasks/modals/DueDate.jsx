import React, { useContext, useEffect, useState } from "react";
import { closeIcon, watch } from "../../../assets/images/icons";
import { Box, Modal } from "@mui/material";
import { TaskContext } from "../../../context/TaskContext";

export const DueDate = ({ toggleMode, setToggleMode, taskDate }) => {
  const [open, setOpen] = useState(false);
  const [startCheckbox, setStartCheckbox] = useState(false);
  const [endCheckbox, setEndCheckbox] = useState(false);
  const [dateToSave, setDateToSave] = useState({
    startDate: "",
    endDate: "",
    time: "",
    reminder: "",
  });
  const { taskContent, setTaskContent } = useContext(TaskContext);
  const { dueDate } = toggleMode;

  useEffect(() => {
    dueDate && setOpen((p) => !p);
  }, [toggleMode]);
  // useEffect(() => {
  //     setTaskToSave(p => ({ ...p, dueDate: dateToSave }))
  // }, [startCheckbox,endCheckbox]);

  const DATE_VALUE = [
    {
      value: taskContent.date.reminder
        ? taskContent.date.reminder
        : "עדיין לא נבחרה התראה",
    },
    { value: "יום לפני תאריך הסיום" },
    { value: "יומיים לפני תאריך הסיום" },
    { value: "שעתיים לפני" },
    { value: "שעה לפני" },
    { value: "10 דקות לפני" },
    { value: "5 דקות לפני" },
    { value: "בזמן תאריך היעד" },
  ];
  const handleDate = (e) => {
    const date = e.target.value;
    const name = e.target.name;
    console.log("date", date, name);

    setTaskContent((p) => ({
      ...p,
      date: {
        ...p.date,
        [name]: date,
      },
    }));
    setDateToSave((p) => ({ ...p, [name]: date }));
  };

  return (
    <Modal
      className="modals"
      open={open}
      onClose={() =>
        setToggleMode((p) => ({
          ...p,
          dueDate: !p.dueDate,
        }))
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box-modal">
        <div className="new-task-due-date-style">
          <div className="due-date-headline flex">
            <span
              className="btn-close"
              onClick={() =>
                setToggleMode((p) => ({
                  ...p,
                  dueDate: !p.dueDate,
                }))
              }
            >
              <img src={closeIcon} />
            </span>
            <div className="due-date-title flex align-center">
              תאריך יעד <img src={watch} alt="due-date-title" />
            </div>
          </div>
          <div className="due-date-start-date-headline flex">
            <label className="flex justify-center align-center">
              תאריך התחלה
              <input
                type="checkbox"
                name="startCheckbox"
                onChange={() => setStartCheckbox((p) => !p)}
                checked={startCheckbox}
              />
            </label>
          </div>
          {startCheckbox && (
            <div className="due-date-start-date-body">
              <input
                type="date"
                name="startDate"
                value={dateToSave.startDate}
                onChange={handleDate}
              />
            </div>
          )}
          <div className="due-date-end-date-headline flex">
            <label className="flex justify-center align-center">
              תאריך יעד
              <input
                type="checkbox"
                name="endCheckbox"
                onChange={() => setEndCheckbox((p) => !p)}
                checked={endCheckbox}
              />
            </label>
          </div>
          {endCheckbox && (
            <div className="due-date-end-date-body flex">
              <input
                type="time"
                name="time"
                value={dateToSave.time}
                onChange={handleDate}
              />
              <input
                type="date"
                name="endDate"
                value={dateToSave.endDate}
                onChange={handleDate}
              />
            </div>
          )}
          <div className="due-date-set-reminder-label flex">
            <label>קבע תזכורת</label>
          </div>
          <div className="due-date-set-reminder-select">
            <select name="reminder" onChange={handleDate}>
              {DATE_VALUE.map((val, idx) => (
                <option key={idx} value={taskContent.date.reminder}>
                  {val.value}
                </option>
              ))}
            </select>
          </div>
          <div className="due-date-set-reminder-save-btn">
            <button
              className="save-btn"
              onClick={() => {
                setToggleMode((p) => ({
                  ...p,
                  dueDate: !p.dueDate,
                }));
                taskDate(dateToSave);
              }}
            >
              שמור
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
