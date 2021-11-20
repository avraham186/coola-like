import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import {Button} from "@material-ui/core";
import GoogleIcon from '@mui/icons-material/Google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    };

    return (
        <div className="google">
            <GoogleLogin
                clientId={clientId}
                buttonText=" Google המשך עם"
                render={renderProps => (
                    <Button
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#FFF",
                            padding: "10px 36px",
                            fontSize: "15px",
                            color: "#34018E",
                            textTransform: 'none',
                            boxShadow: '3px 5px'
                        }}
                        onClick={renderProps.onClick} disabled={renderProps.disabled}
                        endIcon={<GoogleIcon />}
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