import React from 'react';
import LoginGoogle from '../cmps/login_page/LoginGoogle.jsx';
import LoginLinkedIn from '../cmps/login_page/LoginLinkdin.jsx';

function LoginPage() {


    return (
        <>
            <h1>!ברוכים_הבאים#</h1>
            <h5>הכנסו באמצעות חשבונות קימים</h5>
            <LoginGoogle/>
            <LoginLinkedIn/>
        </>
    );
}

export default LoginPage;