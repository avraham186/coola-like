import React from 'react';
import { attachment_image, plus_sign } from '../../assets/images/icons';


export const HeadlinesTask = ({ title, icon }) => {
    return (
        <div className="headlines-task flex align-center">
            {icon && <img src={icon} alt="image crush" />}
            <h3>{title}</h3>
        </div>
    )
}
export const Labels = ({ labels }) => {
    return (
        <div className="labels-container flex align-center">
            {labels.map(({ name, color }, i) => {
                return (
                    <span key={name}>
                        <p style={{ background: color }}>{name}</p>
                    </span>

                )
            })}
            <span><img src={plus_sign} alt="square plus" /></span>
        </div>
    )
}

export const AssignedTask = ({ areAssigned }) => {
    return (
        <div className="flex ">
            {areAssigned.map(person => {
                return <span keys={person.name} className="justify-center align-center">
                    <object data={person.img} type="image/svg+xml" />
                    <p>{person.name}</p>
                </span>
            })
            }
            <span><img src={plus_sign} alt="circle plus" /></span>
        </div>
    )
}
export const AttachmentsTask = ({ files }) => {
    return (
        <div className="attachments-container flex align-center">
            {files.map(({ name }) => {
                return <div key={name} className="each-file-task">
                    <img src={attachment_image} alt="attachment image" />
                    <h3>{name}</h3>
                    <span>מחק</span>
                </div>
            })}
            <span><img src={plus_sign} alt="square plus" /></span>
        </div>
    )
}

export const TextArea = ({ id, name, rows, cols, text }) => {
    return (
        <div>
            <textarea
                id={id}
                name={name}
                rows={rows}
                cols={cols}
                maxLength="400"
                placeholder={text}
            />
        </div>
    )
}