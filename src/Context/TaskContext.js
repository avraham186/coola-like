import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext({ label: '', pplAssigned: [], files: [], date: {} });

export const TaskProvider = ({ children }) => {
    const [taskContent, setTaskContent] = useState({ label: '', pplAssigned: [], files: [], date: {} });

    // useEffect(() => {
    //     localStorage.setItem('favoriteUsers', JSON.stringify(favorites))
    // }, [favorites])

    return (
        <TaskContext.Provider value={{ taskContent, setTaskContent }}>
            {children}
        </TaskContext.Provider>
    );
};