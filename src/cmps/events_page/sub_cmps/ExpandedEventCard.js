import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

const ExpandedEventCard = (props) => {
    
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
                onClose={() => setToggleMode(p => ({ ...p, file: !p.file }))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-modal">
                    <button className="save-modal-button"
                        onClick={() => setToggleMode(p => ({ ...p, file: !p.file }))}>
                        שמור
                    </button>
                </Box>
            </Modal>
        </div>
    )

}


export default ExpandedEventCard