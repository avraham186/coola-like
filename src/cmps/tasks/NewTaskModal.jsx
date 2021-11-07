import React from "react";

export const NewTaskModal = ({ Comp }) => {
    console.log('component', Comp);
    return (
        <div className="new-task-modal">
            <div className="modal-main flex column align-center justify-center">
                <Comp.Comp />
                <button onClick={Comp.closeModal}>close</button>
            </div>
        </div>
    );
};