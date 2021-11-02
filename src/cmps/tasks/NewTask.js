import React from 'react';
import { ContentTask } from './ContentTask';
import { SideBar } from './SideBar';

const NewTask = () => {
    return (
        <div className="main-task justify-center flex" >
            <ContentTask />
            <SideBar />
        </div>
    )
}

export default NewTask;

