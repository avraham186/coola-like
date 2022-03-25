import React from 'react'
import { useSelector } from 'react-redux'

export const ProjectsFilter = () => {
    const userFromStore = useSelector(state => state.entities.user)
    console.log('userFromStore', userFromStore);
    return (
        <input type="text" placeholder='חפש פרויקטים' />
    )
}
