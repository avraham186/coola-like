import { Link } from 'react-router-dom'
import coola_like_logo from '../assets/images/coola_like_logo.png'
import user_icon from '../assets/images/user_icon.svg'

export function AppNav() {

    return (
        <div className="app-navbar">
            <div className="flex space-between justify-center align-center">

                <ul className="left-list clean-list">

                    <li>
                    <Link to="/">
                        <object data={user_icon} type="image/svg+xml"></object>
                    </Link> 

                    </li>

                    <li className="mngr-login-button">
                        <Link to="/"><span>כניסת מנהלים</span></Link>
                    </li>

                </ul>

                <ul className="list clean-list flex">

                    <li className="selected"><Link to="/"><span>בית</span></Link></li>
                    <li><Link to="/"><span>לוח משרות</span></Link></li>
                    <li><Link to="/"><span>אירועים</span></Link></li>
                    <li><Link to="/"><span>טיפים ומידע</span></Link></li>


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