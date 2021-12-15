import React, { useState } from 'react';
import UpdateUserDetails from "../cmps/profile/UpdateUserDetails";
import { ChangePassword } from '../cmps/profile/ChangePassword';
import { ProfileNotefications } from '../cmps/profile/ProfileNotefications';
// import Avatar from "@mui/material/Avatar";
// import { useSelector } from "react-redux";

const ProfilePage = () => {
    const [menuTab, setMenuTab] = useState({
        profile: true,
        changePassword: false,
        notefications: false
    })
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
        <div className="profile-layout">
            <div className="profile-page flex">
                <div className="profile-content flex column">
                    {menuTab.profile && <UpdateUserDetails />}
                    {menuTab.changePassword && <ChangePassword />}
                    {menuTab.notefications && <ProfileNotefications />}
                    <div className="btn-interest flex">
                        <span className="cancel flex align-center justify-center">ביטול</span>
                        <span className="update flex align-center justify-center">עדכן פרטים</span>
                    </div>
                </div>
                <div className="profile-menu flex column align-center">
                    <h1 className="flex justify-center">הגדרות פרופיל</h1>
                    <span className={`span-menu-container ${isActive('profile')} flex align-center`}
                        onClick={() => changeMenuTab('profile')}>
                        <span className="flex">פרופיל אישי</span>
                    </span>
                    <span className={`span-menu-container ${isActive('changePassword')} flex align-center`}
                        onClick={() => changeMenuTab('changePassword')}>
                        <span className="flex">שינוי סיסמא</span>
                    </span>
                    <span className={`span-menu-container ${isActive('notefications')} flex align-center`}
                        onClick={() => changeMenuTab('notefications')}>
                        <span className="flex">התראות</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
{/* <div className="update-user-details flex justify-center">
                            <div className="update-profile-form">
                            <UpdateProfile />
                            </div>
                            </div>
                            <div className="user-section flex column align-center">
                            <div className="user-pic">
                            <Avatar
                            sx={{ width: 180, height: 180 }}
                            src={userFromStore.imageUrl}
                            alt={userFromStore.name}
                            />
                            </div>
                            <div className="profile-btn flex justify-center align-center">
                                <span className="flex justify-center align-center">מחק</span>
                                <span className="flex justify-center align-center">החלף</span>
                            </div>
                        </div>
                    </div> */}