import React, { createContext, useEffect, useState } from "react";
const data = { label: '', pplAssigned: [], files: [], date: {}, description: '', chats: [] }

export const TaskContext = createContext(data);

export const TaskProvider = ({ children }) => {
    const [taskContent, setTaskContent] = useState(data);

    useEffect(() => {
        console.log('Context Updated: ', taskContent);
    }, [taskContent])

    const removeTask = () => {
        setTaskContent(data)
    }
    const saveTask = () => {
        console.log('send to the server');
    }
    return (
        <TaskContext.Provider value={{ taskContent, setTaskContent, removeTask, saveTask }}>
            {children}
        </TaskContext.Provider>
    );
};