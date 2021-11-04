import React, { useEffect } from 'react';
import tagsIcon from '../../assets/images/icons/pepicons_label.png'
import './css/AddFileDesign.css'
import editIcon from '../../assets/images/icons/clarity_edit-line.png'
import { Button, Modal, Box } from '@mui/material'

function AddTags({toggleMode,setToggleMode}) {
    const [open, setOpen] = React.useState(false);
    const { label } = toggleMode;
    useEffect(() => {
        label && setOpen(p => !p)
    }, [props.toggleLables])
    let tags = (
        <>
            <div className='tagContainer'>
                <img src={editIcon} style={{ width: "20px", height: '20px', marginTop: '3px' }} /> <div className='tag' style={{ backgroundColor: '#61BD4F' }} />
            </div>
            <div className='tagContainer'>
                <img src={editIcon} style={{ width: "20px", height: '20px', marginTop: '3px' }} /> <div className='tag' style={{ backgroundColor: '#F2D600' }} />
            </div>
            <div className='tagContainer'>
                <img src={editIcon} style={{ width: "20px", height: '20px', marginTop: '3px' }} /> <div className='tag' style={{ backgroundColor: '#FF9F1A' }} />
            </div>
            <div className='tagContainer'>
                <img src={editIcon} style={{ width: "20px", height: '20px', marginTop: '3px' }} /> <div className='tag' style={{ backgroundColor: '#EB5A46' }} />
            </div>
            <div className='tagContainer'>
                <img src={editIcon} style={{ width: "20px", height: '20px', marginTop: '3px' }} /> <div className='tag' style={{ backgroundColor: '#0079BF' }} />
            </div>
        </>
    )

    return (
        <div className="style">
            {/* <Button >Open tags</Button> */}
            <Modal
                open={open}
                onClose={() => props.setToggleLables(p => !p)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="boxStyle">
                    <span>תגיות <img src={tagsIcon} /></span>
                    <hr style={{ width: '300px' }} />
                    <input type='text' className="addLinkInput" placeholder='חפש תגית' />
                    <div className={'tagsContainer'}>
                        {tags}
                    </div>
                    <button className="addTag">צור תגית חדשה</button>
                    <button className='addLinkButton'>שמור</button>
                </Box>
            </Modal>
        </div>
    );
}

export default AddTags;