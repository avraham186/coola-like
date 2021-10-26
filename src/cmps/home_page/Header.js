import React from 'react';
import {Link} from "react-router-dom";
import Herosvg from "../../assets/images/People like.svg";

const Header = () => {
    return (
            <div className="hero flex align-center justify-center">
                <div className="hero-container">
                    <span className="hero-title">כולא_לייק#</span>
                    <span className="hero-content">
                        <span className="hero-content-title">הבית של אלו שנקלעו לפרדוקס הג'וניור</span>
                        <span className="hero-content-content">
                            אנחנו כאן כדי לעזור לכל מי שבתחילת דרכו התעסוקתית, בחינם, ללא תמורה, רק מתוך רצון אמיתי לעזור</span>
                    </span>
                    <span>
                        <Link to="">כניסה</Link>
                        <Link to="">התחברות</Link>
                    </span>
                </div>
                <object data={Herosvg} type="image/svg+xml"/>
            </div>
    );
};

export default Header;