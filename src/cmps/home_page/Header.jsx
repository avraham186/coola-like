import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/home-page-imgs/Header_logo.svg";

const Header = () => {
    return (
        <div className="app-header">
            <div className="header-container">
                <div className="header-content">
                    <h1>כולא_לייק#</h1>
                    <h4>.הבית של אלו שנקלעו לפרדוקס הג'וניור</h4>
                    <p className="flex column">
                        אנחנו כאן לעזור לכל מי שבתחילת דרכו התעסוקתית,<br />
                        בחינם, ללא תמורה, רק מתוך רצון אמיתי לעזור אחד לשניה.
                    </p>
                </div>
                <Link className="header-buttons flex align-center justify-center"
                    to="/login"> <span> התחברות</span></Link>
            </div>

            <div className="header-logo">
                <object data={logo}
                    width="494px"
                    height="381px"
                    type="image/svg+xml" />
            </div>

        </div>
    );
};

export default Header;