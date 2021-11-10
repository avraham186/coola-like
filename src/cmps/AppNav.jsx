import { Link } from 'react-router-dom'
import coola_like_logo from '../assets/images/coola_like_logo.svg'
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person"

export function AppNav() {

    return (
        <div className="app-navbar-wrapper">
            <div className="app-navbar">
                <div className="left-list clean-list">

                    <span>
                        <IconButton aria-label="Person" className="user_logo">
                            <PersonIcon />
                        </IconButton>
                    </span>

                    <div className="mngr-login-button">
                        <input type="button" value="כניסת מנהלים" className="mngBtn"/>
                    </div>

            </div>
   
                <ul className="list clean-list flex">
                    <li className="selected"><Link to="/"><span>בית</span></Link></li>
                    <li><Link to="/"><span>לוח משרות</span></Link></li>
                    <li><Link to="/pages/EventsPage.js"><span>אירועים</span></Link></li>
                    <li><Link to="/"><span>טיפים ומידע</span></Link></li>
                    <li><Link to="/projects"><span>projects (test)</span></Link></li>
                </ul>

                <Link to="/">
                        <object data={coola_like_logo} type="image/svg+xml" className="coola_like_logo"></object>
                 </Link>

            </div>
        </div>
    )
}
