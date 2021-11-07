import React, { useEffect, useState } from "react";
import { user, v_sign, close_sign } from "../../../assets/images/icons";
import "./css/AddFileDesign.css";
import { Modal, Box } from "@mui/material";
import { adi, stav, iris, shimon } from "../../../assets/images/founders-imgs";

export const PeopleAssigned = ({ toggleMode, setToggleMode }) => {
  const [open, setOpen] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const users = [
    { name: "Shlomi", userImg: adi },
    { name: "Guy", userImg: iris },
    { name: "Avraham", userImg: stav },
    { name: "Shalom", userImg: shimon },
  ];
  const [userClicked, setUserClicked] = useState([]);
  const { pplAssigned } = toggleMode;

  const applyUsers = () => {
    if (searchUser)
      return users.filter((user) =>
        user.name.toLowerCase().startsWith(searchUser.toLowerCase())
      );
    return users;
  };
  const isChoosen = (user) => {
    return userClicked.some((u) => u.name === user.name);
  };
  const userChoosen = (u) => {
    if (isChoosen(u)) {
      const filterUser = userClicked.filter((user) => user.name !== u.name);
      setUserClicked(filterUser);
    } else setUserClicked((p) => [...p, u]);
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
        {/* <span className="title-ppl-assigned flex align-center justify-center">
          <img
            className="close_sign"
            src={close_sign}
            alt="close-sign"
            onClick={() =>
              setToggleMode((p) => ({
                ...p,
                pplAssigned: !p.pplAssigned,
              }))
            }
          />
          <span className="flex align-center">
            <h3>מוקצים למשימה</h3>
            <img src={user} />
          </span>
        </span> */}
        <div className="ppl-assigned-headline flex">
          <span className="btn-close" onClick={() => setToggleMode(p => !p)}>
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
        />
        <div className="users-assigned">
          {applyUsers().map((user) => {
            const { name, userImg } = user;
            return (
              <div
                className="each-user flex align-center"
                onClick={() => userChoosen(user)}
              >
                <object
                  data={userImg}
                  type="image/svg+xml"
                  style={{ width: "30px", margin: "10px" }}
                ></object>
                <p>{name}</p>
                {isChoosen(user) && (
                  <img src={v_sign} alt="v-sign" style={{ margin: "20px" }} />
                )}
              </div>
            );
          })}
        </div>
        <button className="save-modal-button">שמור</button>
      </Box>
    </Modal>
  );
};
