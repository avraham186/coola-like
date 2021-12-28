import React, { useState } from 'react'
import { useEffect } from 'react'

export const ProfileNotefications = () => {
    const [toggle, setToggle] = useState({ newEvent: false, interestEvent: false, jobs: false, news: false })
    useEffect(() => {
        console.log('toggle', toggle);
    }, [toggle])
    const handleChange = (ev) => {
        setToggle(p => ({ ...p, [ev]: !p[ev] }))
    }
    const setSpanClassName = (className) => {
        return className && toggle[className] ? 'yes' : 'no'
    }
    const setDivClassName = (className) => {
        return className && toggle[className] ? 'color' : ''
    }
    return (
        <div className="profile-notefications">
            <h1 className="headline">התראות לכתובת האימייל</h1>
            <div className="sub-headline">בחר מתי לקבל התראות לכתובת האימייל האישית שלך</div>

            <div className="every-new-event flex space-between align-center">
                <span>קבלת התראות על כל אירוע חדש בקהילה</span>
                <div className={`btn-notefications ${setDivClassName('newEvent')} flex align-center`}>
                    <span className={`toggle ${setSpanClassName('newEvent')}`}
                        onClick={() => handleChange("newEvent")}></span>
                </div>
            </div>
            <div className="new-event-on-my-interest flex space-between align-center">
                <span>קבלת התראות על אירועים חדשים הקשורים לתחום העניין שלי</span>
                <div className={`btn-notefications ${setDivClassName('interestEvent')} flex align-center`}>
                    <span className={`toggle ${setSpanClassName('interestEvent')}`}
                        onClick={() => handleChange("interestEvent")}></span>
                </div>
            </div>
            <div className="new-jobs-on-my-interest flex space-between align-center">
                <span>קבלת התראות על משרות חדשות הקשורות לתחום העניין שלי</span>
                <div className={`btn-notefications ${setDivClassName('jobs')} flex align-center`}>
                    <span className={`toggle ${setSpanClassName('jobs')}`}
                        onClick={() => handleChange("jobs")}></span>
                </div>
            </div>
            <div className="news flex space-between align-center">
                <span>קבלת התראות על כתבות חדשות שעולות בטיפים ומידע</span>
                <div className={`btn-notefications ${setDivClassName('news')} flex align-center`}>
                    <span className={`toggle ${setSpanClassName('news')}`}
                        onClick={() => handleChange("news")}></span>
                </div>
            </div>

        </div>
    )
}