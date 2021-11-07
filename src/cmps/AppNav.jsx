import { Link } from "react-router-dom";
import coola_like_logo from "../assets/images/home-page-imgs/coola_like_logo.png";
import user_icon from "../assets/images/home-page-imgs/user_icon.svg";

export function AppNav() {
  return (
    <div className="app-navbar">
      <div className="flex space-between justify-center align-center">
        <ul className="left-list clean-list">
          <li>
            <object data={user_icon} type="image/svg+xml"></object>
            {/* //<Link to="/"> */}
            {/* //</Link> */}
          </li>

          <li className="events-button-list">
            <Link to="/">כניסת מנהלים</Link>
          </li>
        </ul>

        <ul className="list clean-list flex">
          <li className="selected">
            <Link to="/">בית</Link>
          </li>
          <li>
            <Link to="/">לוח משרות</Link>
          </li>
          <li>
            <Link to="/">אירועים</Link>
          </li>
          <li>
            <Link to="/">טיפים ומידע</Link>
          </li>
          <li>
            <Link to="/projects">projects (test)</Link>
          </li>
        </ul>

        <Link to="/">
          <span className="logo">
            <img src={coola_like_logo} alt="coola_like_logo" />
          </span>
        </Link>
      </div>
    </div>
  );
}
