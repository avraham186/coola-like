import React, { useState } from 'react'

export const Interests = () => {
    const [interests, setInterests] = useState({
        software: false,
        systemsEngineering: false,
        hardware: false,
        cyberSec: false,
        qa: false,
        uxUi: false
    })
    const activeInterest = (interest) => {
        setInterests(p => ({ ...p, [interest]: !p[interest] }))
    }
    const interestClass = (prop) => {
        return interests[prop] ? "active" : ""
    }
    return (
        <div className="interest flex column">
            <div className="interest-headline">
                תחומי עניין
            </div>
            <div className="interest-content flex">
                <span className={`${interestClass('software')} flex align-center justify-center`}
                    onClick={()=>activeInterest('software')}>
                    פיתוח-תכנה
                </span>
                <span className={`${interestClass('systemsEngineering')} flex align-center justify-center`}
                    onClick={()=>activeInterest('systemsEngineering')}>
                    הנדסת-מערכות
                </span>
                <span className={`${interestClass('hardware')} flex align-center justify-center`}
                    onClick={()=>activeInterest('hardware')}>
                    חומרה
                </span>
                <span className={`${interestClass('cyberSec')} flex align-center justify-center`}
                    onClick={()=>activeInterest('cyberSec')}>
                    אבטחת-מידע
                </span>
                <span className={`${interestClass('qa')} flex align-center justify-center`}
                    onClick={()=>activeInterest('qa')}>
                    בדיקות-תכנה
                </span>
                <span className={`${interestClass('uxUi')} flex align-center justify-center`}
                    onClick={()=>activeInterest('uxUi')}>
                    עיצוב ואפיון חווית משתמש
                </span>
            </div>
        </div>
    )
}