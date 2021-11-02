import React from 'react';
import { attachment_image, square_plus } from '../../assets/images/icons';

export const HeadlinesTask = ({ title, icon }) => {
    return (
        <div className="headlines-task flex align-center">
            <img src={icon} alt="image crush" />
            <h3>{title}</h3>
        </div>
    )
}

export const AttachmentsTask = ({ files }) => {
    return (
        <div className="attachments-task flex align-center">
            {files.map(({ name }) => {
                return <div className="each-file-task">
                    <img src={attachment_image} alt="attachment image" />
                    <h3>{name}</h3>
                    <span>מחק</span>
                </div>
            })}
            <span><img src={square_plus} alt="square plus" /></span>
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
                maxlength="400"
            >{text}</textarea>
        </div>
    )
}