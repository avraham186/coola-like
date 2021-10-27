import { Link } from 'react-router-dom'
import coola_like_logo from '../assets/images/coola_like_logo.png'
import user_icon from '../assets/images/user_icon.png'
import Header from "./home_page/Header";

export function AppNav() {

    return (
        <div className="app-navbar">
            <div className="flex space-between justify-center align-center">

                <ul className="left-list clean-list">

                    <li>
                        <Link to="/">
                        <img src={user_icon} alt="user icon" />
                        </Link>
                    </li>

                    <li>
                        <Link to="/"> כניסת מנהלים</Link>
                    </li>

                </ul>

                <ul className="list clean-list flex">

                    <li><Link to="/">בית</Link></li>
                    <li><Link to="/">לוח משרות</Link></li>
                    <li><Link to="/">אירועים</Link></li>
                    <li><Link to="/">טיפים ומידע</Link></li>

                </ul>

                <Link to="/">
                    <span className="logo">
                        <img src={coola_like_logo} alt="coola_like_logo" />
                    </span>
                </Link>

            </div>
        </div>
    )
}