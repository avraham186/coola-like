import {Link} from 'react-router-dom'
import coola_like_logo from '../assets/images/coola_like_logo.png'
import user_icon from '../assets/images/user_icon.png'
import Header from "./home_page/Header";

export function AppNav() {

    return (
        <div className="app-navbar">
            <div className="flex space-between justify-center align-center">
                <Link to="/"><img src={user_icon} alt="user icon"/><span>כניסת מנהלים</span></Link>
                <li className="list clean-list flex">
                    <ul><Link to="/">לוח משרות</Link></ul>
                    <ul><Link to="/">אירועים</Link></ul>
                    <ul><Link to="/">טיפים ומידע</Link></ul>
                </li>
                <Link to="/">
                    <span className="logo">
                    <img src={coola_like_logo} alt="coola_like_logo"/>
                    </span>
                </Link>
            </div>
        </div>
    )
}