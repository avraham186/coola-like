import React from 'react';
import logo from "../../assets/images/home-page-imgs/Under construction.svg";
import { Link } from 'react-router-dom';

const EmptyProjects = () => {
    return (
        <div className="projects">
            <div className="project-portfolio flex align-center justify-center">
                <div className="project-content">
                    <h3>עדיין אין פרויקטים להצגה</h3>
                    <p>לחצו על הכפתור כדי להתחיל</p>
                    <div className="project-button"><Link to=""><span>צור פרויקט</span></Link></div>
                </div>
                <div className="project-logo">
                    <object data={logo} type="image/svg+xml" />
                </div>
            </div>
        </div>

    );
};

export default EmptyProjects;