import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { Interests } from './Interests'


const UpdateUserDetails = () => {
    const userFromStore = useSelector(state => state.entities.user)
    const [textFieldArr, setTextFieldArr] = useState([
        { Name: userFromStore.name, label: "שם משתמש", type: 'text', required: false },
        { Name: userFromStore.email, label: "אימייל", type: 'email', required: false },
        { Name: userFromStore.Profession, label: "מקצוע", type: 'text', required: false },
        { Name: userFromStore.LinkedIn, label: "פרופיל לינקדאין", type: 'text', required: false },
    ]);
    // useEffect(() => {
    //     console.log('userFromStore', userFromStore);
    //     console.log('state', textFieldArr);
    // }, [])
    const handleChange = (ev, idx) => {
        // console.log('ev',ev.target);
        const field = ev.target.name
        const value = ev.target.value
        // console.log(textFieldArr[idx][field]);
        // setTextFieldArr((p) => ({ ...p, ...[idx],[field]: value })) // steel not change the write proerty
    }
    return (
        <div className="update-user-details flex justify-center">
            <section className="form flex column">
                <form className="update-profile-form flex column">
                    {textFieldArr.map((field, idx) => {
                        return (
                            <label className="form-label flex column" key={field.Name}>
                                <span>{field.label}</span>
                                <input type={field.type} name="name"
                                    value={field.Name}
                                    onChange={(ev) => handleChange(ev, idx)} />
                            </label>
                        )
                    })}
                </form>
                <Interests />
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