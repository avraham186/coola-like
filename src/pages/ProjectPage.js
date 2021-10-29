import React, {useEffect, useState} from 'react';
import ProjectStart from "../cmps/project_page/ProjectStart";
import TMSDAL from "../adapters/TMSDAL";

const ProjectPage = () => {
    const URI = process.env.REACT_APP_URI;
    const [tasks, setTasks] = useState([]);

    useEffect(async () => {
        const response = await TMSDAL.getAll();
        setTasks(response.data)
        console.log(tasks)
    }, [])

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            title: {task.title}
                            <br/>
                        </div>
                    )
                })
            }
            <ProjectStart/>

        </div>
    );
};

export default ProjectPage;