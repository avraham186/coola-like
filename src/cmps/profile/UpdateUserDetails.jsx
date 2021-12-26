import React, { useState } from 'react';
import Inputs from "../inputs/Inputs";
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
    const [formData, setFormData] = useState({
        Email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'Email':
                setFormData({ ...formData, Email: value });
                break;
            case 'password':
                setFormData({ ...formData, password: value });
                break;
            default:
                break;
        }
    }

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
                {/* <div className="interest flex column">
                    <div className="interest-headline">
                        תחומי עניין
                    </div>
                    <div className="interest-content flex">
                        <span className="flex align-center justify-center">פיתוח-תכנה</span>
                        <span className="flex align-center justify-center">הנדסת-מערכות</span>
                        <span className="flex align-center justify-center">חומרה</span>
                        <span className="flex align-center justify-center">אבטחת-מידע</span>
                        <span className="flex align-center justify-center">בדיקות-תכנה</span>
                        <span className="flex align-center justify-center">עיצוב ואפיון חווית משתמש</span>
                    </div>
                </div> */}
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