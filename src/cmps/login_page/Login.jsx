import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/coola_like_logo.svg';
import LoginGoogle from './LoginGoogle';
import LoginLinkedIn from './LoginLinkdin';

function Login() {

    return (

        <section className="login_section_bg">
            <div className="login_section">

                <Link to="/">
                    <object data={logo} type="image/svg+xml" className="coola_like_logo"/>
                </Link>
                <h1>!ברוכים_הבאים#</h1>
                <h5>הכנסו באמצעות חשבונות קיימים</h5>
                <div className="login_options">
                    <LoginGoogle/>
                    <LoginLinkedIn/>
                </div>
            </div>
        </section>

    );
}

export default Login;