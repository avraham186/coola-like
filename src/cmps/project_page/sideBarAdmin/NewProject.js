import React from 'react'

function NewProject({ handleChange }) {
    return (
        <div>
            <input type="text" placeholder='שם הפרויקט' />
            <h3>תאריך התחלה וסיום</h3>
            <input type="checkbox" name="הגדר פרוייקט שנתי" id=""  />
            <label>תאריך התחלה
                <input type="date" name="" id="" />
            </label>
            
        </div>
    )
}

export default NewProject
