import React from 'react';
import LoginGoogle from './LoginGoogle';
import LoginLinkdin from './LoginLinkdin';
import Logout from './LogoutGoogle';

function Login() {


    return (
        <>
            <h1>!ברוכים_הבאים#</h1>
            <h5>הכנסו באמצעות חשבונות קימים</h5>
            <LoginGoogle></LoginGoogle>
            {/* <Logout></Logout> */}
            <LoginLinkdin></LoginLinkdin>
        </>
    );
}

export default Login;