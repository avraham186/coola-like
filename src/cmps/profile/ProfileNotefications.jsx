import React, { useState } from 'react'

export const ProfileNotefications = () => {
    const [toggle, setToggle] = useState({ newEvent: false, interestEvent: false, jobs: false, news: false })
    const isAdmin = () => {
        return false
        // return true
    }
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
            {!isAdmin() &&
                < div className="regular-user">
                    <div className="every-new-event flex space-between align-center">
                        <span>קבלת התראות על כל אירוע חדש בקהילה</span>
                        <div className={`btn-notefications ${setDivClassName('newEvent')} flex align-center`}
                            onClick={() => handleChange("newEvent")}>
                            <span className={`toggle ${setSpanClassName('newEvent')}`}></span>
                        </div>
                    </div>
                    <div className="new-event-on-my-interest flex space-between align-center">
                        <span>קבלת התראות על אירועים חדשים הקשורים לתחום העניין שלי</span>
                        <div className={`btn-notefications ${setDivClassName('interestEvent')} flex align-center`}
                            onClick={() => handleChange("interestEvent")}>
                            <span className={`toggle ${setSpanClassName('interestEvent')}`}></span>
                        </div>
                    </div>
                    <div className="new-jobs-on-my-interest flex space-between align-center">
                        <span>קבלת התראות על משרות חדשות הקשורות לתחום העניין שלי</span>
                        <div className={`btn-notefications ${setDivClassName('jobs')} flex align-center`}
                            onClick={() => handleChange("jobs")}>
                            <span className={`toggle ${setSpanClassName('jobs')}`}></span>
                        </div>
                    </div>
                    <div className="news flex space-between align-center">
                        <span>קבלת התראות על כתבות חדשות שעולות בטיפים ומידע</span>
                        <div className={`btn-notefications ${setDivClassName('news')} flex align-center`}
                            onClick={() => handleChange("news")}>
                            <span className={`toggle ${setSpanClassName('news')}`}></span>
                        </div>
                    </div>
                </div>
            }
            {isAdmin() && <div className="admin-notefication">
                <div className="me-tagged flex space-between align-center">
                    <span>קבלת התראות כשמתייגים אותי במשימה</span>
                    <div className={`btn-notefications ${setDivClassName('me-tagged')} flex align-center`}
                        onClick={() => handleChange("me-tagged")}>
                        <span className={`toggle ${setSpanClassName('me-tagged')}`}></span>
                    </div>
                </div>
                <div className="my-missions-updates flex space-between align-center">
                    <span>קבלת התראות על עדכונים במשימות שלי</span>
                    <div className={`btn-notefications ${setDivClassName('my-missions-updates')} flex align-center`}
                        onClick={() => handleChange("my-missions-updates")}>
                        <span className={`toggle ${setSpanClassName('my-missions-updates')}`}></span>
                    </div>
                </div>
                <div className="completed-missions flex space-between align-center">
                    <span>קבלת התראות על משימות שלי שהושלמו</span>
                    <div className={`btn-notefications ${setDivClassName('completed-missions')} flex align-center`}
                        onClick={() => handleChange("completed-missions")}>
                        <span className={`toggle ${setSpanClassName('completed-missions')}`}></span>
                    </div>
                </div>
                <div className="delayed-missions flex space-between align-center">
                    <span>קבלת התראות על משימות באיחור</span>
                    <div className={`btn-notefications ${setDivClassName('delayed-missions')} flex align-center`}
                        onClick={() => handleChange("delayed-missions")}>
                        <span className={`toggle ${setSpanClassName('delayed-missions')}`}></span>
                    </div>
                </div>
                <div className="new-comments flex space-between align-center">
                    <span>קבלת התראות על תגובות חדשות</span>
                    <div className={`btn-notefications ${setDivClassName('new-comments')} flex align-center`}
                        onClick={() => handleChange("new-comments")}>
                        <span className={`toggle ${setSpanClassName('new-comments')}`}></span>
                    </div>
                </div>
                <div className="completed-projects flex space-between align-center">
                    <span>קבלת התראות על פרויקטים שהושלמו</span>
                    <div className={`btn-notefications ${setDivClassName('completed-projects')} flex align-center`}
                        onClick={() => handleChange("completed-projects")}>
                        <span className={`toggle ${setSpanClassName('completed-projects')}`}></span>
                    </div>
                </div>
                <div className="delayed-projects flex space-between align-center">
                    <span>קבלת התראות על פרויקטים באיחור</span>
                    <div className={`btn-notefications ${setDivClassName('delayed-projects')} flex align-center`}
                        onClick={() => handleChange("delayed-projects")}>
                        <span className={`toggle ${setSpanClassName('delayed-projects')}`}></span>
                    </div>
                </div>
            </div>}
        </div >
    )
}