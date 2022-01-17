import React, { useState, useEffect } from 'react';
import UpdateUserDetails from "../cmps/profile/UpdateUserDetails";
import { ChangePassword } from '../cmps/profile/ChangePassword';
import { ProfileNotefications } from '../cmps/profile/ProfileNotefications';
import { Switch, Link, Route, useLocation } from 'react-router-dom';

const ProfilePage = () => {

    const location = useLocation()
    const [menuTab, setMenuTab] = useState({
        profile: true,
        changePassword: false,
        notefications: false
    })
    useEffect(() => {
        if (location.pathname === '/profile/update') {
            setMenuTab({ profile: true, changePassword: false, notefications: false })
        } else if (location.pathname === '/profile/change-password') {
            setMenuTab({ profile: false, changePassword: true, notefications: false })

        } else if (location.pathname === '/profile/notefications') {
            setMenuTab({ profile: false, changePassword: false, notefications: true })
        }
    }, [location.pathname])
    const changeMenuTab = (tab) => {
        switch (tab) {
            case 'profile':
                setMenuTab({ profile: true, changePassword: false, notefications: false })
                break;
            case 'changePassword':
                setMenuTab({ profile: false, changePassword: true, notefications: false })
                break;
            case 'notefications':
                setMenuTab({ profile: false, changePassword: false, notefications: true })
                break;

            default:
                console.log('something went wrong with changeMenuTab');;
        }
    }
    const isActive = (prop) => {
        return menuTab[prop] ? 'active' : ''
    }
    return (
        <div className="profile-page flex">
            <div className="profile-content flex column">
                <Switch>
                    <Route component={UpdateUserDetails} exact path="/profile/update" />
                    <Route component={ChangePassword} path="/profile/change-password" />
                    <Route component={ProfileNotefications} path="/profile/notefications" />
                </Switch>
                <div className="btn-interest flex">
                    <span className="cancel flex align-center justify-center">ביטול</span>
                    <span className="update flex align-center justify-center">עדכן פרטים</span>
                </div>
            </div>
            <div className="profile-menu flex column align-center">
                <h1 className="flex justify-center">הגדרות פרופיל</h1>
                <Link className={`flex menu-link ${isActive('profile')}`} to="/profile/update"
                    onClick={() => changeMenuTab('profile')}>
                    <span className="span-menu flex align-center">
                        פרופיל אישי
                    </span>
                </Link>
                <Link className={`flex menu-link ${isActive('changePassword')}`} to="/profile/change-password"
                    onClick={() => changeMenuTab('changePassword')}>
                    <span className="span-menu flex align-center">
                        שינוי סיסמא
                    </span>
                </Link>
                <Link className={`flex menu-link ${isActive('notefications')}`} to="/profile/notefications"
                    onClick={() => changeMenuTab('notefications')}>
                    <span className="span-menu flex align-center">
                        התראות
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;