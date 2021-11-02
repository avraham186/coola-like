import React from "react";
import {
  description_mission,
  chat_logo,
  attachment_icon,
} from "../../assets/images/icons";
import { AttachmentsTask, HeadlinesTask, TextArea } from "./UtilsTask";
import shimon from "../../assets/images/founders-imgs/shimon.svg";



export const ContentTask = ({
  nameTask = "שם המשימה",
  taskMode = "חדש",
  priorityTask = "עדיפות גבוהה",
  files,
  comments
}) => {
  return (
    <div className="new-task">
      <div className="new-task-title flex align-center">
        <h2>{nameTask}</h2>
        <span id="task-mode">{taskMode}</span>
        <span id="priority-task">{priorityTask}</span>
      </div>
      <div className="description-task">
        <HeadlinesTask title="תיאור משימה" icon={description_mission} />
        <TextArea id="description-area" name="description" rows="5" cols="40" />
      </div>
      <div className="chat-task">
        <HeadlinesTask title="פעילות" icon={chat_logo} />
        <div className="flex align-center">
          <object data={shimon} type="image/svg+xml" />
          <TextArea
            id="description-area"
            name="description"
            rows="1"
            cols="30"
            text="רשום תגובה...."
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
      </div>
      <div className="submit-task">
        <span>שמור וסגור</span>
      </div>
    </div>
  );
};
