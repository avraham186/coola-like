import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { typography } from '@mui/system';
import grommetIcon from '../../assets/images/icons/grommet-icons_attachment.png'
import AddFileDesign from './css/AddFileDesign.css'

function AddFile(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDrop = ()=>{}

    return (
        <div className="style">
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
        <Box className="boxStyle">
            <span>קבצים <img src={grommetIcon}/></span>
            <hr style={{width:'300px'}}/>
            <div id="dropZone" className='dropZone'>
                גרור לכאן קובץ
                <label className='chooseFromPC'>
                בחר מהמחשב
                <input type='file' style={{display:'none'}}/>
                </label>
            </div>
            <span className='addLinkText'>צרף קישור</span>
            <input type="text" className="addLinkInput" placeholder="הדבק קישור"></input>
            <button className='addLinkButton'>שמור</button>
        </Box>
      </Modal>        
      </div>    
    );
}

export default AddFile;