import React, { useEffect, useState } from 'react'
import LinkIcon from '../../assets/images/linkedin.svg'

export function Founders(props) {

    return (<div className='box-person flex space-between'>

        {props.persons.map((person) => {
            return (
                <div className="founders flex column" key={person.name}>
                    <svg className='person-img' src={person.img} alt={person.name} />
                    <span className='person-name' >
                        {person.name}
                        <object data={LinkIcon} width="20" height="20"/>
                    </span>
                    <span className='role-text'>{person.roleText}</span>
                </div>)
        })}
    </div >)
}