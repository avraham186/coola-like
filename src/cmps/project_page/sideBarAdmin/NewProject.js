import React, { useState, useEffect, useContext } from 'react';
import { watch, closeIcon } from "../../../assets/images/icons";
import { Modal, Box } from '@mui/material'
import { TaskContext } from "../../../Context/TaskContext";

export const NewProject = ({ toggleMode, setToggleMode }) => {

    // const [open, setOpen] = useState(false);
    // const [startCheckbox, setStartCheckbox] = useState(false)
    // const [endCheckbox, setEndCheckbox] = useState(false)
    // const [dateToSave, setDateToSave] = useState({
    //     startDate: '',
    //     endDate: '',
    //     time: '',
    //     reminder: ''
    // })
    // const { taskContent, setTaskContent } = useContext(TaskContext);
    // // const { dueDate } = toggleMode;

    // useEffect(() => {
    //     // dueDate && setOpen(p => !p)
    // }, [toggleMode])

    // const DATE_VALUE = [
    //     { value: taskContent.date.reminder ? taskContent.date.reminder : 'עדיין לא נבחרה התראה' },
    //     { value: "יום לפני תאריך הסיום" },
    //     { value: "יומיים לפני תאריך הסיום" },
    //     { value: "שעתיים לפני" },
    //     { value: "שעה לפני" },
    //     { value: "10 דקות לפני" },
    //     { value: "5 דקות לפני" },
    //     { value: "בזמן תאריך היעד" },
    // ]
    // const handleDate = e => {
    //     const date = e.target.value
    //     const name = e.target.name
    //     console.log('date', date, name);

    //     setTaskContent((p) => ({
    //         ...p,
    //         date: {
    //             ...p.date,
    //             [name]: date
    //         }
    //     }));
    //     setDateToSave(p => ({ ...p, [name]: date }))
    // }

    return (
        <Modal
        //     className="modals"
        //     open={open}
        //     onClose={() => setToggleMode(p => ({
        //         ...p,
        //         dueDate: !p.dueDate
        //     }))
        //     }
        //     aria-labelledby="modal-modal-title"
        //     aria-describedby="modal-modal-description"
         >
            <Box className="box-modal">
                <div className="box">
                 Helo New Pro
                </div>
            </Box>
        </Modal>
    );
}