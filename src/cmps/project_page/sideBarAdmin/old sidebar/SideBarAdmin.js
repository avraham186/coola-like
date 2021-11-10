// import React, { useState, useEffect } from "react";
// import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
// import AddNewEvent from "./NewEvent/AddNewEvent.js";
// import NewPositionForm from "./NewPositionForm.js";
// import {NewProject} from "./NewProject.js";
// import "./SidebarAdmin.scss";
// import UserPermissions from "./UserPermissions.js";

// function SideBarAdmin() {
//   const [openSideBar, setOpenSideBar] = useState(false);
//   // const [show, setshow] = useState([
//   //     {title: "addNewProject", active: false, cmp: <NewProject />},
//   //     {title: "addNewJob", active: false, cmp: <AddNewJob />}
//   // ]);




//   const [show, setshow] = useState(false)
//   const [clickNewJob, setClickNewJob] = useState(false)
//   const [newProject, setNewProject] = useState(false)
//   const [showUsers, setShowUsers] = useState(false)
  
//   const [selectedMenu, setSelectedMenu] = useState('');

// //   useEffect(() => {
// //     setshow(
// //       ...show.map((obj)=>{
// //         if(obj.title.toLowerCase() === selectedMenu.toLowerCase()){
// //             obj.active = true;
// //         }
// //         else
// //         {obj.active = false;}
// //       })
// //     )
// // }, [selectedMenu])



//   const handelsideBar = () => {
//     setOpenSideBar(!openSideBar);
//     setshow(false)
//   };


//   const addNewEvent = () => {
//     if (show === false) {
//       setshow(true);
//     } else if (show === true) {
//       setshow(false);
//     }
//     console.log("addNewEvent");
//   };
//   const addNewJob = () => {
//     if (clickNewJob === false) {
//       setClickNewJob(true);
//     } else if (clickNewJob === true) {
//       setClickNewJob(false);
//     }
//     console.log("addNewJob", show);
//   };
//   const updateEventPage = () => {
//     // props.onUploadFiles()
//     console.log("updateEventPage");
//   };
//   const addNewProj = () => {
//     if (newProject === false) {
//       setNewProject(true);
//     } else if (show === true) {
//       setNewProject(false);
//     }
//     // props.onRemove()
//     // console.log("updateJobsPage");
//   };
//   const changeUserPermissions = () => {
//     if (showUsers === false) {
//       setShowUsers(true);
//     } else if (showUsers === true) {
//       setShowUsers(false);
//     }
//     // props.onRemove()
//     console.log("changeUserPermissions");
//   };
//   return (
//     <div className='sideBar'>
//       <div className='sideBar-container'>
//       {openSideBar ? (
//           <div className='sidbar-left-arrow'>
//         <AiOutlineDoubleLeft  onClick={handelsideBar} />
//         </div>
//       ) : (
//         <div className="sidebar-admin-right-arrow">
//           <AiOutlineDoubleRight onClick={handelsideBar} />
//           <label className="arrow-icon">תפריט ניהול</label>
//         </div>
//       )}
//       </div>

//       <nav className={openSideBar ? "sidebar-admin-hidden" : "sidebar-admin"}>
//         <div className="sidebar-container">
//           <div className="content">
//             <div className="flex" onClick={addNewProj}>
//               <span> הוספת פרוייקט</span>
//             </div>
//             <div className="flex" onClick={addNewEvent}>
//               <span>הוספת ארוע</span>
//             </div>
//             <div className="flex" onClick={addNewJob}>
//               <span>הוספת משרה</span>
//             </div>

//             <div className="flex" onClick={updateEventPage}>
//               <span>עדכון דף ארועים</span>
//             </div>
//           </div>
//           <div className="flex" onClick={addNewProj}>
//             <span>עדכון דף משרות</span>
//           </div>
//           <div className="flex" onClick={changeUserPermissions}>
//             <span>שינוי הרשאות משתמשים</span>
//           </div>
//         </div>
//       </nav>
//       {/* { show.forEach((obj)=> obj.title.toString().toLowerCase() === selectedMenu.toString().toLowerCase()? obj.cmp : null)} */}
//       {show ? <AddNewEvent /> : null} 
//       {/* {show ? <NewProject /> : null}  */}
//       {clickNewJob && <NewPositionForm />}
//       {newProject && <NewProject/>}
//       {showUsers && <UserPermissions/>}

      
//     </div>
//   );
// }

// export default SideBarAdmin;
