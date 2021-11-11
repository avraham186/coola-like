import React, { useEffect, useState, useContext } from "react";
import { user, v_sign, close_sign } from "../../../assets/images/icons";
import { adi, stav, iris, shimon } from "../../../assets/images/founders-imgs";
import { setUsers } from "../../../store/actions/taskAction";
import { TaskContext } from "../../../Context/TaskContext";
import { Modal, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
const imgUsers = [adi, stav, iris, shimon]

export const UserPermissions = ({ toggleUserPermissions , setToggleUserPermissions }) => {

  const [open, setOpen] = useState(false);
  const [searchUser, setSearchUser] = useState("")
  const [userClicked, setUserClicked] = useState([]);
//   const { pplAssigned } = toggleMode;
  const { users } = useSelector(({ entities }) => entities.taskModule)
//   const { taskContent, setTaskContent } = useContext(TaskContext);
const dispatch = useDispatch()

  useEffect(() => {
      console.log('hi')
    dispatch(setUsers())
  }, [])

  const applyUsers = () => {
    if (searchUser)
      return users.filter((user) => {
        const name = `${user.firstName} ${user.lastName}`

        return user.firstName.toLowerCase().startsWith(searchUser.toLowerCase()) ||
          user.lastName.toLowerCase().startsWith(searchUser.toLowerCase())

      }
      );
    return users;
  };
  const isChoosen = (user) => {
    return userClicked.some((u) => u.id === user.id);
  };
  const userChoosen = (u) => {
    if (isChoosen(u)) {
      const filterUser = userClicked.filter((user) => user.id !== u.id);
      setUserClicked(filterUser);
    } else {
      setUserClicked((p) => [...p, u]);
    //   setTaskContent(p => {
    //     const prevUsers = p.pplAssigned;
    //     return { ...p, pplAssigned: [...prevUsers, u] };
    //   })
    }
  };

  useEffect(() => {
    toggleUserPermissions && setOpen((p) => !p);
  }, [toggleUserPermissions]);

  return (
    <Modal
      className="modals"
      open={open}
      onClose={() =>
        setToggleUserPermissions((p) => ({ ...p, toggleUserPermissions: !p.toggleUserPermissions }))
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box className="box-modal">
        <div className="ppl-assigned-headline flex">
          <span className="btn-close"
            onClick={() => setToggleUserPermissions((p) => ({
              ...p,
              toggleUserPermissions: !p.toggleUserPermissions,
            }))
            }>
            <img src={close_sign} />
          </span>
          <div className="ppl-assigned-title flex align-center">
            מוקצים למשימה{" "}
            <img src={user} alt="ppl-assigned-title" />
          </div>
        </div>
        <hr style={{ width: "300px" }} />
        <input
          type="text"
          value={searchUser}
          className="addLinkInput"
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="..חפש משתמש"
          style={{ width: "300px" }}
        />
        <div className="users-assigned">
          {applyUsers().map((user, i) => {
            const { firstName, lastName } = user;
            // const { name, userImg } = user;
            return (
              <div
                key={user.id}
                // key={name}
                className="each-user flex align-center"
                onClick={() => userChoosen(user)}
              >
                <object
                  data={imgUsers[i % 4]}
                  type="image/svg+xml"
                  style={{ width: "30px", margin: "10px" }}
                ></object>
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
        <button className="save-modal-button"
          onClick={() => setToggleUserPermissions((p) => ({ ...p, toggleUserPermissions: !p.toggleUserPermissions}))}>
          שמור
        </button>
      </Box>
    </Modal>
  );
};
