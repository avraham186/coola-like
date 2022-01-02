import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, makeStyles, MenuItem, Select, InputAdornment, TextField , IconButton} from "@material-ui/core";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormGroup, FormControlLabel , Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
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
   
    
    interestBox: {
        flexWrap: "wrap",
        //gap: "rem(15px)",
        height: "17px",
        background: "#FFFFFF",
        border: "0.5px solid #C4C4C4",
        borderRadius: "10px",
        //cursor: "pointer",
        padding: '10px 10px 10px 10px',
        color: "#2C2C2C",

        'input:hover ~ &': {
            background: "rgba(52, 1, 142, 0.3)",
         },
         /*
        "&.active": {
            flexWrap: "wrap",
            gap: "rem(15px)",
            height: "37px",
            background: (props) => props.background,
            border: "0.5px solid #C4C4C4",
            borderRadius: "10px",
            //cursor: "pointer",
            padding: '10px 10px 10px 10px',
            color: "#2C2C2C",
        },
        */
    },

    interestBoxChecked: {
        flexWrap: "wrap",
        //gap: "rem(15px)",
        height: "17px",
        background: "rgba(52, 1, 142, 0.2)",
        border: "0.5px solid #C4C4C4",
        borderRadius: "10px",
        //cursor: "pointer",
        padding: '10px 10px 10px 10px',
        color: "#2C2C2C",
        'input:hover ~ &': {
            background: "rgba(52, 1, 142, 0.4)",
         },

    },

}));


  


const SignUp = () => {

    const signUpURL = "/api/users/create";

    const {register, handleSubmit, formState:{errors}} = useForm();

    const classes = useStyles();
    const dispatch = useDispatch();

    const [passVerify, setPassVerify] = useState("");

    const [interests, setInterests] = useState([]);

    const [interestsStatus, setInterestsStatus] = useState({
        QA: false,
        CYBER: false,
        DEVELOPMENT: false,
        HARDWARE: false,
        UX_UI: false,
        SYSTEMS_ENGINEERING: false,
      });

    const { QA, CYBER, DEVELOPMENT, HARDWARE, UX_UI, SYSTEMS_ENGINEERING } = interestsStatus;

    const  interestsModel = [
        { label: "בדיקות תוכנה", checked: QA , name: "QA" },
        { label: "אבטחת מידע וסייבר", checked: CYBER , name: "CYBER" },
        { label: "פיתוח תוכנה", checked: DEVELOPMENT , name: "DEVELOPMENT" },
        { label: "חומרה", checked: HARDWARE , name: "HARDWARE" },
        { label: "UX/UI", checked: UX_UI , name: "UX_UI" },
        { label: "הנדסת מערכות", checked: SYSTEMS_ENGINEERING , name: "SYSTEMS_ENGINEERING" },
    ];

    const handleInterestsChange = (event) => {
        setInterestsStatus({
          ...interestsStatus,
          [event.target.name]: event.target.checked,
        });
        if (event.target.checked === true){
            if (!interests.includes(event.target.name)){
                interests.push(event.target.name);
            }
        } else {
            if (interests.includes(event.target.name)){
                interests.splice(interests.indexOf(event.target.name),1);
            }
        }
        console.log(interests);
      };


    function send(userData) {
        //console.log(interests);
        userData.interests=interests;
        if(passVerify===userData.password){
            console.log("password check success");
            console.log(userData);
        }
        else {
            console.log("passwords are not equals. ("+passVerify+")");
        }
        /*
        axios.post(signUpURL,userData)
        .then(()=>{
            notify.success("customer was added!")
            history.push("/");
        }).catch(error=>{
            notify.error("Sorry, can't add customer.")
        }) 
        */
    }

 

    return (
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> חזרה לדף הבית<img src={ArrowRight} alt="right arrow" className="login--arrow" /></a>
            </div>
            <div className="login--form--body">
                <h1>הרשמה</h1>
                <h3>יצירת חשבון חדש</h3>

                <div className="login-form-inputs">
                    <form onSubmit={handleSubmit(send)}>
        
                        {/*<Inputs inputs={textFieldsArr} />*/}
                        <Input className={classes.inputs} id="fullName" label="שם מלא (אנגלית)" type= 'text' required={true} registerObj={{...register("fullName")}}/>
                        <Input className={classes.inputs} id="Email" label= "אימייל" type= 'email' required={true}  registerObj={{...register("email")}}/>
                        <Input className={classes.inputs} id="password" label= "סיסמה" type= 'password' required={true} registerObj={{...register("password")}}/>
                        <Input className={classes.inputs} id="password2" label="אימות סיסמה" type='password' required={true} handleChange={(pass)=>{setPassVerify(pass.target.value)}}/>
                        
                        <div className="login--form--inputs" style={{ marginTop: 30, textAlign:'right'}}  >
                           בחר תחומי עניין
                        </div>

                        <div className="interest flex column">
                            <FormControl >
                                <FormGroup>
                                <div className="interest-content flex">
                                {Array.from(interestsModel).map(item=>
                                    <Checkbox key = {item.key} checked={item.checked} onChange={handleInterestsChange} name={item.name} 
                                        className={classes.interestBox}
                                        disableRipple
                                        color="default"
                                        checkedIcon={<span className={classes.interestBoxChecked}>
                                        {item.label}
                                        </span>}
                                        icon={<span className={classes.interestBox}>
                                        {item.label}
                                        </span>}
                                        //inputProps={{ "aria-label": 'Checkbox demo' }}
                                        />
                                    )
                                }
                                </div>
                                </FormGroup>
                            </FormControl>
                        </div>

                        {/*} THE ORIGINAL MUI CHECK-BOX DESIGNE:
                        <FormControl >
                            <FormGroup >
                           {Array.from(interestsModel).map(item=>
                                <FormControlLabel
                                    key = {item.key}
                                    control={
                                    <Checkbox  checked={item.checked} onChange={handleInterestsChange} name={item.name} />
                                    }
                                    label={item.label}
                                />)
                            }
                            </FormGroup>
                        </FormControl>
                        {*/}

                        <Button 
                        type="submit" variant="contained" color="primary"
                            className={classes.submit} size='large' 
                            key="submitBtn">
                            התחברות
                        </Button>

                        <Progress 
                        //isShow={} 
                        //handleClose={} 
                        msg={'Please Wait'} />

                    </form>
                </div>
                {/*}
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    dispatch(setLogin({ view: 'signin' }))
                }}>בחזרה לדף התחברות</a>
                {*/}
            </div>
        </div>
    );
};

export default SignUp;