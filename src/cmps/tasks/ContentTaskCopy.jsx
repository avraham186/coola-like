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
import { Input, MenuItem, TextField } from "@mui/material";
import taskDAL from "../../adapters/TMS/tasksDAL";

const ContentTaskCopy = ({
  setToggleMode,
  projectId,
  taskDate,
  peopleAssigned,
}) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    taskPriority: "עדיפות גבוהה",
    taskStatus: "חדש",
    date: {},
    team: [],
    label: "",
    categories: { id: 7, category: "FULLSTACK" },
    image: "",
    // files: [],
    // chats: "",
    adminsTask: [],
  });
  const [isClicked, setIsClicked] = useState({
    taskPriority: false,
    taskStatus: false,
    title: false,
  });

  useEffect(() => {
    console.log(taskDate, peopleAssigned);
    setNewTask({ ...newTask, date: taskDate, team: peopleAssigned });
  }, [taskDate, peopleAssigned]);

  const addNewTask = async () => {
    console.log(projectId);
    const taskToSend = {
      projectId: parseInt(projectId),
      task: newTask,
    };
    console.log(taskToSend);
    let resp = await taskDAL.createTask(taskToSend);
    console.log(resp);
  };

  const handleChangeStatus = (e) => {
    const nameClicked = e.target.getAttribute("name");
    const value = e.target.getAttribute("value");
    setNewTask({ ...newTask, taskStatus: value });
    setIsClicked((prev) => ({ ...prev, [nameClicked]: !prev[nameClicked] }));
  };

  const handleChangePriority = (e) => {
    const nameClicked = e.target.getAttribute("name");
    const value = e.target.getAttribute("value");
    setNewTask({ ...newTask, taskPriority: value });
    setIsClicked((prev) => ({ ...prev, [nameClicked]: !prev[nameClicked] }));
  };

  return (
    <div className="new-task flex column">
      <div className="new-task-container">
        <div className="new-task-title flex align-center">
          <div className="title">
            <Input
              type="text"
              placeholder="שם המשימה"
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
          </div>

          <div className="task-mode flex column">
            {!isClicked.taskStatus ? (
              <span
                onClick={() =>
                  setIsClicked((p) => ({ ...p, taskStatus: !p.taskStatus }))
                }
                id={`task-mode${modes.indexOf(newTask.taskStatus) + 1}`}
              >
                {newTask.taskStatus}
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
                {newTask.taskPriority}
              </span>
            ) : (
              <PriorityChoosen handleChangeStatus={handleChangePriority} />
            )}
          </div>
        </div>
        {newTask.date.endDate ? (
          <div className="due-date-task flex align-center">
            <h4 className="flex column">
              <HeadlinesTask title="תאריך יעד" />
              {newTask.date.endDate}
            </h4>
          </div>
        ) : (
          <></>
        )}
        <br />
        {newTask.team.length > 0 ? (
          <div className="assigned-task">
            <HeadlinesTask title="מוקצים למשימה" />
            <AssignedTask areAssigned={newTask.team}></AssignedTask>
          </div>
        ) : (
          <></>
        )}
        <br />
        <div className="description-task">
          <HeadlinesTask title="תיאור משימה" icon={description_mission} />
          <TextField
            style={{ border: "none" }}
            multiline
            rows="5"
            cols="40"
            defaultVal={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
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
            {/* <ChatsTask chats={chats} /> */}
          </div>
        </div>
      </div>

      <div className="submit-task">
        <button onClick={() => addNewTask()}>שמור וסגור</button>
      </div>
    </div>
  );
};
export default ContentTaskCopy;
