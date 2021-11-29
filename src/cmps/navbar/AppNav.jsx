import { Link } from 'react-router-dom'
import logo from '../../assets/images/coola_like_logo.svg'
import IconButton from "@mui/material/IconButton";
import { useSelector } from 'react-redux';
export function AppNav() {
    const user = useSelector(state => state.entities.user)
    return (
        <div className="app-navbar-wrapper">
            <div className="app-navbar">
                <div className="left-list clean-list">

                    <span>
                        <IconButton  >
                            <img className="gb_Ca" src={user.user.imageUrl} >

                            </img>
                        </IconButton>

                    </span>


                    <div className="mngr-login-button">
                        <input type="button" value="כניסת מנהלים" className="mngBtn" />
                    </div>

                </div>

                <ul className="list clean-list flex">
                    <li className="selected"><Link to="/"><span>בית</span></Link></li>
                    <li><Link to="/jobs"><span>לוח משרות</span></Link></li>
                    <li><Link to="/events"><span>אירועים</span></Link></li>
                    <li><Link to="/"><span>טיפים ומידע</span></Link></li>
                    <li><Link to="/projects"><span>פרויקטים</span></Link></li>
                </ul>

                <Link to="/">
                    <object data={logo} type="image/svg+xml" className="coola_like_logo" />
                </Link>

            </div>
        </div>
    )
}
