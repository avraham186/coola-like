import React, { useState, useEffect, useCallback } from 'react';
import { ContentTask } from './ContentTask';
import { NewTaskModal } from './NewTaskModal'
import { SideBar } from './SideBar';
import AddTags from './AddTags';

const NewTask = () => {
    // const [togglePeopleAssigned, setTogglePeopleAssigned] = useState(false)
    // const [toggleChoosenDate, setToggleChoosenDate] = useState(false)
    // const [toggleLables, setToggleLables] = useState(false)
    // const [toggleFiles, setToggleFiles] = useState(false)
    // const [toggleModal, setToggleModal] = useState(false)
    const [toggleMode, setToggleMode] = useState(
        ['label', 'pplAssigned', 'dueDate', 'file']
            .map(v => ({ [v]: false }))
    )
    console.log(toggleMode)
    // useEffect(() => {
    //     whichComponent()
    // }, [togglePeopleAssigned, toggleChoosenDate, toggleLables, toggleFiles, toggleModal])
    const ChooseToggle = useCallback((val) => {
        console.log('val - ', val)
        return null
    }, [togglePeopleAssigned, toggleChoosenDate, toggleLables, toggleFiles, toggleModal])



    return (
        <div className="main-task justify-center flex">
            <ContentTask />
            <SideBar setToggleMode={setToggleMode}/>
            <ChooseToggle />
            {toggleLables && <AddTags
                toggleMode={toggleMode}
                setToggleMode={setToggleMode} />}



            {/* {toggleModal &&
                <NewTaskModal Comp={whichComponent()}
                />} */}

        </div>
    )
}

export default NewTask;
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