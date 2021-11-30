import React, { useState } from 'react';
import { Button, FormHelperText, makeStyles, MenuItem, Select } from "@material-ui/core";
import Inputs from "../../inputs/Inputs";
import Progress from "../../progress/Progress";
import ArrowRight from "../../../assets/images/login--page/login--arrow--right.png";
import { setLogin } from "../../../store/user";
import { useDispatch } from "react-redux";
// import {MultiSelect} from "react-multi-select-component";


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(0, 3, 3),
        color: '#FFF',
        backgroundColor: "#34018E",
        border: "2px solid #34018E",
        borderRadius: "2px 15px",
        fontSize: "18px",
        width: "200px",
        marginTop: "50px",
        '&:hover': {
            backgroundColor: "#34018E",
            /* offset-x | offset-y | blur-radius | spread-radius | color */
            boxShadow: '0px 0px 6px 1px #34018E'
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
        color: "#AAA",
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
    { id: "Email", label: "אימייל", type: 'email', required: true },
    { id: "password", label: "סיסמה", type: 'password', required: true },
    { id: "password2", label: "אימות סיסמה", type: 'password', required: true }
];

// Move this to utils folder
const interestsArr = [
    { label: "Fullstack", value: "FULLSTACK" },
    { label: "Frontend", value: "FRONTEND" },
    { label: "Backend", value: "BACKEND" },
    { label: "QA", value: "QA" },
    { label: "UX", value: "UX" },
    { label: "UI", value: "UI" },
    { label: "Automation", value: "AUTOMATION" },
    { label: "Security", value: "SECURITY" },
    { label: "Infrastructure", value: "INFRASTRUCTURE" },
    { label: "Cloud security engineer", value: "CLOUD_SECURITY_ENGINEER" },
    { label: "Quality assurance engineer", value: "QUALITY_ASSURANCE_ENGINEER" },
    { label: "Web developer", value: "WEB_DEVELOPER" },
    { label: "Android developer", value: "ANDROID_DEVELOPER" },
    { label: "Solution engineer", value: "SOLUTIONS_ENGINEER" },
    { label: "DevOps engineer", value: "DEVOPS_ENGINEER" },
    { label: "Framework developer", value: "FRAMEWORK_DEVELOPER" },
    { label: "BigData", value: "BIGDATA" },
    { label: "Mobile developer", value: "MOBILE_DEVELOPER" },
    { label: "Cyber", value: "CYBER" },
    { label: "Firmware validation", value: "FIRMWARE_VALIDATION" },
    { label: "Design system", value: "DESIGN_SYSTEM" },
    { label: "Support engineer", value: "SUPPORT_ENGINEER" },
    { label: "Marketing web developer", value: "MARKETING_WEB_DEVELOPER" },
];


const Placeholder = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.placeholder}>{children}</div>;
};

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        Email: '',
        password: '',
        password2: '',
        interests: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = ({ name, value }) => {
        switch (name) {
            case 'Email':
                setFormData({ ...formData, Email: value });
                break;
            case 'password':
                setFormData({ ...formData, password: value });
                break;
            case 'password2':
                setFormData({ ...formData, password2: value });
                break;
            case 'interests':
                setFormData({ ...formData, interests: value });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        if (validateForm() && validatePassword()) {
            setIsLoading(true);
            console.log(formData)
            // handleRegistration();
        } else {
            if (!validateForm())
                setError('Error: Invalid form');
            if (!validatePassword())
                setError('Error: Passwords doesn\'t match');
        }
    }

    const validateForm = () => {
        return formData.Email !== '' && formData.password !== '' && formData.password2 !== '';
    }

    const validatePassword = () => {
        return formData.password === formData.password2;
    }


    const [selected, setSelected] = useState([]);

    return (
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> חזר לדף הבית<img src={ArrowRight} alt="right arrow" className="login--arrow" /></a>
            </div>
            <div className="login--form--body">
                <h1>התחברות</h1>
                <h3>יצירת חשבון חדש</h3>

                <div className="login-form-inputs">
                    <form>

                        <Inputs inputs={textFieldArr} handleChange={handleChange} />


                        {/*<MultiSelect*/}
                        {/*    options={interestsArr}*/}
                        {/*    value={selected}*/}
                        {/*    onChange={handleChange}*/}
                        {/*    name="interests"*/}
                        {/*    className={classes.inputs}*/}
                        {/*/>*/}

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
                            classes={{ icon: classes.icon }}
                        >
                            {
                                interestsArr.map((v, i) => {
                                    return <MenuItem key={i} value={v.value}>{v.label}</MenuItem>
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

                        <Progress isShow={isLoading} handleClose={() => setIsLoading(false)} msg={'Please Wait'} />

                    </form>
                </div>

                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    dispatch(setLogin({ view: 'signin' }))
                }}>בחזרה לדף התחברות</a>

            </div>
        </div>
    );
};

export default SignUp;