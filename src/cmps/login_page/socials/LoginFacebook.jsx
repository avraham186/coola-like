import React from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Avatar from "@mui/material/Avatar";
import FacebookLogo from "../../../assets/images/login--page/socials/facebook--logo.png";
import {Button} from "@material-ui/core";

const clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;

const responseFacebook = (response) => {
    console.log(response);
}

function LoginFacebook() {

    return (
        <FacebookLogin
            appId="1088597931155576"
            // autoLoad
            callback={responseFacebook}
            render={renderProps => (

                <Button
                    onClick={renderProps.onClick}
                    style={{
                        borderRadius: 10,
                        padding: "10px 36px",
                        fontSize: "14px",
                        color: "#000",
                        backgroundColor: "#FFF",
                        border: 'none',
                        fontFamily: 'RubiK',
                        textTransform: 'none',
                        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s ease 0s',
                        cursor: 'pointer',
                        outline: 'none',

                    }}
                    endIcon={<Avatar src={FacebookLogo} sx={{width: 24, height: 24}}/>}
                >
                    Facebook
                </Button>
            )}
        />
    );
}

export default LoginFacebook