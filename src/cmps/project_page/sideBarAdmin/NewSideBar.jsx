import React, { useEffect, useState } from "react";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "../../../assets/cmps/project-page/_newSidebar.scss";
// import "./newSidebar.scss";
import NewPositionForm from "./new_position/NewPositionForm.jsx";
import AddNewEvent from "./new_event/AddNewEvent.jsx";
import AddNewProject from "./AddNewProject.jsx";
import UserPermissions from "./UserPermissions.jsx";

function NewSideBar({ addProjToggle, setAddProjToggle, setListOrCompleted }) {
  const [open, setOpen] = useState(true);

  const linkes = [
    "הוספת פרוייקט",
    "הוספת אירוע",
    "הוספת משרה",
    "עדכון דף ארועים",
    "עדכון דף משרות",
    "שינוי הרשאות משתמשים",
    "ארכיון"
  ];
  const [tab, setTab] = useState("");

  const [toggleUserPermissions, setToggleUserPermissions] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);

  // useEffect(() => {
  //     if (addProjToggle) {
  //         setToggleLinks(true)
  //     }
  //     if (!toggleLinks) {
  //        setAddProjToggle((p) => !p)

  //     }
  //  },[toggleLinks])

  const handelsideBar = () => {
    setOpen(!open);
    setTab("");
  };
  const listOrCompletedCheck = (link) => {
    if (link === "ארכיון") return setListOrCompleted(p => {
      return !p
    })
  }
  return (
    <>
      <div className="sideBar">
        {open ? (
          <div className="sidbar-left-arrow">
            <AiOutlineDoubleLeft onClick={handelsideBar} />
          </div>
        ) : (
          <div className="sidebar-admin-right-arrow">
            <div className="menu-toggle">
              <AiOutlineDoubleRight onClick={handelsideBar} />
              <label className="arrow-icon">תפריט ניהול</label>
            </div>
            <ul className="sidebarList">
              {linkes.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="row"
                    // id={window.location.pathname === link ? 'active' : ""}
                    onClick={() => {
                      setTab(link);
                      setToggleLinks(!toggleLinks);
                      listOrCompletedCheck(link)
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

        <div>
          {tab === "הוספת משרה" && (
            <NewPositionForm
              toggleLinks={toggleLinks}
              setToggleLinks={setToggleLinks}
            />
          )}
        </div>
        <div>
          {tab === "הוספת אירוע" && (
            <AddNewEvent
              toggleLinks={toggleLinks}
              setToggleLinks={setToggleLinks}
            />
          )}
        </div>
        <div>
          {tab === "הוספת פרוייקט" && (
            <AddNewProject
              toggleLinks={toggleLinks}
              setToggleLinks={setToggleLinks}
            />
          )}
        </div>
        <div>
          {tab === "שינוי הרשאות משתמשים" && (
            <UserPermissions
              toggleLinks={toggleLinks}
              setToggleLinks={setToggleLinks}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default NewSideBar;
