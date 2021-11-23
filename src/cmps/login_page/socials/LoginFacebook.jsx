import React from 'react';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Avatar from "@mui/material/Avatar";
import FacebookLogo from "../../../assets/images/login--page/socials/facebook--logo.png";
import {Button} from "@material-ui/core";
import {facebookProfile} from "../../../store/user";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;

function LoginFacebook() {
    const dispatch = useDispatch();
    const history = useHistory()

    const responseFacebook = (response) => {
        // console.log(response);
        dispatch(facebookProfile(response));
        history.push("/");
    }

    return (
        <FacebookLogin
            appId={clientId}
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