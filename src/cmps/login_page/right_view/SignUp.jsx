import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, makeStyles, MenuItem, Select, InputAdornment, TextField , IconButton} from "@material-ui/core";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormGroup, FormControlLabel , Checkbox } from '@mui/material';

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
    //interestsButton:{

    //}
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
        { label: "???????????? ??????????", checked: QA , name: "QA" },
        { label: "?????????? ???????? ????????????", checked: CYBER , name: "CYBER" },
        { label: "?????????? ??????????", checked: DEVELOPMENT , name: "DEVELOPMENT" },
        { label: "??????????", checked: HARDWARE , name: "HARDWARE" },
        { label: "UX/UI", checked: UX_UI , name: "UX_UI" },
        { label: "?????????? ????????????", checked: SYSTEMS_ENGINEERING , name: "SYSTEMS_ENGINEERING" },
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


    function interestFormControl({label, checked, name}){
        return(
            <FormControlLabel
                control={
                <Checkbox checked={checked} onChange={handleInterestsChange} name={name} />
                }
                label={label}
            />
        );
    }

    return (
        <div className="login--form">
            <div className="login--form--header">
                <a href="/"> ???????? ?????? ????????<img src={ArrowRight} alt="right arrow" className="login--arrow" /></a>
            </div>
            <div className="login--form--body">
                <h1>??????????</h1>
                <h3>?????????? ?????????? ??????</h3>

                <div className="login-form-inputs">
                    <form onSubmit={handleSubmit(send)}>

                        {/*<Inputs inputs={textFieldsArr} />*/}
                        <Input className={classes.inputs} id="first_name" label="???? ????????" type= 'text' required={true} registerObj={{...register("firstName")}}/>
                        <Input className={classes.inputs} id="surname" label= "???? ??????????" type= 'text' required={true} registerObj={{...register("lastName")}}/>
                        <Input className={classes.inputs} id="Email" label= "????????????" type= 'email' required={true}  registerObj={{...register("email")}}/>
                        <Input className={classes.inputs} id="password" label= "??????????" type= 'password' required={true} registerObj={{...register("password")}}/>
                        <Input className={classes.inputs} id="password2" label="?????????? ??????????" type='password' required={true} handleChange={(pass)=>{setPassVerify(pass.target.value)}}/>
                        
                        <div className="login--form--inputs" style={{ marginTop: 30, textAlign:'right'}}  >
                           ?????? ?????????? ??????????
                        </div>
                        <FormControl >
                            <FormGroup >
                           {Array.from(interestsModel).map(item=>
                                <FormControlLabel
                                    key = {item.key}
                                    control={
                                    <Checkbox checked={item.checked} onChange={handleInterestsChange} name={item.name} />
                                    }
                                    label={item.label}
                                />)
                            }
                            </FormGroup>
                        </FormControl>
                        
                        <Button 
                        //disabled={}
                        type="submit" variant="contained" color="primary"
                            className={classes.submit} size='large' 
                            //onClick={}
                            key="submitBtn">
                            ??????????????
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
                }}>?????????? ?????? ??????????????</a>

            </div>
        </div>
    );
};

export default SignUp;