import React, { useState, useCallback, useEffect } from "react";
import userIcon from "./assets/user.png";
import closeIcon from "./assets/close.png";
import added from "./assets/added.png";
import { setSelectedUsers, setUsers } from "../../store/actions/taskAction";
import { useSelector, useDispatch } from "react-redux";
import "./NewTask.css";

export const NewTask = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.taskModule.users);

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  const filteredQuery = users?.filter((user) =>
    user?.firstName.toLowerCase().includes(search?.toLocaleLowerCase())
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
      <div className="row text-center pt-2 pb-2">
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
      <div className="row">
        <div className="col">
          <select size="10" style={{ width: "100%" }}>
            {filteredQuery?.map((user, index) => (
              <>
                <option>
                  {user.firstName} , {user.lastName}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col pt-3">
          <button className="save-btn">שמור</button>
        </div>
      </div>
    </div>
  );
};
