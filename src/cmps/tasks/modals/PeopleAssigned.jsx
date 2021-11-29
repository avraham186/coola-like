import React, { useContext, useEffect, useState } from "react";
import { close_sign, user, v_sign } from "../../../assets/images/icons";
import user_icon from '../../../assets/images/home-page-imgs/user_icon.png';
import { setUsers } from "../../../store/actions/taskAction";
import { TaskContext } from "../../../Context/TaskContext";
import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const PeopleAssigned = ({ toggleMode, setToggleMode }) => {
    const { taskContent, setTaskContent } = useContext(TaskContext);
    const [open, setOpen] = useState(false);
    const [searchUser, setSearchUser] = useState("");
    const [userClicked, setUserClicked] = useState([...taskContent.pplAssigned]);
    const { pplAssigned } = toggleMode;
    const { users } = useSelector(({ entities }) => entities.taskModule)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUsers());
    }, []);

    const applyUsers = () => {
        if (searchUser)
            return users.filter((user) => {
                const name = `${user.firstName} ${user.lastName}`;
                return (
                    user.firstName.toLowerCase().startsWith(searchUser.toLowerCase()) ||
                    user.lastName.toLowerCase().startsWith(searchUser.toLowerCase())
                );
            });
        return users;
    };
    const isChoosen = (user) => {
        return userClicked.some((u) => u.id === user.id);
    };

    const userChoosen = (u) => {
        console.log(u)
        if (isChoosen(u)) {
            const filterUser = userClicked.filter((user) => user.id !== u.id);
            setUserClicked(filterUser);
            setTaskContent(p => ({ ...p, pplAssigned: p.pplAssigned.filter((user) => user.id !== u.id) }))
        } else {
            setUserClicked((p) => [...p, u]);
            setTaskContent((p) => ({ ...p, pplAssigned: [...p.pplAssigned, u] }))
        }
    };

    useEffect(() => {
        pplAssigned && setOpen((p) => !p);
    }, [pplAssigned]);

    return (
        <Modal
            className="modals"
            open={open}
            onClose={() =>
                setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned }))
            }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="box-modal">
                <div className="ppl-assigned-headline flex">
                    <img src={close_sign} alt="closesign" className="btn-close"
                        onClick={() => setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned, }))
                        } />
                    <div className="ppl-assigned-title ">
                        מוקצים למשימה <img src={user} alt="ppl-assigned-title" />
                    </div>
                </div>
                <hr style={{ width: "300px" }} />
                <input
                    type="text"
                    value={searchUser}
                    className="search-user-assigned"
                    onChange={(e) => setSearchUser(e.target.value)}
                    placeholder="חפש משתמש..."
                />
                <div className="users-assigned">
                    {applyUsers().map((user, i) => {
                        const { firstName, lastName } = user;
                        return (
                            <div
                                key={user.id}
                                className="each-user flex align-center"
                                onClick={() => userChoosen(user)}
                            >
                                {user.img ?
                                    <object data={user.img} type="image/svg+xml" />
                                    : <img src={user_icon} alt="userimg" />
                                }
                                <p style={{ textTransform: "capitalize" }}>
                                    {firstName}&nbsp;{lastName}
                                </p>
                                {/* <p>{name}</p> */}
                                {isChoosen(user) && (
                                    <img src={v_sign} alt="v-sign" style={{ margin: "20px" }} />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className='submit-btn-task'>
                    <button
                        className="btn-save-task"
                        onClick={() =>
                            setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned }))
                        }
                    >
                        שמור
                    </button>
                </div>
            </Box>
        </Modal>
    );
};
