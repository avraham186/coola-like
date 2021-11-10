import React, { useState } from "react";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import "./newSidebar.scss";
import NewPositionForm from "./NewPosition/NewPositionForm";
import AddNewEvent from "./NewEvent/AddNewEvent.js";
import { NewProject } from "./NewProject.js";
import UserPermissions from "./UserPermissions.js";

function NewSideBar() {
  const [open, setOpen] = useState(false);

  const linkes = [
    "הוספת פרוייקט",
    "הוספת ארוע",
    "הוספת משרה",
    "עדכון דף ארועים",
    "עדכון דף משרות",
    "שינוי הרשאות משתמשים",
  ];
  const [tab, setTab] = useState("");

  const handelsideBar = () => {
    setOpen(!open);
    setTab("");
  };

  return (
    <div className="sideBar">
      <div className="sideBar-container">
        {/* <div >  */}

        {open ? (
          <div className="sidbar-left-arrow">
            <AiOutlineDoubleLeft onClick={handelsideBar} />
          </div>
        ) : (
          <div className="sidebar-admin-right-arrow">
            <AiOutlineDoubleRight onClick={handelsideBar} />
            <label className="arrow-icon">תפריט ניהול</label>

            <ul className="sidebarList">
              {linkes.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="row"
                    onClick={() => {
                      setTab(link);
                    }}
                  >
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {/* </div> */}

        <div>{tab === "הוספת משרה" && <NewPositionForm />}</div>
        <div>{tab === "הוספת ארוע" && <AddNewEvent />}</div>
        <div>{tab === "הוספת פרוייקט" && <NewProject />}</div>
        <div>{tab === "עדכון דף ארועים" && <NewProject />}</div>
        <div>{tab === "עדכון דף משרות" && <NewProject />}</div>
        <div>{tab === "שינוי הרשאות משתמשים" && <UserPermissions />}</div>
      </div>
    </div>
  );
}

export default NewSideBar;
