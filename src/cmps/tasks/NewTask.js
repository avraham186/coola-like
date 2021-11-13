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
<<<<<<< HEAD
    const [taskToSave, setTaskToSave] = useState({label:''})
    // const taskToSave = {}
    // const setTaskToSave = (name,pros) => {
    //     taskToSave[name] = pros;
    // }
=======

>>>>>>> ae8410d913210259b044966d3d51bef68c2085da
    const IsClicked = () => {
        const isClicked = Object.keys(toggleMode).filter(k => toggleMode[k])
        switch (isClicked[0]) {
            case 'label':
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
<<<<<<< HEAD
                    setTaskToSave={setTaskToSave}
                    taskToSave={taskToSave}/>
=======
                />
>>>>>>> ae8410d913210259b044966d3d51bef68c2085da
            case 'pplAssigned':
                return <PeopleAssigned
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
<<<<<<< HEAD
                    setTaskToSave={setTaskToSave} />
=======
                />
>>>>>>> ae8410d913210259b044966d3d51bef68c2085da
            case 'dueDate':
                return <DueDate
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
<<<<<<< HEAD
                    setTaskToSave={setTaskToSave} />
=======
                />
>>>>>>> ae8410d913210259b044966d3d51bef68c2085da
            case 'file':
                return <AddFile
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
<<<<<<< HEAD
                    setTaskToSave={setTaskToSave} />
=======
                />
>>>>>>> ae8410d913210259b044966d3d51bef68c2085da
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