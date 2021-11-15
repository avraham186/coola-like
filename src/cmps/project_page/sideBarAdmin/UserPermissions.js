import React, { useEffect, useState, useContext } from "react";
import { user, v_sign, close_sign } from "../../../assets/images/icons";
import { adi, stav, iris, shimon } from "../../../assets/images/founders-imgs";
import { setUsers } from "../../../store/actions/taskAction";
import { TaskContext } from "../../../Context/TaskContext";
import { Modal, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// import DropdownPermits from "./DropdownPermits";

const imgUsers = [adi, stav, iris, shimon]

const UserPermissions = ({ toggleLinks, setToggleLinks }) => {

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
    toggleLinks && setOpen((p) => !p);
  }, [toggleLinks]);

  return (
    <Modal
      className="modals"
      open={open}
      onClose={() =>
        setToggleLinks((p) => ({ ...p, toggleLinks: !p.toggleLinks }))
      }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box-modal">
        <div className="ppl-assigned-headline-perm flex justify-center space-between">
          {/* <span className="btn-close"
            onClick={() => setToggleLinks((p) => ({
              ...p,
              toggleLinks: !p.toggleLinks,
            }))
            }>
            <img src={close_sign} />
          </span> */}
          <div className="ppl-assigned-title flex align-center">
            הרשאות משתמשים &nbsp;
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

        />
        <div className="users-assigned">
          {applyUsers().map((user, i) => {
            const { firstName, lastName } = user;
            // const { name, userImg } = user;
            return (
              <div
                key={user.id}
                // key={name}
                className="each-user-perm flex align-center space-between"
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

                <select name="dropdownPermits" className='dropdownPermits'>
                  <option value="הרשאת מתנדב">
                    הרשאת מתנדב
                  </option>
                  <option value="הרשאת מנהל משימה">
                    הרשאת מנהל משימה
                  </option>
                  <option value="הרשאת אדמין">
                    הרשאת אדמין
                  </option>
                  <option value="הסרת הרשאות ">
                    הסרת הרשאות
                  </option>
                </select>


                {isChoosen(user) && (
                  <img src={v_sign} alt="v-sign" style={{ margin: "20px" }} />

                )}
              </div>
            );
          })}
        </div>
        <button className="save-modal-button"
          onClick={() => setToggleLinks((p) => ({ ...p, toggleLinks: !p.toggleLinks }))}>
          שמור
        </button>
      </Box>
    </Modal>
  );
};

export default UserPermissions;


