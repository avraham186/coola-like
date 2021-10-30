import React from 'react';
import CreateNewProject from '../cmps/project_page/CreateNewProject';
import Projects from "../cmps/project_page/Projects";

const ProjectPage = () => {
    return (
        <div>
            <CreateNewProject />
            <Projects />
        </div>
    );
};

export default ProjectPage;