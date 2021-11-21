import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import React, { useState } from 'react';
import LoginGoogle from '../cmps/login_page/LoginGoogle.jsx';
import LoginLinkedIn from '../cmps/login_page/LoginLinkdin.jsx';
import { Link } from 'react-router-dom'
function LoginPage() {
    const [openDialog, setOpenDialog] = useState(true)
    const [closeDialog, setCloseDialog] = useState(false)

    return (
        <>
            <Dialog open={openDialog} onClose={closeDialog} >
                <DialogTitle id="alert-dialog-title">
                    <h1> {" !ברוכים_הבאים#"}</h1>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h3>הכנסו באמצעות חשבונות קימים</h3>
                        <LoginGoogle closeDialog={closeDialog} setCloseDialog={setCloseDialog} />
                        <LoginLinkedIn />
                    </DialogContentText>
                </DialogContent>


            </Dialog>
            {
                closeDialog === false ?
                    <Link to='\home' /> : null

            }
        </>
    );
}

export default LoginPage;