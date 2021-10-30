import React, { useState } from 'react';

export const Subscribe = () => {
    const [mail, setmail] = useState('')

    const handlChange = (ev) => {
        setmail(ev.target.value)
    }
    const sendMail = () => {
        console.log('mail sended');
    }
    return (
        <div className="subscribe flex column">
            <h1 className="stay-update">הישארו מעודכנים#</h1>
            <span>הירשמו לקבלת עדכונים לגבי אירועים, סדנאות ומשרות חמות בקהילה</span>
            <br />
            <div className="input-and-btn">
                <input type="email" className="subscribe-input" name="mail"
                    value={mail} onChange={handlChange} placeholder="כתובת אי-מייל" />
                <button className="btn-send-subscribe" onClick={sendMail}>שלחו אלי!</button>
            </div>
        </div>
    );
};