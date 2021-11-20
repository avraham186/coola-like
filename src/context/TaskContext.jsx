import React, {createContext, useState} from "react";
import taskDAL from "../adapters/TMS/tasksDAL";

const data = {
    // title: 'משימה חדשה', priority: 'HIGH', Status: 'IN_PROCESS', label: '',
    title: 'משימה חדשה', taskPriority: 'HIGH', taskStatus: 'IN_PROCESS', label: '',
    pplAssigned: [], files: [], date: {}, description: '', chats: []
}

export const TaskContext = createContext(data);

export const TaskProvider = ({children}) => {
    const [taskContent, setTaskContent] = useState(data);

    const removeTask = () => {
        setTaskContent(data)
    }

    const saveTask = (projectId) => {
        const taskToSend = {
            projectId,
            task: {
                title: taskContent.title,
                taskPriority: taskContent.taskPriority,
                taskStatus: taskContent.taskStatus,
                label: taskContent.label,
                team: taskContent.pplAssigned,
                files: taskContent.files,
                date: taskContent.date,
                description: taskContent.description,
                chats: taskContent.chats
            }
        }
        taskDAL.createTask(taskToSend)
    }

    return (
        <TaskContext.Provider value={{taskContent, setTaskContent, removeTask, saveTask}}>
            {children}
        </TaskContext.Provider>
    );
};