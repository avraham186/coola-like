import React, { useState } from 'react'

export const ChangePassword = () => {
    
    const [pass, setPass] = useState({ currPass: '', newPass: '', verifyNewPass: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPass({ ...pass, [name]: value });
    }
    return (
        <div className="change-password flex column">
            <h1>בחר סיסמה חדשה לחשבונך</h1>
            <label className="flex column">
                <span>סיסמה נוכחית</span>
                <input type="text" name="currPass" value={pass.currPass} onChange={handleChange} />
            </label>
            <label className="flex column">
                <span>סיסמה חדשה</span>
                <input type="text" name="newPass" value={pass.newPass} onChange={handleChange} />
            </label>
            <label className="flex column">
                <span>אימות סיסמה חדשה</span>
                <input type="text" name="verifyNewPass" value={pass.verifyNewPass} onChange={handleChange} />
            </label>
        </div>
    )
}