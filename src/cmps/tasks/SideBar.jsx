import React from 'react'
import user from '../../assets/images/icons/new-task-sidebar-user.png'
import watch from '../../assets/images/icons/new-task-sidebar-watch.png'
import label from '../../assets/images/icons/new-task-sidebar-label.png'
import files from '../../assets/images/icons/new-task-sidebar-files.png'
import erase from '../../assets/images/icons/new-task-sidebar-erase.png'

export const SideBar = (props) => {

    const assignToMission = () => {
        // props.onAssignMission()
        console.log('assigned');
    }
    const chooseEndDate = () => {
        // props.onChooseEndDate()
        console.log('date choosed');
    }
    const chooseLables = () => {
        // props.onChooseLables()
        console.log('lable choosed');
    }
    const uploadFiles = () => {
        // props.onUploadFiles()
        console.log('file upload');
    }
    const remove = () => {
        // props.onRemove()
        console.log('mission erased');
    }
    return (
        <nav className="new-task-sidebar">
            <div className="sidebar-container flex column space-between">
                <div className="content flex column space-between">
                    <div className="flex" onClick={assignToMission}>
                        <img src={user} alt="מוקצים למשימה" />&nbsp;
                        <span> מוקצים למשימה</span>
                    </div>
                    <div className="flex" onClick={chooseEndDate}>
                        <img src={watch} alt="תאריך יעד" />&nbsp;
                        <span>תאריך יעד</span>
                    </div>
                    <div className="flex" onClick={chooseLables}>
                        <img src={label} alt="תוויות" />&nbsp;
                        <span>תוויות</span>
                    </div>
                    <div className="flex" onClick={uploadFiles}>
                        <img src={files} alt="קבצים" />&nbsp;
                        <span>קבצים</span>
                    </div>
                </div>
                <div className="erase flex">
                    <div className="flex" onClick={remove}>
                        <img src={erase} alt="מחיקה" />&nbsp;
                        <span>מחיקה</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
