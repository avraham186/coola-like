import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import {Interests} from './Interests'
const textFieldArr = [
    { name: "userName", label: "שם משתמש", type: 'text', required: false },
    { name: "Email", label: "אימייל", type: 'email', required: false },
    { name: "Profession", label: "מקצוע", type: 'text', required: false },
    { name: "LinkedIn", label: "פרופיל לינקדאין", type: 'text', required: false },
];


const UpdateUserDetails = () => {
    const userFromStore = useSelector(state => state.entities.user)
    return (
        <div className="update-user-details flex justify-center">
            <section className="form flex column">
                <form className="update-profile-form flex column">
                    {textFieldArr.map(field => {
                        return (
                            <label className="form-label flex column" key={field.name}>
                                <span>{field.label}</span>
                                <input type={field.type} name={field.name} />
                            </label>
                        )
                    })}
                </form>
                <Interests/>
            </section>
            <section className="user-section flex column ">
                <div className="user-pic flex column align-center">
                    <Avatar
                        sx={{ width: 180, height: 180 }}
                        src={userFromStore.imageUrl}
                        alt={userFromStore.name}
                    />
                <div className="profile-btn flex justify-center align-center">
                    <span className="flex justify-center align-center">מחק</span>
                    <span className="flex justify-center align-center">החלף</span>
                </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateUserDetails;