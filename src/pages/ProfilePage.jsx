import React from 'react';
import UpdateProfile from "../cmps/profile/UpdateProfile";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const userFromStore = useSelector(state => state.entities.user)
    return (
        <div className="profile-page flex">
            <div className="profile-section flex justify-center">
                <div className="update-user-details flex justify-center">
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
            </div>
            <div className="profile-section-menu flex column align-center">
                <h1>הגדרות פרופיל</h1>
                <span className="span-menu-container flex align-center">
                    <span className="flex">פרופיל אישי</span>
                </span>
                <span className="span-menu-container flex align-center">
                    <span className="flex">שינוי סיסמא</span>
                </span>
                <span className="span-menu-container flex align-center">
                    <span className="flex">התראות</span>
                </span>
            </div>
        </div >
    );
};

export default ProfilePage;