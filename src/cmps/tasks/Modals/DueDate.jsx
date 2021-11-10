import React, { useState, useEffect } from 'react';
import { watch, closeIcon } from "../../../assets/images/icons";
import { Modal, Box } from '@mui/material'

export const DueDate = ({ toggleMode, setToggleMode, setTaskToSave }) => {

    const [open, setOpen] = useState(false);
    const [startCheckbox, setStartCheckbox] = useState(false)
    const [endCheckbox, setEndCheckbox] = useState(false)
    const [dateToSave, setDateToSave] = useState({
        startDate: '',
        endDte: '',
        time: '',
        remind: ''
    })
    const { dueDate } = toggleMode;

    useEffect(() => {
        dueDate && setOpen(p => !p)
    }, [toggleMode])
    // useEffect(() => {
    //     setTaskToSave(p => ({ ...p, dueDate: dateToSave }))
    // }, [startCheckbox,endCheckbox]);

    const DATE_VALUE = [
        { value: "יום לפני תאריך הסיום" },
        { value: "יומיים לפני תאריך הסיום" },
        { value: "שעתיים לפני" },
        { value: "שעה לפני" },
        { value: "10 דקות לפני" },
        { value: "5 דקות לפני" },
        { value: "בזמן תאריך היעד" },
    ]
    const handleDate = (ev, startEnd) => {
        const date = ev.target.value
        switch (startEnd) {
            case 'start':
                setDateToSave(p => ({
                    ...p,
                    startDate: date
                }))
                break;
            case 'end':
                setDateToSave(p => ({
                    ...p,
                    endDate: date
                }))
                break;
            case 'time':
                setDateToSave(p => ({
                    ...p,
                    time: date
                }))
                break;
            case 'reminder':
                setDateToSave(p => ({
                    ...p,
                    remind: date
                }))
                break;

            default:
                break;
        }
    }

    return (
        <Modal
            className="modals"
            open={open}
            onClose={() => setToggleMode(p => ({
                ...p,
                dueDate: !p.dueDate
            }))
            }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="box-modal">
                <div className="new-task-due-date-style">
                    <div className="due-date-headline flex">
                        <span className="btn-close"
                            onClick={() => setToggleMode(p => ({
                                ...p,
                                dueDate: !p.dueDate
                            }))
                            }>
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
                    {startCheckbox && <div className="due-date-start-date-body flex">
                        <input type="date" date-format="yy/mm/dd"
                            onChange={(ev) => handleDate(ev, 'start')} />
                    </div>}
                    <div className="due-date-end-date-headline flex" >
                        <label className="flex justify-center align-center">
                            תאריך יעד
                            <input type='checkbox' name="endCheckbox"
                                onChange={() => setEndCheckbox(p => !p)}
                                checked={endCheckbox} />
                        </label>
                    </div>
                    {endCheckbox && <div className="due-date-end-date-body flex">
                        <input type="time" onChange={(ev) => handleDate(ev, 'time')} />
                        <input type="date" onChange={(ev) => handleDate(ev, 'end')} />
                    </div>}
                    <div className="due-date-set-reminder-label flex">
                        <label>קבע תזכורת</label>
                    </div>
                    <div className="due-date-set-reminder-select">
                        <select onChange={(ev) => handleDate(ev, 'reminder')}>
                            {DATE_VALUE.map((val) => (
                                <option key={val.value}
                                    value={val.value}>
                                    {val.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="due-date-set-reminder-save-btn">
                        <button className="save-btn"
                            onClick={() => setToggleMode(p => ({
                                ...p,
                                dueDate: !p.dueDate
                            }))
                            }>
                            שמור
                        </button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}