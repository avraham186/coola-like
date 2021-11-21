import React, { useState } from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useDispatch } from 'react-redux';
import { userAdded } from '../../store/user'
import { Link } from 'react-router-dom'

const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginGoogle({ closeDialog, setCloseDialog }) {
    const dispatch = useDispatch()
    const [toHome, setToHome] = useState(false)
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res);
        // document.cookie = `authToken=${res.accessToken}`

        // window.Cookies.set("token", res.accessToken)
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
        setCloseDialog((p) => !p)
        dispatch(userAdded(res.profileObj))
        setToHome(true)
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText=" Google המשך עם"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}

            />

        </div>
    );
}

export default LoginGoogle