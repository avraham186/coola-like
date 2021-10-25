import { Link } from 'react-router-dom'
import coola_like_logo from '../assets/images/coola_like_logo.png'
import user_icon from '../assets/images/user_icon.png'
import Hero from '../assets/images/Home_logo.png'
export function AppHeader() {

    return (
        <div className="app-header">
            <div className="flex space-between justify-center align-center">
                <Link to="/"><img src={user_icon} alt="user icon" /><span>כניסת מנהלים</span></Link>
                <li className="list clean-list flex">
                    <ul><Link to="/">לוח משרות</Link></ul>
                    <ul><Link to="/">אירועים</Link></ul>
                    <ul><Link to="/">טיפים ומידע</Link></ul>
                </li>
                <Link to="/"><span className="logo">
                    <img src={coola_like_logo} alt="coola_like_logo" />
                </span></Link>
            </div>
            <div className="hero flex align-center justify-center">
                <div className="hero-content flex column align-center justify-center">
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
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}