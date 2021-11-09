import React, { useState, useCallback, useEffect, useContext } from 'react';
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
    // const [taskToSave, setTaskToSave] = useState({ label: '' })


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
                // setTaskToSave={setTaskToSave}
                />
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                // setTaskToSave={setTaskToSave} 
                />
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                // setTaskToSave={setTaskToSave} 
                />
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                // setTaskToSave={setTaskToSave} 
                />
            default:
                break;
        }
        return null;
    }

    return (
        <TaskProvider>
            <div className="main-task flex justify-center">
                <ContentTask />
                <SideBar setToggleMode={setToggleMode} />
                <IsClicked />
            </div >
        </TaskProvider>

    )
}

export default NewTask;