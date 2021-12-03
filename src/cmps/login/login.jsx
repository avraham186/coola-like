import React from 'react';
import {Link} from 'react-router-dom';
import coola_like_logo from '../../assets/images/coola_like_logo.svg';
import LoginGoogle from './LoginGoogle';
import LoginLinkdin from './LoginLinkdin';
import {Grid, Paper, Avatar} from '@material-ui/core'

function Login() {

    return (

            <section className="login_section_bg">
                <div className="login_section">

            <Link to="/">
                        <object data={coola_like_logo} type="image/svg+xml" className="coola_like_logo"></object>
            </Link>
                <h1>!ברוכים_הבאים#</h1>
                <h5>הכנסו באמצעות חשבונות קיימים</h5>
                    <div className="login_options">
                        <LoginGoogle></LoginGoogle>
                        <LoginLinkdin></LoginLinkdin>
                    </div>
                </div>
            </section>
        
    );
}

export default Login;