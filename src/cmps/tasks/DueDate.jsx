import React, { useState, useEffect } from 'react';
// import tagsIcon from '../../assets/images/icons/pepicons_label.png'
// import editIcon from '../../assets/images/icons/clarity_edit-line.png'
import { watch, closeIcon } from "../../assets/images/icons";
import { Modal, Box } from '@mui/material'

export const DueDate = ({ toggleMode, setToggleMode }) => {

    const [open, setOpen] = useState(false);
    const [startCheckbox, setStartCheckbox] = useState(false)
    const [endCheckbox, setEndCheckbox] = useState(false)
    const { dueDate } = toggleMode;

    useEffect(() => {
        dueDate && setOpen(p => !p)
    }, [toggleMode])

    const DATE_VALUE = [
        { value: "יום לפני תאריך הסיום" },
        { value: "יומיים לפני תאריך הסיום" },
        { value: "שעתיים לפני" },
        { value: "שעה לפני" },
        { value: "10 דקות לפני" },
        { value: "5 דקות לפני" },
        { value: "בזמן תאריך היעד" },
    ]

    return (
        <Modal
            className="new-task-due-date-style"
            open={open}
            onClose={() => setToggleMode(p => !p)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="boxStyle">
                <div className="due-date-headline flex">
                    <span className="btn-close" onClick={() => setToggleMode(p => !p)}>
                        <img src={closeIcon} />
                    </span>
                    <div className="due-date-title flex align-center">
                        תאריך יעד{" "}
                        <img src={watch} alt="due-date-title" />
                    </div>
                </div>
                <div className="due-date-start-date-headline flex">
                    <label className="flex justify-center align-center">
                        תאריך התחלה
                        <input type='checkbox' name="startCheckbox"
                            onChange={() => setStartCheckbox(p => !p)}
                            checked={startCheckbox} />
                    </label>
                </div>
                <div className="due-date-start-date-body flex">
                    <input type="date" date-format="yy/mm/dd" />
                </div>
                <div className="due-date-end-date-headline flex" >
                    <label className="flex justify-center align-center">
                        תאריך יעד
                        <input type='checkbox' name="endCheckbox"
                            onChange={() => setEndCheckbox(p => !p)}
                            checked={endCheckbox} />
                    </label>
                </div>
                <div className="due-date-end-date-body flex">
                    <input type="time" />
                    <input type="date" />
                </div>
                <div className="due-date-set-reminder-label flex">
                    <label>קבע תזכורת</label>
                </div>
                <div className="due-date-set-reminder-select">
                    <select>
                        {DATE_VALUE.map((val) => (
                            <option key={val.value} style={{ direction: "rtl" }} value={val.value}>
                                {val.value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="due-date-set-reminder-save-btn">
                    <button className="save-btn" onClick={() => setToggleMode(p => !p)}>שמור</button>
                </div>
            </Box>
        </Modal>
    );
}