import React, { useCallback, useContext, useState } from "react";
import { attachment_image, plus_sign } from "../../assets/images/icons";
import user_icon from "../../assets/images/home-page-imgs/user_icon.png";
import { TaskContext } from "../../context/TaskContext";

export const modes = [
  "STARTED",
  "IN_PROCESS",
  "DELAY",
  "COMPLETED",
  "CANCELED",
];
// export const modes = ['חדש', 'בתהליך', 'באיחור', 'הושלם']
export const priorities = ["HIGH", "MEDIUM", "LOW"];
// export const priorities = ['עדיפות גבוהה', 'עדיפות בינונית', 'עדיפות נמוכה']

export const ModeChoosen = ({ handleChangeStatus }) => {
  return modes.map((mode, i) => {
    return (
      <span
        onClick={handleChangeStatus}
        key={i}
        name="taskStatus"
        value={mode}
        id={`task-mode${i + 1}`}
      >
        {mode}
      </span>
    );
  });
};
export const PriorityChoosen = ({ handleChangeStatus }) => {
  return priorities.map((priority, i) => {
    return (
      <span
        onClick={handleChangeStatus}
        key={i}
        name="taskPriority"
        value={priority}
        id="priority-task"
      >
        {priority}
      </span>
    );
  });
};

export const HeadlinesTask = ({ title, icon }) => {
  return (
    <div className="headlines-task flex align-center">
      {icon && <img src={icon} alt="image crush" />}
      <h3>{title}</h3>
    </div>
  );
};
export const Labels = ({ colorLabel }) => {
  return (
    <div className="labels-container flex align-center">
      <span>
        <p
          style={
            colorLabel
              ? { background: colorLabel }
              : { border: "1px solid black" }
          }
        >
          {"כללי"}
        </p>
      </span>
    </div>
  );
};

export const AssignedTask = ({ areAssigned, children }) => {
  return (
    <div className="users-render flex">
      {areAssigned.map(({ firstName, lastName, img }, i) => {
        const name = `${firstName} ${lastName}`;
        return (
          <span key={i} className="justify-center align-center">
            <img src={img ? img : user_icon} alt="userimg" />
            {/* <object data={img?} type="image/svg+xml" /> */}
            <p>{name}</p>
          </span>
        );
      })}
      {children}
    </div>
  );
};
export const AttachmentsTask = ({ files }) => {
  return (
    <div className="attachments-container flex align-center">
      {files.map(({ name }, i) => {
        return (
          <div key={i} className="each-file-task">
            <img src={attachment_image} alt="attachment image" />
            <h3>{name}</h3>
            <span>מחק</span>
          </div>
        );
      })}
      <span>
        <img
          onClick={() => alert("מצטערים, אין קישור לשרת לכן ירד בשלב זה...")}
          src={plus_sign}
          alt="square plus"
        />
      </span>
    </div>
  );
};
export const ChatsTask = ({ chats }) => {
  return (
    <div>
      {chats.map((user, i) => {
        return (
          <div key={i} className="user-chat flex column">
            <div style={{ marginTop: "10px" }}>
              <span>{user.user}</span>
              {user.img && <img src={user.img} alt="user img chats" />}
            </div>
            <span className="user-message">{user.content}</span>
          </div>
        );
      })}
    </div>
  );
};
export const TextArea = ({ id, name, rows, cols, placeHolder, defaultVal }) => {
  const { setTaskContent } = useContext(TaskContext);
  // const getUser = JSON.parse(localStorage.getItem('user'))
  const getUser = "Guy Hassan";
  const [text, setText] = useState("");

  function debounce(func) {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText(value);
    if (e.target.name === "description") {
      setTaskContent((p) => ({ ...p, [name]: value }));
      return;
    }
  };

  const optimaize = useCallback(debounce(handleChange), []);

  const handleSubmitChat = () => {
    if (text)
      setTaskContent((p) => ({
        ...p,
        chats: [...p.chats, { user: getUser, content: text, img: "" }],
      }));
    setText("");
  };

  return (
    <div className="flex" style={{ width: "100%" }}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        maxLength="400"
        placeholder={placeHolder}
        onChange={optimaize}
        defaultValue={text || defaultVal}
      />
      {placeHolder && (
        <span className="save-chat" onClick={handleSubmitChat}>
          שמור
        </span>
      )}
    </div>
  );
};
