import React, {useState} from "react"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ExpandedEventCard = () => {

    const [open, setOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })


    return (
        <div>
            <Modal
                className="modals"
                open={open}
                onClose={() => setToggleMode(p => ({...p, file: !p.file}))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-modal">
                    <button className="save-modal-button"
                            onClick={() => setToggleMode(p => ({...p, file: !p.file}))}>
                        שמור
                    </button>
                </Box>
            </Modal>
        </div>
    )

}


export default ExpandedEventCard