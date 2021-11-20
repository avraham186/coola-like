import React from "react";
import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

function LinkedInPage() {
    const { linkedInLogin } = useLinkedIn({
        clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
        redirectUri: `${window.location.origin}/linkedin`,
        onSuccess: (code) => {
            console.log(code);
            setCode(code);
            setErrorMessage("");
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
            <img
                onClick={linkedInLogin}
                src={linkedin}
                alt="Log in with Linked In"
                style={{ maxWidth: "230px", cursor: "pointer" }}
            />
            {/* <button
                onClick={linkedInLogin}
                style={{ maxWidth: "180px", cursor: "pointer" }}
            > <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
                    <title>
                        LinkedIn
                    </title>

                    <g>
                        <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                    </g>
                </svg> LinkedIn המשך עם

            </button> */}
            {/* {!code && <div>No code</div>} */}
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
            {errorMessage && <div>{errorMessage}</div>}
        </Wrapper>
        </div>
    );
}

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

export default LinkedInPage;