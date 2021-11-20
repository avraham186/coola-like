// import React, { useEffect, useState } from "react";

// const permits = [
//   "הרשאת מתנדב",
//   "הרשאת מהל משימה",
//   "הרשאת אדמין",
//   "הסרת הרשאות"
// ];


// function DropdownPermits() {
//   const [permissions, setPermissions] = useState([]);
//   const [expanded, setExpanded] = useState(false);
//   // const loginForm = (e)=>{
//   //   e.preventDefault();
//   //   const formInfo = new FormData(e.target);
//   //   console.log(formInfo);
//   // }

//   useEffect(() => {
//     setPermissions(permits);
//   }, []);

// //   const [checkboxes, setCheckboxes] = useState(null);

// //   useEffect(() => {
// //     setCheckboxes(document.getElementsByClassName("checkboxes")[0]);
// //   }, []);

// //   const showCheckboxes = () => {
// //     // expanded? setExpanded(false) : setExpanded(true);
// //     if (!expanded) {
// //       checkboxes.style.display = "block";
// //       setExpanded(true);
// //     } else if (expanded) {
// //       checkboxes.style.display = "none";
// //       setExpanded(false);
// //     }
// //   };

// const isChoosen = (category) => {
//   return userClicked.some((u) => u.id === user.id);
// };

//   const handleChange = (e) => {
//     const { checked, name } = e.target;
//     console.log(checked,name);
//     if ("הסרת הרשאות") {
//       let tempCategory = permissions.map((category) => {
//         return { ...category, isChecked: checked };
//       });
//       setPermissions(tempCategory);
//     } else {
//       let tempCategory = permissions.map((category) =>
//         category === name ? { ...category, isChecked: checked } : category
//       );
//       setPermissions(tempCategory);
//     //   setFormData((p) => {
//     //     return {
//     //       ...p,
//     //       Categories: checked 
//     //         ? [...p.Categories,name]
//     //         : p.Categories.filter((v) => v !== name)
//     //     };
//     //   });
//     }
//   };

//   return (
//     <>
//       <div className="multiselect">
//         <div className="selectBox">
//           <select >
//             {/* <option>תחום</option> */}
//           </select>
//           <div className="overSelect"></div>
//         </div>

//         <div className="checkboxes">
//           {permissions.map((category, index) => (
//             <label key={index} className="form-check">
//               {/* <input
//                 type="checkbox"
//                 className="form-check-input"
//                 name={category}
//                 checked={category?.isChecked || false}
//                 onChange={handleChange}
//                 value={category}
//               /> */}
//               {category}
//               {isChoosen(ctegory) && (
//                   <img src={v_sign} alt="v-sign" style={{ margin: "20px" }} />
                  
//                 )}
//             </label>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default DropdownPermits;
