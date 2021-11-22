import React from "react";
import styled from "styled-components";
import {useLinkedIn} from "react-linkedin-login-oauth2";
import {Button} from "@material-ui/core";
import LinkedInLogo from '../../../assets/images/login--page/socials/linkedIn--logo.png';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Link = styled.a`
  font-size: 20px;
  font-weight: bold;
`;

function LinkedInPage() {
    const {linkedInLogin} = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: `${window.location.origin}/linkedin`,
        onSuccess: (code) => {
            console.log(code);
            setCode(code);
            setErrorMessage("");
            alert(code)
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
                {code && (
                    <div>
                        <div>Authorization Code: {code}</div>
                        <div>
                            Follow{" "}
                            <Link
                                target="_blank"
                                href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
                                rel="noreferrer"
                            >
                                this
                            </Link>{" "}
                            to continue
                        </div>
                    </div>
                )}
                {/*{errorMessage && <div>{errorMessage}</div>}*/}
            </Wrapper>
        </div>
    );
}


export default LinkedInPage;