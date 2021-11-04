import React, { useState, useCallback } from 'react';
import { ContentTask } from './ContentTask';
import { NewTaskModal } from './NewTaskModal'
import { SideBar } from './SideBar';
import AddLabel from './AddLabel.jsx';
import AddFile from './AddFile';
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
                return <AddLabel
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode} />
            case 'dueDate':
                return <AddLabel
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


// const [togglePeopleAssigned, setTogglePeopleAssigned] = useState(false)
// const [toggleChoosenDate, setToggleChoosenDate] = useState(false)
// const [toggleLables, setToggleLables] = useState(false)
// const [toggleFiles, setToggleFiles] = useState(false)
// const [toggleModal, setToggleModal] = useState(false)
{/* <SideBar
                setTogglePeopleAssigned={setTogglePeopleAssigned}
                setToggleChoosenDate={setToggleChoosenDate}
                setToggleLables={setToggleLables}
                setToggleFiles={setToggleFiles}
                setToggleModal={setToggleModal} /> */}
 // const closeModal = () => {
    //     setTogglePeopleAssigned()
    //     setToggleModal()
    // }
 // const whichComponent = () => {
    //     // if (togglePeopleAssigned) {
    //     //     return {
    //     //         Comp: AssignedPpl,
    //     //         closeModal
    //     //     }
    //     // }
    //     if (toggleChoosenDate) {
    //         return {
    //             // component: <ChooseDate />,
    //             closeModal
    //         }
    //     }
    //     if (toggleLables)
    //         return {
    //             Comp: AddTags,
    //             closeModal
    //         }
    //     if (toggleFiles)
    //         return {
    //             // component: <ChooseFiles />,
    //             closeModal
    //         }
    //     console.log('something clicked');
    //     return
    // }