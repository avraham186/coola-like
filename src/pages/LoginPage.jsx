import React, {useState} from 'react';
import logo from '../assets/images/login--page/login--logo.png';
import LoginForm from "../cmps/login_page/right_view/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import SignUp from "../cmps/login_page/right_view/SignUp";


function LoginPage() {

    const projects = useSelector(state => state.entities.user.view);

    return (
        <div className="login--container">
            <div className="login--logo">
                <img src={logo} alt=""/>
                <div className="login--logo--text">
                    !ברוכים הבאים לקהילה שלנו
                </div>
            </div>
            {
                projects === 'signup' ? <SignUp /> : <LoginForm />
            }

        </div>
    );
}

export default LoginPage;