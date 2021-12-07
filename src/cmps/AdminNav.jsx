import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/coola_like_logo.svg'
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from '@mui/icons-material/Notifications';
// import SearchBar from "material-ui-search-bar";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

import { shimon } from '../assets/images/founders-imgs'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountMenu from './sub_cmps/AccountMenu.jsx'
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import CircularProgress from '@mui/material/CircularProgress';



export function AdminNav() {

    const userFromStore = useSelector(state => state.entities.user)


    const user = { name: "Shimon Moyal" }
    const [searchValue, setSearchValue] = useState('')
    const [isAccountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isNotifications, setIsNotifications] = useState(false);
    const [selected, setSelected] = useState("1")
    const doSomethingWith = (input) => {
        console.log(input);
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <section className="admin-navbar-wrapper full">
            <div className="main-layout">
                <div className="admin-navbar">
                    <div className="left-list clean-list">
                        <div>
                            {userFromStore ?
                                <Avatar
                                    alt={userFromStore.name}
                                    src={userFromStore.imageUrl}
                                    sx={{ width: 56, height: 56 }}
                                />
                                :
                                <object className="user_img" type="image/svg+xml" data={shimon} alt="user" />}
                            {isAccountMenuOpen ? <AccountMenu /> : null}
                        </div>
                        <div className="user_private_nav">
                            <h4>{userFromStore ? userFromStore.name : user.name}</h4>
                            <Link to="./"><span>התנתקות</span></Link>
                        </div>
                        <IconButton className="notification_icon" onClick={handleClick}>
                            {isNotifications ? <NotificationImportantIcon /> : <NotificationsIcon />}
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    <ul className="list clean-list flex">
                        <li><Link to="/" className={selected=="1"?"selected": ""}  onClick={()=>setSelected("1")}>
                            <span>לאתר הקהילה</span></Link></li>
                        <li><Link to="/projects" className={selected=="2"?"selected": ""} onClick={()=>setSelected("2")}>
                            <span>פרויקטים</span></Link></li>
                        <li><Link to="/" className={selected=="3"?"selected": ""} onClick={()=>setSelected("3")}>
                            <span>לוח ניהול כללי</span></Link></li>
                        <li><Link to="/eventsAdmin" className={selected=="4"?"selected": ""} onClick={()=>setSelected("4")}>
                            <span>עריכת אירועים</span></Link></li>
                        <li className="adminSearchBar">
                            {/* <SearchBar
                                value={searchValue}
                                onChange={(newValue) => setSearchValue(newValue)}
                                onRequestSearch={() => doSomethingWith(searchValue)}
                                placeholder="חפש לדוגמא: סדנה בלינקדאין"
                                style={{ height: "2rem", textIndent: ".5em" }}
                                disabled={false}
                            /> */}
                        </li>
                    </ul>
                    <Link to="/">
                        <object data={logo} type="image/svg+xml" className="logo" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
