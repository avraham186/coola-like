import React from 'react'

export const ProfileNotefications = () => {
    return (
        <div className="profile-notefications">
            <h1 className="headline">התראות לכתובת האימייל</h1>
            <div className="sub-headline">בחר מתי לקבל התראות לכתובת האימייל האישית שלך</div>

            <div className="every-new-event flex space-between align-center">
                <span>קבלת התראות על כל אירוע חדש בקהילה</span>
                <button>yes</button>
            </div>
            <div className="new-event-on-my-interest flex space-between align-center">
                <span>קבלת התראות על אירועים חדשים הקשורים לתחום העניין שלי</span>
                <button>yes</button>
            </div>
            <div className="new-jobs-on-my-interest flex space-between align-center">
                <span>קבלת התראות על משרות חדשות הקשורות לתחום העניין שלי</span>
                <button>yes</button>
            </div>
            <div className="news flex space-between align-center">
                <span>קבלת התראות על כתבות חדשות שעולות בטיפים ומידע</span>
                <button>yes</button>
            </div>

        </div>
    )
}