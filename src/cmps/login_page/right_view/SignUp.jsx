import React, {useState} from 'react';
import {Button, FormHelperText, makeStyles, MenuItem, Select} from "@material-ui/core";
import Inputs from "../../inputs/Inputs";
import Progress from "../../progress/Progress";
import ArrowRight from "../../../assets/images/login--page/login--arrow--right.png";
import {setLogin} from "../../../store/user";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
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
    inputs: {
        marginTop: 18,
        borderRadius: 10,
        padding: '4px 20px 4px 20px',
        fontSize: "14px",
        width: '98%',
        color: "#000",
        backgroundColor: "#FFF",
        border: 'none',
        fontFamily: 'RubiK',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
    },
    placeholder: {
        color: "#aaa",
        textAlign: 'right',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    icon: {
        left: 10
    },
}));

const textFieldArr = [
    {id: "username", label: "שם משתמש", type: 'text', required: true},
    {id: "Email", label: "אימייל", type: 'email', required: true},
    {id: "password", label: "סיסמה", type: 'password', required: true}
];

// Move this to utils folder
const interestsArr = [
    'FULLSTACK',
    'FRONTEND',
    'BACKEND',
    'QA',
    'UX',
    'UI',
    'AUTOMATION',
    'SECURITY',
    'INFRASTRUCTURE',
    'CLOUD_SECURITY_ENGINEER',
    'QUALITY_ASSURANCE_ENGINEER',
    'WEB_DEVELOPER',
    'ANDROID_DEVELOPER',
    'SOLUTIONS_ENGINEER',
    'DEVOPS_ENGINEER',
    'FRAMEWORK_DEVELOPER',
    'BIGDATA',
    'MOBILE_DEVELOPER',
    'CYBER',
    'FIRMWARE_VALIDATION',
    'DESIGN_SYSTEM',
    'SUPPORT_ENGINEER',
    'MARKETING_WEB_DEVELOPER'
];


const Placeholder = ({children}) => {
    const classes = useStyles();
    return <div className={classes.placeholder}>{children}</div>;
};

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        Email: '',
        password: '',
        interests: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'username':
                setFormData({...formData, username: value});
                break;
            case 'Email':
                setFormData({...formData, Email: value});
                break;
            case 'password':
                setFormData({...formData, password: value});
                break;
            case 'interests':
                setFormData({...formData, interests: value});
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
            console.log(formData)
            // handleRegistration();
        } else {
            setError('Error: Invalid Form');
        }
    }

    const validateForm = () => {
        return formData.username !== '' && formData.Email !== '' && formData.password !== '';
    }

    return (
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> חזר לדף הבית<img src={ArrowRight} alt="right arrow" className="login--arrow"/></a>
            </div>
            <div className="login--form--body">
                <h1>התחברות</h1>
                <h3>יצירת חשבון חדש</h3>

                <div className="login-form-inputs">
                    <form>

                        <Inputs inputs={textFieldArr} handleChange={handleChange}/>

                        <Select
                            disableUnderline
                            key="interests"
                            id="interests"
                            name="interests"
                            value={formData.interests}
                            displayEmpty
                            onChange={handleChange}
                            renderValue={
                                formData.interests !== "" ? undefined : () => <Placeholder>בחירת תחומי עניין</Placeholder>
                            }
                            className={classes.inputs}
                            classes={{icon: classes.icon}}
                        >
                            {
                                interestsArr.map((v, i) => {
                                    return <MenuItem key={i} value={v}>{v}</MenuItem>
                                })
                            }
                        </Select>

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

                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    dispatch(setLogin({view: 'signin'}))
                }}>בחזרה לדף התחברות</a>

            </div>
        </div>
    );
};

export default SignUp;