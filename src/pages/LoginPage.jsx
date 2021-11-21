import React, { useState } from 'react';
import LoginGoogle from '../cmps/login_page/LoginGoogle.jsx';
import LoginLinkedIn from '../cmps/login_page/LoginLinkdin.jsx';
import logo from '../assets/images/login--page/login--logo.png';
import { Email, LockRounded } from '@material-ui/icons';
import Inputs from "../cmps/inputs/Inputs.jsx";
import { Button, FormHelperText, makeStyles } from "@material-ui/core";
import Progress from "../cmps/progress/Progress";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        margin: theme.spacing(2, 0),
    },
    submit: {
        margin: theme.spacing(4, 0),
        color: '#FFF',
        background: '#34018E'
    },
    button: {
        margin: theme.spacing(0.2),
    },
    root: {
        margin: 0
    },
}));

const textFieldArr = [
    { id: "Email", label: "אימייל", icon: <Email color="primary" />, type: 'Email', required: true },
    { id: "password", label: "סיסמה", icon: <LockRounded color="primary" />, type: 'password', required: true }
];

function LoginPage(props) {
    const classes = useStyles();


    const [formData, setFormData] = useState({
        Email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'Email':
                setFormData({ ...formData, Email: value });
                break;
            case 'password':
                setFormData({ ...formData, password: value });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setError('');
            setIsLoading(true);
            // handleLogin();
        } else {
            setError('Error: Invalid Form');
        }
    }

    const validateForm = () => {
        return formData.Email !== '' && formData.password !== '';
    }

    const handleLogin = async () => {
        const dataObj = {
            action: 'login',
            Email: formData.Email,
            password: formData.password,
        };
        try {
            // let response = await loginUser(dispatch, dataObj);
            setIsLoading(false);
            // if (!response.token) return;
            props.history.push('/');
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }


    return (
        <Dialog open={openDialog} onClose={closeDialog} >

            <div className="login--container">
                <div className="login--logo">

                    <img src={logo} alt="" />

                    <div className="login--logo--text">
                        !ברוכים הבאים לקהילה שלנו
                    </div>

                </div>
                <div className="login--form">
                    <h1>התחברות</h1>
                    <h3>היכנס באמצעות חשבונות קיימים</h3>
                    <div className="login--form--socials">
                        <LoginGoogle />
                        <LoginLinkedIn />
                    </div>

                    <div className="login--form--line--wrapper">
                        <span className="login--form--line" />
                        <h4>או</h4>
                        <span className="login--form--line" />
                    </div>

                    <div className="login-form-inputs">
                        <form className={classes.form}>
                            <Inputs inputs={textFieldArr} handleChange={handleChange} />
                            <a href="" className="forgot--password"> שכחתי סיסמה</a>
                            <FormHelperText error={error !== ''}><h2><center>{error}</center></h2></FormHelperText>
                            <Button disabled={isLoading} type="submit" fullWidth variant="contained" color="primary"
                                className={classes.submit} size='large' onClick={handleSubmit} key="submitBtn">
                                התחברות
                            </Button>
                            <Progress isShow={isLoading} handleClose={() => setIsLoading(false)} msg={'Please Wait'} />
                        </form>
                    </div>
                    <a href=""> !עדיין לא נרשמת?הירשם עכשיו</a>

                </div>
            </div >

        </Dialog>
    );
}

export default LoginPage;