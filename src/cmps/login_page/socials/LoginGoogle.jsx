import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { refreshTokenSetup } from '../../../utils/refreshToken';
import Button from '@mui/material/Button';
// import { useDispatch } from "react-redux";
// import { googleProfile } from "../../../store/user";
// import { googleLogin, getUser } from "../../../store/user";
import GoogleLogo from '../../../assets/images/login--page/socials/google--logo.png';
import Avatar from "@mui/material/Avatar";
// import { Link, Redirect, useHistory } from "react-router-dom";

// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle({ handleOpen, handleClose }) {

    // const dispatch = useDispatch();
    // const history = useHistory();

    // const onSuccess = (res) => {
    //     console.log('Login Success: currentUser:', res.profileObj);
    //     dispatch(googleProfile(res.profileObj));
    //     history.push("/");
    //     refreshTokenSetup(res);
    // };
    const buttonStyle = {
        borderRadius: 10, padding: "10px 36px",
        fontSize: "14px",
        color: "#000",
        backgroundColor: "#FFF",
        border: 'none',
        fontFamily: 'RubiK-regular',
        textTransform: 'none',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        outline: 'none',
    }
    const test = () => {
        window.location.href = `${process.env.REACT_APP_URI}${process.env.REACT_APP_GOOGLE_CLIENT_ID}`
    }

    // const onFailure = (res) => {
    //     console.log('Login failed: res:', res);
    // };

    return (
        <div className="google" >
            <Button style={buttonStyle} onClick={test}
                endIcon={<Avatar src={GoogleLogo} sx={{ width: 20, height: 20 }} />}
            >
                Google
            </Button>
        </div>
    );
}

export default LoginGoogle