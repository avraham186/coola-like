import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export const ProjectsFilter = ({ projectsToFilter, userToFilter }) => {
    const [projects, setProjects] = useState(projectsToFilter.filter(project => project.adminProject.email === userToFilter.email))
    const [projectSearch, setProjectSearch] = useState('')
    const location = useLocation()
    // const userFromStore = useSelector(state => state.entities.user)
    // const filteredProjects = () => {
    //     const user = userToFilter.name
    //     return projectsToFilter.filter(project=>project.adminProject.name===user)
    // }
    useEffect(() => {
        setProjectSearch('')
    }, [location])

    const handleChange = (ev) => {
        setProjectSearch(p => ev.target.value)
    }
    const projectsClassName = () => {
        return projectSearch.length > 0 ? 'projects-filter-map' : 'empty-projects-filter-map'
    }

    return (
        <div className='projects-filter'>
            <input type="text" name='projectSearch' value={projectSearch} onChange={handleChange} placeholder='חפש פרויקטים' />
            <div className={`${projectsClassName()} flex column`}>{projectsToFilter.map(project => {
                return project.projectName.toLowerCase().includes(projectSearch.toLowerCase()) ?
                    <span key={project.id} className='projects-filter-span flex justify-center align-center'>
                        <Link to={`/projects/task/${project.id}`}>{project.projectName}</Link></span> : ''
            })}
            </div>
        </div>
    )
}