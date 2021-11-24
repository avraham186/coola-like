import React, { useState } from 'react';
import logo from "../../assets/images/home-page-imgs/Under construction.svg";
import { Link } from 'react-router-dom';
import AddNewProject from './sideBarAdmin/AddNewProject';

const EmptyProjects = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="projects">
            <div className="project-portfolio flex align-center justify-center">
                <div className="project-content">
                    <h3>עדיין אין פרויקטים להצגה</h3>
                    <p>לחצו על הכפתור כדי להתחיל</p>
                    <div className="project-button"><span onClick={() => setOpen(!open)}>צור פרויקט</span></div>
                </div>
                {open && <AddNewProject
                    toggleLinks={open}
                    setToggleLinks={setOpen}
                />}
                <div className="project-logo">
                    <object data={logo} type="image/svg+xml" />
                </div>
            </div>
        </div>

    );
};

export default EmptyProjects;