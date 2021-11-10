import React, { useContext } from "react";
import {
  description_mission,
  chat_logo,
  attachment_icon,
} from "../../assets/images/icons";

import {
  AssignedTask,
  AttachmentsTask,
  HeadlinesTask,
  Labels,
  TextArea,
} from "./UtilsTask";
import { adi, stav, shimon, iris } from "../../assets/images/founders-imgs";
import { TaskContext } from "../../Context/TaskContext";

// [
//   { name: "קורות חיים", color: "#b3ffec" },
//   { name: "כלבים", color: "#ffb3cc" },
//   { name: "כלבים", color: "#ffb3cc" },
//   { name: "כלבים", color: "#ffb3cc" },
//   { name: "כלבים", color: "#ffb3cc" },
//   { name: "כלבים", color: "#ffb3cc" },
// ]

export const ContentTask = ({ nameTask, taskMode, priorityTask }) => {
  const { taskContent: { label, pplAssigned, file, date,description,chats }, saveTask } = useContext(TaskContext);
  return (
    <div className="new-task">
      <div className="new-task-container">
        <div className="new-task-title flex align-center">
          <h2>{nameTask}</h2>
          <span id="task-mode">{taskMode}</span>
          <span id="priority-task">{priorityTask}</span>
        </div>

        <div className="due-date-task flex align-center">
          <input type="checkbox" />
          <h4 className="flex column"><span>תאריך התחלה:</span> {date.startDate}</h4>
          <h4 className="flex column"><span>שעה: </span>{date.time}</h4>
          <h4 className="flex column"><span>תאריך סוף: </span>{date.endDate}</h4>
          <h4 className="flex column"><span>תזכורת: </span>{date.reminder}</h4>
        </div>

        <div className="labels-assigned flex">
          <div className="assigned-task">
            <HeadlinesTask title="מוקצים למשימה" />
            <AssignedTask areAssigned={pplAssigned} />
          </div>
          <div className="labels">
            <HeadlinesTask title="תווית" />
            <Labels colorLabel={label} />
          </div>
        </div>

        <div className="description-task">
          <HeadlinesTask title="תיאור משימה" icon={description_mission} />
          <TextArea
            id="description-area"
            name="description"
            rows="5"
            cols="40"
          />
        </div>

        <div className="attachment-task">
          <HeadlinesTask title="קבצים" icon={attachment_icon} />
          <AttachmentsTask
            files={[
              { name: "שם קובץ" },
              { name: "שם קובץ" },
              { name: "שם קובץ" },
            ]}
          />
        </div>

        <div className="chat-task">
          <HeadlinesTask title="פעילות" icon={chat_logo} />
          <div className="flex align-center">
            {/* <object data={shimon} type="image/svg+xml" /> */}
            <TextArea
              id="chat-area"
              name="chat"
              rows="1"
              cols="30"
              text="רשום תגובה...."
            />
          </div>
        </div>
      </div>

      <div className="submit-task">
        <span onClick={saveTask}>שמור וסגור</span>
      </div>
    </div>
  );
};
