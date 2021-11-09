import React, { useState, useCallback, useEffect } from 'react';
import { ContentTask } from './ContentTask';
import { SideBar } from './SideBar';
import { AddLabel, AddFile, DueDate, PeopleAssigned } from './Modals';

const NewTask = () => {
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })
    const [taskToSave, setTaskToSave] = useState({label:''})
    // const taskToSave = {}
    // const setTaskToSave = (name,pros) => {
    //     taskToSave[name] = pros;
    // }
    const IsClicked = () => {
        const isClicked = Object.keys(toggleMode).filter(k => toggleMode[k])
        switch (isClicked[0]) {
            case 'label':
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                    setTaskToSave={setTaskToSave}
                    taskToSave={taskToSave}/>
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                    setTaskToSave={setTaskToSave} />
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                    setTaskToSave={setTaskToSave} />
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                    setTaskToSave={setTaskToSave} />
            default:
                break;
        }
        return null;
    }

    return (
        <div className="main-task flex justify-center">
            <ContentTask />
            <SideBar setToggleMode={setToggleMode} />
            <IsClicked />
        </div>
    )
}

export default NewTask;