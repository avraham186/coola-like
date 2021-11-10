import React, { useState } from "react";
import { sidebarData } from "./SideBarData.js";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./newSidebar.scss";
import NewPositionForm from "./NewPositionForm.js";
import AddNewEvent from "./AddNewEvent.js";
import { NewProject } from "./NewProject.js";

function NewSideBar() {
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);

  const linkes = ["הוספת פרוייקט", "הוספת ארוע", "הוספת משרה"];
  const [tab, setTab] = useState("");

  const handelsideBar = () => {
    setOpen(!open);
    setshow(false);
  };

  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <div className="sideBar-container">
          {open ? (
            <div className="sidbar-left-arrow">
              <AiOutlineDoubleLeft onClick={handelsideBar} />
            </div>
          ) : (
            <div className="sidebar-admin-right-arrow">
              <AiOutlineDoubleRight onClick={handelsideBar} />
              <label className="arrow-icon">תפריט ניהול</label>
            </div>
          )}
        </div>
        {linkes.map((link, index) => {
          return (
            <li
              key={index}
              className="row"
              onClick={() => {
                setTab(link)
              }}
            >
              {link}
            </li>
          );
        })}
      </ul>

      <div>{tab === "הוספת משרה" && <NewPositionForm />}</div>
      <div>{tab === "הוספת ארוע" && <AddNewEvent />}</div>
      <div>{tab === "הוספת פרוייקט" && <NewProject />}</div>

    </div>
  );
}

export default NewSideBar;
