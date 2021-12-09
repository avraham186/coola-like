import React, { useState } from 'react';
import Inputs from "../inputs/Inputs";

const textFieldArr = [
    { id: "userName", label: "שם משתמש", type: 'text', required: false },
    { id: "Email", label: "אימייל", type: 'email', required: false },
    { id: "Profession", label: "מקצוע", type: 'text', required: false },
    { id: "LinkedIn", label: "פרופיל לינקדאין", type: 'text', required: false },
];


const UpdateProfile = () => {

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
        <div>
            <form>
                {/* border-radius: 10px;
                padding: 4px 20px;
                font-size: 14px;
                width: 90%;
                color: rgb(0, 0, 0);
                background-color: rgb(255, 255, 255);
                border: none;
                font-family: RubiK;
                box-shadow: rgb(0 0 0 / 20%) 0px 8px 15px; */}
                <Inputs inputs={textFieldArr} handleChange={handleChange} />
            </form>
            <div className="interest flex column">
                <span>אבטחת מידע וסייבר</span>
                <span>פיתוח תכנה</span>
                <span>עיצוב ואפיון חווית משתמש</span>
                <span>הנדסת מערכות</span>
            </div>
            <div className="details flex space-between">
                <span>ביטול</span>
                <span>עדכן פרטים</span>
            </div>
        </div>
    );
};

export default UpdateProfile;