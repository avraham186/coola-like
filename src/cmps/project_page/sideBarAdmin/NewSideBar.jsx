// import React, {useEffect, useState} from "react";

// import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
// import "./newSidebar.scss";
// import NewPositionForm from "./new_position/NewPositionForm.jsx";
// import AddNewEvent from "./new_event/AddNewEvent.jsx";
// import AddNewProject from "./AddNewProject.jsx";
// import UserPermissions from "./UserPermissions.jsx";

// function NewSideBar({addProjToggle, setAddProjToggle}) {
//     const [open, setOpen] = useState(true);

//     const linkes = [
//         "הוספת פרוייקט",
//         "הוספת ארוע",
//         "הוספת משרה",
//         "עדכון דף ארועים",
//         "עדכון דף משרות",
//         "שינוי הרשאות משתמשים",
//     ];
//     const [tab, setTab] = useState("");

//     const [toggleUserPermissions, setToggleUserPermissions] = useState(false);
//     const [toggleLinks, setToggleLinks] = useState(false)

//     useEffect(() => {
//         if (addProjToggle) {
//             setToggleLinks(true)
//         }
//         if (!toggleLinks) {
//             setAddProjToggle((p) => !p)
//         }
//     }, [])

//     const handelsideBar = () => {
//         setOpen(!open);
//         setTab("");

//     };

//     return (
//     <>
//         {/* <div className='main-sidebar'>*/}
//             <div className="sideBar">
//                 {/* <div className="sideBar-container"> */}
//                     {/* <div >  */}

//                     {open ? (
//                         <div className="sidbar-left-arrow">
//                             <AiOutlineDoubleLeft onClick={handelsideBar}/>
//                         </div>
//                     ) : (
//                         <div className="sidebar-admin-right-arrow">
//                             <div className='menu-toggle'>
//                                 <AiOutlineDoubleRight onClick={handelsideBar}/>
//                                 <label className="arrow-icon">תפריט ניהול</label>
//                             </div>
//                             <ul className="sidebarList">
//                                 {linkes.map((link, index) => {
//                                     return (
//                                         <li
//                                             key={index}
//                                             className="row"
//                                             id={window.location.pathname === link ? 'active' : ""}
//                                             onClick={() => {
//                                                 setTab(link);
//                                                 setToggleLinks(!toggleLinks)
//                                             }}
//                                         >
//                                             {link}
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     )}
//                     {/* </div> */}

//                     <div>{tab === "הוספת משרה" &&
//                     <NewPositionForm toggleLinks={toggleLinks} setToggleLinks={setToggleLinks}/>}</div>
//                     <div>{tab === "הוספת ארוע" &&
//                     <AddNewEvent toggleLinks={toggleLinks} setToggleLinks={setToggleLinks}/>}</div>
//                     <div>{tab === "הוספת פרוייקט" &&
//                     <AddNewProject toggleLinks={toggleLinks} setToggleLinks={setToggleLinks}/>}</div>
//                     <div>
//                         {tab === "שינוי הרשאות משתמשים" &&
//                         <UserPermissions toggleLinks={toggleLinks} setToggleLinks={setToggleLinks}/>}</div>
//                 </div>
//            {/* </div> */}
//         {/*  </div> */}
//     </>
//     );
// }

// export default NewSideBar;

// import React, { useEffect, useState } from "react";
// // import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// // import "./newSidebar.scss";
// import NewPositionForm from "./new_position/NewPositionForm.jsx";
// import AddNewEvent from "./new_event/AddNewEvent.jsx";
// import AddNewProject from "./AddNewProject.jsx";
// import UserPermissions from "./UserPermissions.jsx";
// // import {makeStyles} from "@mui/material-ui/core"

// const drawerWidth = 240;

// export default function PermanentDrawerRight({
//   addProjToggle,
//   setAddProjToggle,
// }) {
//   const [open, setOpen] = useState(true);
//   const linkes = [
//     "הוספת פרוייקט",
//     "הוספת ארוע",
//     "הוספת משרה",
//     "עדכון דף ארועים",
//     "עדכון דף משרות",
//     "שינוי הרשאות משתמשים",
//   ];
//   const [listItem, setListItem] = useState("");

