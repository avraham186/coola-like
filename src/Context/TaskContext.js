import React, { createContext, useEffect, useState } from "react";
import taskDAL from "../adapters/TMS/tasksDAL";
const data = {
    title: 'משימה חדשה', priority: 'HIGH', Status: 'IN_PROCESS', label: '',
    pplAssigned: [], files: [], date: {}, description: '', chats: []
}

export const TaskContext = createContext(data);

export const TaskProvider = ({ children }) => {
    const [taskContent, setTaskContent] = useState(data);
    useEffect(() => {
        // console.log('Context Updated: ', taskContent);
    }, [taskContent])

    const removeTask = () => {
        setTaskContent(data)
    }
    const saveTask = (projectId) => {
        const taskToSend={
            projectId,
            task: taskContent
        }
        taskDAL.createTask(projectId,taskToSend)
        // console.log('');
    }
    return (
        <TaskContext.Provider value={{ taskContent, setTaskContent, removeTask, saveTask }}>
            {children}
        </TaskContext.Provider>
    );
};