import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {refreshTokenSetup} from '../../../utils/refreshToken';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addUser} from "../../../store/user";
import GoogleLogo from '../../../assets/images/login--page/socials/google--logo.png';
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle() {

    const dispatch = useDispatch();
    const history = useHistory();

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        dispatch(addUser(res.profileObj));
        history.push("/");
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div className="google">
            <GoogleLogin
                clientId={clientId}
                buttonText=" Google המשך עם"
                render={renderProps => (
                    <Button
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
                        onClick={renderProps.onClick} disabled={renderProps.disabled}
                        endIcon={<Avatar src={GoogleLogo} sx={{ width: 20, height: 20 }} />}
                    >
                        Google
                    </Button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default LoginGoogle