import React from 'react';
import { attachment_image, label, plus_sign } from '../../assets/images/icons';
import user_icon from '../../assets/images/home-page-imgs/user_icon.png';


export const HeadlinesTask = ({ title, icon }) => {
    return (
        <div className="headlines-task flex align-center">
            {icon && <img src={icon} alt="image crush" />}
            <h3>{title}</h3>
        </div>
    )
}
export const Labels = ({ colorLabel }) => {
    return (
        <div className="labels-container flex align-center">
            <span >
                <p style={{ background: colorLabel }}>{'Gnerel'}</p>
            </span>
            {/* {labels.map(({ name, color }, i) => {
                return (
                    <span key={i}>
                        <p style={{ background: color }}>{name}</p>
                    </span>

                )
            })} */}
            {/* <span><img src={plus_sign} alt="square plus" /></span> */}
        </div>
    )
}

export const AssignedTask = ({ areAssigned }) => {
    return (
        <div className="flex ">
            {areAssigned.map(({ firstName, lastName, img }, i) => {
                const name = `${firstName} ${lastName}`
                return <span key={i} className="justify-center align-center">
                    <img src={img ? img : user_icon} alt="userimg" />
                    {/* <object data={img?} type="image/svg+xml" /> */}
                    <p>{name}</p>
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
            {files.map(({ name }, i) => {
                return <div key={i} className="each-file-task">
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