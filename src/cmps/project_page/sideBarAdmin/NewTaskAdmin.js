import React, { useState, useEffect } from 'react';
import { ContentTask } from './ContentTask';
import { NewTaskModal } from './NewTaskModal'
import { SideBar } from './SideBar';
import AddTags from './AddTags';

const NewTask = () => {
    const [togglePeopleAssigned, setTogglePeopleAssigned] = useState(false)
    const [toggleChoosenDate, setToggleChoosenDate] = useState(false)
    const [toggleLables, setToggleLables] = useState(false)
    const [toggleFiles, setToggleFiles] = useState(false)
    const [toggleModal, setToggleModal] = useState(false)

    useEffect(() => {
        whichComponent()
    }, [togglePeopleAssigned, toggleChoosenDate, toggleLables, toggleFiles, toggleModal])

    const closeModal = () => {
        setTogglePeopleAssigned()
        setToggleModal()
    }
    const whichComponent = () => {
        // if (togglePeopleAssigned) {
        //     return {
        //         Comp: AssignedPpl,
        //         closeModal
        //     }
        // }
        if (toggleChoosenDate) {
            return {
                // component: <ChooseDate />,
                closeModal
            }
        }
        if (toggleLables)
            return {
                component: AddTags,
                closeModal
            }
        if (toggleFiles)
            return {
                // component: <ChooseFiles />,
                closeModal
            }
        console.log('something clicked');
        return
    }
    return (
        <div className="main-task justify-center flex">
            <ContentTask />
            <SideBar
                setTogglePeopleAssigned={setTogglePeopleAssigned}
                setToggleChoosenDate={setToggleChoosenDate}
                setToggleLables={setToggleLables}
                setToggleFiles={setToggleFiles}
                setToggleModal={setToggleModal} />

            {toggleModal &&
                <NewTaskModal Comp={whichComponent()}
                />}
        </div>
    )
}

export default NewTask;

