import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const ProjectsFilter = ({ projectsToFilter, userToFilter }) => {

    const [projects, setProjects] = useState(projectsToFilter.filter(project => project.adminProject.name === userToFilter.name))
    const [projectSearch, setProjectSearch] = useState('')

    const userFromStore = useSelector(state => state.entities.user)
    console.log('userFromStore', userFromStore);
    // const filteredProjects = () => {
    //     const user = userToFilter.name
    //     return projectsToFilter.filter(project=>project.adminProject.name===user)
    // }
    const handleChange = (ev) => {
        setProjectSearch(p => ev.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='חפש פרויקטים' />
            {/* <input type="text" name='projectSearch' value={projectSearch} onChange={handleChange} placeholder='חפש פרויקטים' /> */}
            {/* <div>{projects.filter(project => project.projectName.toLowerCase().includes(projectSearch.toLowerCase()))}</div> */}
        </div>
    )
}
