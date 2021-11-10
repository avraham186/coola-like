import React, { useState, useCallback } from 'react';
import { ContentTask } from './ContentTask';
// import { NewTaskModal } from './NewTaskModal'
import { SideBar } from './SideBar';
import { AddLabel, AddFile, DueDate, PeopleAssigned } from './Modals';

const NewTask = () => {
    const [toggleMode, setToggleMode] = useState({ label: false, pplAssigned: false, dueDate: false, file: false })
    const IsClicked = useCallback(() => {
        const isClicked = Object.keys(toggleMode).filter(k => toggleMode[k])
        switch (isClicked[0]) {
            case 'label':
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode} />
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode} />
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode} />
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode} />
            default:
                break;
        }
        return null;
    }, [{ ...toggleMode }])

    return (
        <div className="main-task flex justify-center">
            <ContentTask />
            <SideBar setToggleMode={setToggleMode} />
            <IsClicked />
        </div>
    )
}

export default NewTask;