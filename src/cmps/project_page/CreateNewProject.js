import React from 'react';
import create_new_project from '../../assets/images/icons/create_new_project.png';

const CreateNewProject = () => {
    return (
        <div className="new-project">
            <h1>לוח ניהול כללי</h1>
            <div className="create-new-project flex align-center justify-center">
                <p>יצירת פרויקט חדש</p>
                <img src={create_new_project} />
            </div>
        </div>
    )
}

export default CreateNewProject;