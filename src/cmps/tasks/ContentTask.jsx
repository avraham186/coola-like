import React, { useContext, useState, useEffect } from "react";
import {
  attachment_icon,
  chat_logo,
  description_mission,
  plus_sign,
} from "../../assets/images/icons";
import {
  AssignedTask,
  AttachmentsTask,
  ChatsTask,
  HeadlinesTask,
  Labels,
  ModeChoosen,
  modes,
  PriorityChoosen,
  TextArea,
} from "./UtilsTask.js";
import { TaskContext } from "../../context/TaskContext";
import "../../assets/cmps/tasks-page/_new-task-modals.scss";
import { useDispatch, useSelector } from "react-redux";
const ContentTask = ({ setToggleMode, projectId }) => {
  const projects = useSelector((state) => state.entities.projects);

  const {
    taskContent: {
      title,
      taskPriority,
      taskStatus,
      label,
      pplAssigned,
      date,
      description,
      chats,
    },
    saveTask,
    setTaskContent,
  } = useContext(TaskContext);
  const [isClicked, setIsClicked] = useState({
    taskPriority: false,
    taskStatus: false,
    title: false,
  });

  useEffect(() => {
    let project = projects.list.find((x) => x.id === parseInt(projectId));
    console.log(project);
  }, []);

  const handleChangeStatus = (e) => {
    const nameClicked = e.target.getAttribute("name");
    const value = e.target.getAttribute("value");
    setTaskContent((prev) => ({ ...prev, [nameClicked]: value }));
    setIsClicked((prev) => ({ ...prev, [nameClicked]: !prev[nameClicked] }));
  };

  return (
    <div className="new-task flex column">
      <div className="new-task-container">
        <div className="new-task-title flex align-center">
          <div className="title">
            {!isClicked.title ? (
              <h2
                onClick={() => setIsClicked((p) => ({ ...p, title: !p.title }))}
              >
                {title || "משימה חדשה"}
              </h2>
            ) : (
              <input
                type="text"
                autoFocus
                value={title}
                onChange={(e) =>
                  setTaskContent((p) => ({ ...p, title: e.target.value }))
                }
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  setIsClicked((p) => ({ ...p, title: !p.title }))
                }
              />
            )}
          </div>
          <div className="task-mode flex column">
            {!isClicked.taskStatus ? (
              <span
                onClick={() =>
                  setIsClicked((p) => ({ ...p, taskStatus: !p.taskStatus }))
                }
                id={`task-mode${modes.indexOf(taskStatus) + 1}`}
              >
                {taskStatus}
              </span>
            ) : (
              <ModeChoosen handleChangeStatus={handleChangeStatus} />
            )}
          </div>
          <div className="priority-task flex column">
            {!isClicked.taskPriority ? (
              <span
                onClick={() =>
                  setIsClicked((p) => ({ ...p, taskPriority: !p.taskPriority }))
                }
                id="priority-task"
              >
                {taskPriority}
              </span>
            ) : (
              <PriorityChoosen handleChangeStatus={handleChangeStatus} />
            )}
          </div>
        </div>

        <div className="due-date-task flex align-center">
          <h4 className="flex column">
            <span>תאריך יעד:</span>
            <input type="checkbox" /> {date.endDate}
          </h4>
          {/* <h4 className="flex column">
                        <span>שעה: </span>
                        {date.time}
                    </h4>
                    <h4 className="flex column">
                        <span>תאריך סוף: </span>
                        {date.endDate}
                    </h4> */}
          {/* <h4 className="flex column">
                        <span>תזכורת: </span>
                        {date.reminder}
                    </h4> */}
        </div>

        <div className="labels-assigned flex">
          <div className="assigned-task">
            <HeadlinesTask title="מוקצים למשימה" />
            <AssignedTask areAssigned={pplAssigned}>
              <span
                onClick={() =>
                  setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned }))
                }
              >
                <img src={plus_sign} alt="circle plus" />
              </span>
            </AssignedTask>
          </div>

          <div className="labels">
            <HeadlinesTask title="תווית" />
            <div
              style={{
                width: "250px",
                display: "grid",
                gridTemplateColumns: "auto auto",
              }}
            >
              <Labels colorLabel={label} />
              <span
                onClick={() =>
                  setToggleMode((p) => ({ ...p, pplAssigned: !p.pplAssigned }))
                }
              >
                <img
                  src={plus_sign}
                  alt="plus"
                  style={{
                    background: "#F2F2F2",
                    borderRadius: "3px",
                    padding: "4px",
                  }}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="description-task">
          <HeadlinesTask title="תיאור משימה" icon={description_mission} />
          <TextArea
            id="description-area"
            name="description"
            rows="5"
            cols="40"
            defaultVal={description}
          />
        </div>

        <div className="attachment-task">
          <HeadlinesTask title="קבצים" icon={attachment_icon} />
          <AttachmentsTask
            files={[{ name: "קובץ 1" }, { name: "קובץ 2" }, { name: "קובץ 3" }]}
          />
        </div>

        <div className="chat-task">
          <HeadlinesTask title="פעילות" icon={chat_logo} />
          <div className="chat-users flex column">
            {/* <object data={shimon} type="image/svg+xml" /> */}
            <TextArea
              id="chat-area"
              name="chats"
              rows="1"
              cols="30"
              placeHolder="רשום תגובה...."
            />
            <ChatsTask chats={chats} />
          </div>
        </div>
      </div>

      <div className="submit-task">
        <button onClick={() => saveTask(+projectId)}>שמור וסגור</button>
      </div>
    </div>
  );
};
export default ContentTask;
