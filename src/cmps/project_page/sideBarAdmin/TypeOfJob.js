import React, { useEffect, useState } from "react";
import './Categories.scss'

const typsData = [
  { name: "משרה מלאה" },
  { name: "משרה חלקית" },
  { name: "משרה זמנית" },
  { name: "התנדבות" },
  { name: "התמחות" },
  { name: "משמרות" },
];

function TypeOfJob() {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setCategories(typsData);
  }, []);

  const [checkboxes, setCheckboxes] = useState(null);

  useEffect(() => {
    setCheckboxes(document.getElementsByClassName("checkboxes")[0])

  }, [])

  const showCheckboxes = () => {
    
    // expanded? setExpanded(false) : setExpanded(true);
    if (!expanded) {
      checkboxes.style.display = "block";
      setExpanded(true)
    } else if(expanded) {
      checkboxes.style.display = "none";
      setExpanded(false)

    }
  }

  const handleChange = (e) => {
    const { checked, name } = e.target;
    // if (name === "סמן הכל") {
    //   let tempCategory = categories.map((category) => {
    //     return { ...category, isChecked: checked };
    //   });
    //   setCategories(tempCategory);
    // } else {
      let tempCategory = categories.map((category) =>
        category.name === name ? { ...category, isChecked: checked } : category
      );
      setCategories(tempCategory);
    // }
  };

  return (
    <>
      
      <div className="multiselect">
        <div className="selectBox">
          <select onClick={showCheckboxes} >
            <option>סוג משרה</option>
          </select>
            <div className="overSelect"></div>
      </div>

        <div className="checkboxes">
          {categories.map((category, index) => (
            <label key={index} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name={category.name}
                checked={category?.isChecked || false}
                onChange={handleChange}
              />
              {category.name}
            </label>
          ))}
        </div>
        </div>
    </>
  );
}

export default TypeOfJob;
