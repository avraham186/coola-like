import React from 'react';
import add_new_project from '../../assets/images/icons/add_new_project.png';

const CreateNewProject = () => {
    return (
        <div className="new-project">
            <h1>לוח ניהול כללי</h1>
            <div className="create-new-project flex align-center justify-center">
                <p>יצירת פרויקט חדש</p>
                <img src={add_new_project} />
            </div>
        </div>
    )
}

export default CreateNewProject;