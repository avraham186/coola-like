import React, {useState} from 'react';
import {Button, FormHelperText, makeStyles} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import LoginGoogle from "../socials/LoginGoogle";
import LoginLinkedIn from "../socials/LoginLinkdin";
import Inputs from "../../inputs/Inputs";
import Progress from "../../progress/Progress";
import ArrowRight from "../../../assets/images/login--page/login--arrow--right.png";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log(response);
}

const useStyles = makeStyles((theme) => ({
    form: {
        // margin: theme.spacing(2, 0),
    },
    submit: {
        margin: theme.spacing(0, 3, 3),
        color: '#34018E',
        backgroundColor: "transparent",
        border: "2px solid #34018E",
        borderRadius: "2px 15px",
        fontSize: "18px",
        width: "200px",
        marginTop: "50px",
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    button: {
        margin: theme.spacing(0.2),
    },
    root: {
        margin: 0
    },
}));

const textFieldArr = [
    {id: "Email", label: "אימייל", type: 'Email', required: true},
    {id: "password", label: "סיסמה", type: 'password', required: true}
];

const LoginForm = (props) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        Email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'Email':
                setFormData({...formData, Email: value});
                break;
            case 'password':
                setFormData({...formData, password: value});
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
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> חזר לדף הבית<img src={ArrowRight} alt="right arrow" className="login--arrow"/></a>
            </div>
            <div className="login--form--body">
                <h1>התחברות</h1>
                <h3>היכנס באמצעות חשבונות קיימים</h3>
                <div className="login--form--socials">
                    <LoginGoogle/>
                    <LoginLinkedIn/>
                    {/*<FacebookLogin*/}
                    {/*    appId="1088597931155576"*/}
                    {/*    autoLoad*/}
                    {/*    callback={responseFacebook}*/}
                    {/*    render={renderProps => (*/}
                    {/*        <button onClick={renderProps.onClick}>This is my custom FB button</button>*/}
                    {/*    )}*/}
                    {/*/>*/}
                </div>

                <div className="login--form--line--wrapper">
                    <span className="login--form--line"/>
                    <h3>או</h3>
                    <span className="login--form--line"/>
                </div>

                <div className="login-form-inputs">
                    <form className={classes.form}>

                        <Inputs inputs={textFieldArr} handleChange={handleChange}/>

                        <div className="forgot--password">
                            <a href=""> שכחתי סיסמה</a>
                        </div>

                        <FormHelperText error={error !== ''}>
                            <h2>
                                <center>{error}</center>
                            </h2>
                        </FormHelperText>

                        <Button disabled={isLoading} type="submit" variant="contained" color="primary"
                                className={classes.submit} size='large' onClick={handleSubmit} key="submitBtn">
                            התחברות
                        </Button>

                        <Progress isShow={isLoading} handleClose={() => setIsLoading(false)} msg={'Please Wait'}/>

                    </form>
                </div>
                <a href=""> !עדיין לא נרשמת? הירשם עכשיו</a>
            </div>
        </div>
    );
};

export default LoginForm;