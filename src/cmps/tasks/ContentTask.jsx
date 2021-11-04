import React from "react";
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

export const ContentTask = ({
  nameTask = "שם המשימה",
  taskMode = "חדש",
  priorityTask = "עדיפות גבוהה",
  dueDate = "15:00, יום חמישי 31/10/21",
  files,
  comments,
}) => {
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
          <h4 style={{ margin: "10px" }}>{dueDate}</h4>
        </div>

        <div className="labels-assigned flex">
          <div className="assigned-task">
            <HeadlinesTask title="מוקצים למשימה" />
            <AssignedTask
              areAssigned={[
                { name: "adi", img: adi },
                { name: "iris", img: iris },
                { name: "shimon", img: shimon },
                { name: "stav", img: stav },
              ]}
            />
          </div>
          <div className="labels">
            <HeadlinesTask title="תווית" />
            <Labels
              labels={[
                { name: "קורות חיים", color: "#b3ffec" },
                { name: "כלבים", color: "#ffb3cc" },
                { name: "כלבים", color: "#ffb3cc" },
                { name: "כלבים", color: "#ffb3cc" },
                { name: "כלבים", color: "#ffb3cc" },
                { name: "כלבים", color: "#ffb3cc" },
              ]}
            />
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
      </div>

      <div className="submit-task">
        <span>שמור וסגור</span>
      </div>
    </div>
  );
};
