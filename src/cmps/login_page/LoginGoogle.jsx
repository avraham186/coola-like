import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';
import { useDispatch } from 'react-redux';
import { loadPersons } from '../../store/actions/communityHartAction'
const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LoginGoogle() {
    const dispatch = useDispatch()
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.accessToken);
        // document.cookie = `authToken=${res.accessToken}`

        // window.Cookies.set("token", res.accessToken)
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
        dispatch(loadPersons(res.profileObj))
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