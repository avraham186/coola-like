import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, makeStyles, MenuItem, Select, InputAdornment, TextField , IconButton} from "@material-ui/core";
import { Visibility, VisibilityOff } from '@mui/icons-material';

//import Inputs from "../../inputs/Inputs";
import Progress from "../../progress/Progress";
import ArrowRight from "../../../assets/images/login--page/login--arrow--right.png";
import { setLogin } from "../../../store/user";
import { useDispatch } from "react-redux";
import {Input} from '../../input/Input.jsx';


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


// Move this to models folder
const  interestsModel = [
    { label: "בדיקות תוכנה", value: "QA" },
    { label: "אבטחת מידע וסייבר", value: "CYBER" },
    { label: "פיתוח תוכנה", value: "DEVELOPMENT" },
    { label: "חומרה", value: "HARDWARE" },
    { label: "UX/UI", value: "UX_UI" },
    { label: "הנדסת מערכות", value: "SYSTEMS_ENGINEERING" },
];


const SignUp = () => {

    const signUpURL = "/api/users/create";

    const {register, handleSubmit, formState:{errors}} = useForm();

    const classes = useStyles();
    const dispatch = useDispatch();

    const [passVerify, setPassVerify] = useState();

    function send(userData) {
        /*
        jwtAxios.post<string>(myURL,customerData)
        .then(()=>{
            notify.success("customer was added!")
            history.push("/ShowAllCustomers");
        }).catch(error=>{
            notify.error("Sorry, can't add customer.")
        }) 
        */
       console.log(userData);
       console.log(passVerify);
    }




    return (
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> חזרה לדף הבית<img src={ArrowRight} alt="right arrow" className="login--arrow" /></a>
            </div>
            <div className="login--form--body">
                <h1>התחברות</h1>
                <h3>יצירת חשבון חדש</h3>

                <div className="login-form-inputs">
                    <form onSubmit={handleSubmit(send)}>

                        {/*<Inputs inputs={textFieldsArr} />*/}
                        <Input className={classes.inputs} id="first_name" label="שם פרטי" type= 'text' required={true} registerObj={{...register("firstName")}}/>
                        <Input className={classes.inputs} id="surname" label= "שם משפחה" type= 'text' required={true} registerObj={{...register("lastName")}}/>
                        <Input className={classes.inputs} id="Email" label= "אימייל" type= 'email' required={true}  registerObj={{...register("email")}}/>
                        <Input className={classes.inputs} id="password" label= "סיסמה" type= 'password' required={true} registerObj={{...register("password")}}/>
                        <Input className={classes.inputs} id="password2" label="אימות סיסמה" type='password' required={true} handleChange={(password2)=>{setPassVerify(password2)}}/>
                                                {/* fix handleChange of password check */}

                        <Select
                            className={classes.inputs} classes={{ icon: classes.icon }} {...register("interests")}
                        >
                            {
                                 interestsModel.map((v, i) => {
                                    return <MenuItem key={i} value={v.value}>{v.label}</MenuItem>
                                })
                            }
                        </Select>
                                                {/* create multiselect */}


                        <Button 
                        //disabled={}
                        type="submit" variant="contained" color="primary"
                            className={classes.submit} size='large' 
                            //onClick={}
                            key="submitBtn">
                            התחברות
                        </Button>

                        <Progress 
                        //isShow={} 
                        //handleClose={} 
                        msg={'Please Wait'} />

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