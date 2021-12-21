import React from 'react'

export const ChangePassword = () => {

    return (
        <div className="change-password flex column">
            <h1>בחר סיסמה חדשה לחשבונך</h1>
            <label className="flex column">
                <span>סיסמה נוכחית</span>
                <input type="text" name="currPass" value=""/>
            </label>
            <label className="flex column">
                <span>סיסמה חדשה</span>
                <input type="text" name="newPass" value=""/>
            </label>
            <label className="flex column">
                <span>אימות סיסמה חדשה</span>
                <input type="text" name="verifyNewPass" value=""/>
            </label>
        </div>
    )
}