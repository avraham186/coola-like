import React, { useState, useCallback } from "react";
import userIcon from "./assets/user.png";
import closeIcon from "./assets/close.png";
import added from "./assets/added.png";
import { setSelectedUsers } from "../../store/actions/taskAction";
import { useSelector, useDispatch } from "react-redux";
import "./NewTask.css";

export const NewTask = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.taskModule.users);

  const filteredQuery = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container pt-2 task-con">
      <div className="row" style={{ borderBottom: "1px solid gray" }}>
        <div className="col-md-2 text-left">
          <img src={closeIcon} />
        </div>
        <div className="col-md-10 text-center">
          מוקצים למשימה <img src={userIcon} />
        </div>
      </div>
      <div className="row text-center pt-2">
        <div className="col">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{
              textAlign: "right",
              width: "100%",
              height: "40px",
              border: "1px solid lightgray",
            }}
            type="text"
            placeholder="..חפש משתמש"
          />
        </div>
      </div>
      {filteredQuery.map((user, index) => (
        <div key={index} className="row pt-3">
          {user.selected && (
            <div className="col-md-1">
              {" "}
              <img src={added} />{" "}
            </div>
          )}
          <div className="col text-end">
            <span>
              ({user.roleText}) , {user.name}
            </span>
          </div>
          <div className="col-md-2">
            <img
              onClick={() => dispatch(setSelectedUsers(user))}
              src={user.img}
            />
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col pt-3">
          <button className="save-btn">שמור</button>
        </div>
      </div>
    </div>
  );
};