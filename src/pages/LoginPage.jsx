import React from 'react';
import logo from '../assets/images/login--page/login--logo.png';
import LoginForm from "../cmps/login_page/right_view/LoginForm";


function LoginPage() {
    return (
        <div className="login--container">
            <div className="login--logo">
                <img src={logo} alt=""/>
                <div className="login--logo--text">
                    !ברוכים הבאים לקהילה שלנו
                </div>
            </div>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;