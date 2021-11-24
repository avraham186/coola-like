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

function LinkedInPage() {
    const dispatch = useDispatch();
    const history = useHistory()

    const {linkedInLogin} = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: `${window.location.origin}/linkedin`,
        onSuccess: (code) => {
            const graphQL = `https://www.linkedin.com/oauth/v2/${code}`;
            console.log(code)
            // fetch(graphQL)
            //     .then(response => response.json())
            //     .then((jsonData) => {
            //         // jsonData is parsed json object received from url
            //         console.log(jsonData)
            //         dispatch(linkedInProfile(jsonData));
            //         history.push("/");
            //     })
            //     .catch((error) => {
            //         // handle your errors here
            //         console.error(error)
            //     })
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
        <div className="linkedin">
            <Wrapper>
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