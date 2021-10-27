import React from 'react';
import { Link } from "react-router-dom";
import Herosvg from "../../assets/images/People like.svg";

const Header = () => {
    return (
        <div className="hero flex align-center justify-center">
            <div className="hero-container">
                <h1 className="hero-title">כולא_לייק#</h1>
                <div className="hero-content">
                    <span className="hero-content-title">הבית של אלו שנקלעו לפרדוקס הג'וניור</span>
                    <span className="hero-content-content">
                        אנחנו כאן כדי לעזור לכל מי שבתחילת דרכו התעסוקתית, בחינם, ללא תמורה, רק מתוך רצון אמיתי לעזור</span>
                </div>
                <div className="log-reg-buttons">
                    <Link to="/login">כניסה</Link>
                    <Link to="/register">התחברות</Link>
                </div>
            </div>
            <div className="home-logo">
                <object data={Herosvg} type="image/svg+xml" />
            </div>

        </div>
    );
};

export default Header;