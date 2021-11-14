import React from 'react';
import { Link } from "react-router-dom";
import Herosvg from "../../assets/images/home-page-imgs/Header_logo.svg";

const Header = () => {
    return (
        <div className="app-header flex align-center justify-center">
            <div className="header-container">
                <div className="header-content">
                    <h1 className="header-title">כולא_לייק#</h1>
                    <h4 className="header-content-title">.הבית של אלו שנקלעו לפרדוקס הג'וניור</h4>
                    <p className="header-content-content">
                        אנחנו כאן כדי לעזור לכל מי שבתחילת דרכו התעסוקתית, בחינם, ללא תמורה, רק מתוך רצון אמיתי לעזור</p>
                </div>

                <div className="header-buttons">
                    <Link to="/login"> <span>כניסה</span></Link>
                    <Link to="/login"> <span> התחברות</span></Link>
                </div>
            </div>

            <div className="header-logo">
                <object data={Herosvg} type="image/svg+xml" />
            </div>

        </div>
    );
};

export default Header;