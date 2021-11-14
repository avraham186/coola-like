import React, { useState, useCallback, useEffect } from 'react';
import { ContentTask } from './ContentTask';
import { SideBar } from './SideBar';
import { AddLabel, AddFile, DueDate, PeopleAssigned } from './Modals';
import { TaskProvider } from '../../Context/TaskContext';


const NewTask = () => {
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })
    const IsClicked = () => {
        const isClicked = Object.keys(toggleMode).filter(k => toggleMode[k])
        switch (isClicked[0]) {
            case 'label':
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                />
            default:
                break;
        }
        return null;
    }

    return (
        <TaskProvider>
            <div className="main-task flex justify-center">
                <ContentTask setToggleMode={setToggleMode} />
                <SideBar setToggleMode={setToggleMode} />
                <IsClicked />
            </div >
        </TaskProvider>

    )
}

export default NewTask;