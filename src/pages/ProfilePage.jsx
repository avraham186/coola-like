import React from 'react';
import UpdateProfile from "../cmps/profile/updateProfile";
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";

const ProfilePage = () => {
    const userFromStore = useSelector(state => state.entities.user)
    return (
        <div className="profile--layout">
            <div className="profile--section container">
                <div className="item">
                    <UpdateProfile />
                </div>
                <div className="item">
                    <Avatar
                        sx={{width: 180, height: 180}}
                        src={userFromStore.imageUrl}
                        alt={userFromStore.name}
                    />
                </div>
            </div>
            <div className="profile--section menu">
                side menu
            </div>
        </div>
    );
};

export default ProfilePage;