import React from 'react';
import { ContentTask } from './ContentTask';
import { SideBar } from './SideBar';

const NewTask = () => {
    return (
        <div className="main-task justify-center flex" style={{ height: '100vh' }}>
            <ContentTask />
            <SideBar />
        </div>
    )
}

export default NewTask;