//   const [toggleUserPermissions, setToggleUserPermissions] = useState(false);
//   const [toggleLinks, setToggleLinks] = useState(false);

//   useEffect(() => {
//     if (addProjToggle) {
//       setToggleLinks(true);
//     }
//     if (!toggleLinks) {
//       setAddProjToggle((p) => !p);
//     }
//   }, []);

//   const handelsideBar = () => {
//     setOpen(!open);
//     setListItem("");
//   };

//   // const useStyle = makeStyles((theme) => {
//   //     return{
//   //         listItem: {
//   //             fontFamily: "Rubik"
//   //         }
//   //     }
//   // })

//   return (
//     <div>
//       <Box sx={{ display: "flex" }}>
//         <Drawer
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//           variant="permanent"
//           anchor="right"
//         >
//           <Toolbar />

//           <List>
//             {linkes.map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemText
//                 // className={classes.listItem}
//                   primary={text}
//                   onClick={() => {
//                     setListItem(text);
//                     setToggleLinks(!toggleLinks);
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </Box>

//       <div>
//         {listItem === "הוספת משרה" && (
//           <NewPositionForm
//             toggleLinks={toggleLinks}
//             setToggleLinks={setToggleLinks}
//           />
//         )}
//       </div>
//       <div>
//         {listItem === "הוספת ארוע" && (
//           <AddNewEvent
//             toggleLinks={toggleLinks}
//             setToggleLinks={setToggleLinks}
//           />
//         )}
//       </div>
//       <div>
//         {listItem === "הוספת פרוייקט" && (
//           <AddNewProject
//             toggleLinks={toggleLinks}
//             setToggleLinks={setToggleLinks}
//           />
//         )}
//       </div>
//       <div>
//         {listItem === "שינוי הרשאות משתמשים" && (
//           <UserPermissions
//             toggleLinks={toggleLinks}
//             setToggleLinks={setToggleLinks}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import "./newSidebar.scss";
import NewPositionForm from "./new_position/NewPositionForm.jsx";
import AddNewEvent from "./new_event/AddNewEvent.jsx";
import AddNewProject from "./AddNewProject.jsx";
import UserPermissions from "./UserPermissions.jsx";

export default function TemporaryDrawer({
  addProjToggle,
  setAddProjToggle,
   }) {
  const [state, setState] = React.useState({
    right: false
  });

  const [open, setOpen] = useState(true);
  const links = [
    "הוספת פרוייקט",
    "הוספת ארוע",
    "הוספת משרה",
    "עדכון דף ארועים",
    "עדכון דף משרות",
    "שינוי הרשאות משתמשים",
  ];
  const [listItem, setListItem] = useState("");

  const [toggleUserPermissions, setToggleUserPermissions] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);

  useEffect(() => {
    if (addProjToggle) {
      setToggleLinks(true);
    }
    if (!toggleLinks) {
      setAddProjToggle((p) => !p);
    }
  }, []);

  const handelsideBar = () => {
    setOpen(!open);
    setListItem("");
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["תפריט ניהול"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={"right"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      <div>
         {listItem === "הוספת משרה" && (
          <NewPositionForm
             toggleLinks={toggleLinks}
             setToggleLinks={setToggleLinks}
          />
        )}
      </div>
       <div>         {listItem === "הוספת ארוע" && (
          <AddNewEvent
            toggleLinks={toggleLinks}
           setToggleLinks={setToggleLinks}
          />
        )}
      </div>
      <div>
        {listItem === "הוספת פרוייקט" && (
          <AddNewProject
            toggleLinks={toggleLinks}
            setToggleLinks={setToggleLinks}
           />
         )}
       </div>
       <div>         {listItem === "שינוי הרשאות משתמשים" && (
           <UserPermissions
            toggleLinks={toggleLinks}
  setToggleLinks={setToggleLinks}
/>
 )}
 </div>
    </div>
  );
}

