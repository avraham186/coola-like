import React, { useState, useEffect } from "react";
import { chat_logo, description_mission } from "../../assets/images/icons";
import {
  AssignedTask,
  HeadlinesTask,
  ModeChoosen,
  modes,
  PriorityChoosen,
  TextArea,
} from "./UtilsTask.js";
import "../../assets/cmps/tasks-page/_new-task-modals.scss";
import { Input, TextField } from "@mui/material";
import taskDAL from "../../adapters/TMS/tasksDAL";

const ContentTaskCopy = ({
  setToggleMode,
  projectId,
  taskDate,
  peopleAssigned,
  updateTask,
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
    // console.log(taskDate, peopleAssigned);
    setNewTask({ ...newTask, date: taskDate, team: peopleAssigned });
  }, [taskDate, peopleAssigned]);

  useEffect(() => {
    // console.log(updateTask);
    if (updateTask) {
      let task = {
        title: updateTask.title,
        description: updateTask.description,
        taskPriority: updateTask.taskPriority,
        taskStatus: updateTask.taskStatus,
        date: { endDate: updateTask.endDate },
        team: updateTask.team,
        label: updateTask.lable,
        categories: updateTask.categories,
        image: updateTask.image,
        adminsTask: updateTask.adminsTask,
      };
      setNewTask(task);
    }
  }, []);

  const addNewTask = async () => {
    const taskToSend = {
      projectId: parseInt(projectId),
      task: newTask,
    };
    let resp = await taskDAL.createTask(taskToSend);
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
              placeholder={newTask.title !== "" ? newTask.title : "שם המשימה"}
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
            value={newTask.description}
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
