import React from "react";
import styled from "styled-components";
import {useLinkedIn} from "react-linkedin-login-oauth2";
import {Button} from "@material-ui/core";
import LinkedInLogo from '../../../assets/images/login--page/socials/linkedIn--logo.png';
import {linkedInProfile} from "../../../store/user";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

function LinkedInPage({handleOpen,handleClose}) {
    const dispatch = useDispatch();
    const history = useHistory()



    const {linkedInLogin} = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: process.env.REACT_APP_BASE_URL + '/linkedin',
        onSuccess: (code) => {
            console.log(code)

            const params = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                client_id: '78dxlku6u6p2tn',
                client_secret: 'zhPrl6yIAd6LRaVG'
            }).toString()

            console.log('https://www.linkedin.com/oauth/v2/accessToken?' + params + '&redirect_uri=http://localhost:3000/linkedin')

            fetch('https://www.linkedin.com/oauth/v2/accessToken?' + params + '&redirect_uri=http://localhost:3000/linkedin',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
            })
                .then(response => response.json())
                .then(responseData => {
                    console.log(JSON.stringify(responseData))
                })
                .catch(error => {
                    console.log(error)
                })
        },
        scope: "r_emailaddress r_liteprofile",
        onError: (error) => {
            console.log(error);
            setCode("");
            setErrorMessage(error.errorMessage);
        },
    });
    const [code, setCode] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    return (
        <div className="linkedin" >
            <Wrapper >
                <Button
                    onClick={linkedInLogin}
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
                        outline: 'none'
                    }}
                    endIcon={<img src={LinkedInLogo} alt='LinkedIn'/>}
                >
                    LinkedIn
                </Button>
            </Wrapper>
        </div>
    );
}


export default LinkedInPage;