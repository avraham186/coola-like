import React from 'react';
import { create_new_project } from "../../assets/images/icons/index";

const CreateNewProject = ({ setOpen, setAddProjToggle, setToggleLinks, toggleLinks }) => {
    return (
        <div className="new-project flex align-center">
            <h1>לוח ניהול כללי</h1>
            <div className="create-new-project flex align-center justify-center">
                <span
                    className="add-project-btn flex align-center justify-center"
                    onClick={() => {
                        setOpen(true);
                        setAddProjToggle();
                        setToggleLinks(!toggleLinks);
                    }}
                >
                    <img src={create_new_project} alt='new content icon' />
                    הוספת פרוייקט חדש
                </span>
            </div>
        </div>
    )
}

export default CreateNewProject;