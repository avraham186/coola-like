import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/coola_like_logo.svg";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

export function AppNav() {

  const user = useSelector((state) => state.entities.user);
  const [selected, setSelected] = useState("1")

  return (
    <header className="app-navbar-wrapper full">
      <div className="app-navbar-bg main-layout">
        <div className="app-navbar">
          <div className="left-list clean-list">
            <span>
              <IconButton>
                <img className="gb_Ca" src={user.imageUrl}></img>
              </IconButton>
            </span>

            <div className="mngr-login-button">
              <Link to="/login">
              <input type="button" value="מערכת ניהול" className="mngBtn" />
              </Link>
            </div>
          </div>

          <ul className="list clean-list flex">
            <li>
              <Link to="/" className={selected=="1"?"selected": ""} onClick={()=>setSelected("1")}>
                <span>בית</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs" className={selected=="2"?"selected": ""} onClick={()=>setSelected("2")}>
                <span>לוח משרות</span>
              </Link>
            </li>
            <li>
              <Link to="/events" className={selected=="3"?"selected": ""} onClick={()=>setSelected("3")}>
                <span>אירועים</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={selected=="4"?"selected": ""} onClick={()=>setSelected("4")}>
                <span>טיפים ומידע</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" className={selected=="5"?"selected": ""} onClick={()=>setSelected("5")}>
                <span>פרויקטים</span>
              </Link>
            </li>
          </ul>

          <Link to="/">
            <object
              data={logo}
              type="image/svg+xml"
              className="coola_like_logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
