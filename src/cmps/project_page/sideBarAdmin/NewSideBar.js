import React, { useState } from "react";
import { sidebarData } from "./SideBarData.js";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './newSidebar.scss'

function NewSideBar() {
  const [open, setOpen] = useState(false);
  const [show, setshow] = useState(false);

  const handelsideBar = () => {
    setOpen(!open);
    setshow(false);
  };

  return (
    <div className="sidebar">
      <ul className='sidebarList'>
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
        {sidebarData.map((val, key) => {
          return (
          <li
            key={key}
            className='row'
            onClick={() => {
              window.location.pathname = val.link;
            }}
          >
            <div>{val.title}</div>
          </li>
          )
        })}
      </ul>
    </div>
  );
}

export default NewSideBar;
