import React, { useEffect, useState } from "react";
// import './Categories.scss'

const areaData = [
  { name: "מרכז" },
  { name: "צפון" },
  { name: "דרום" },
  { name: "שפלה" },
  { name: "עבודה מהבית" },
];

function AreaSerch({setFormData}) {
  const [areas, setAreas] = useState([]);
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setAreas(areaData);
  }, []);

  const [checkboxes, setCheckboxes] = useState(null);

  useEffect(() => {
    setCheckboxes(document.getElementsByClassName("areaSearch")[0])
  }, [])

  const showCheckboxes = () => {
    if (!expanded) {
      checkboxes.style.display = "block";
      setExpanded(true)
    } else if(expanded) {
      checkboxes.style.display = "none";
      setExpanded(false)
    }
  }

  const areaHandleChange = (e) => {
    const { checked, name } = e.target;
   
      let tempCategory = areas.map((category) =>
        category.name === name ? { ...category, isChecked: checked } : category
      );
      setAreas(tempCategory);
      setFormData((p) => {
        return {
          ...p,
          AreaSearch: checked 
            ? [...p.AreaSearch,name]
            : p.AreaSearch.filter((v) => v !== name)
        };
      });

  };

  return (
    <>
      
      <div className="multiselect">
        <div className="selectBox">
          <select onClick={showCheckboxes} >
            <option>אזור</option>
          </select>
            <div className="overSelect"></div>
      </div>

        <div className="checkboxes areaSearch">
          {areas.map((category, index) => (
            <label key={index} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name={category.name}
                checked={category?.isChecked || false}
                onChange={areaHandleChange}
              />
              {category.name}
            </label>
          ))}
        </div>
        </div>
    </>
  );
}

export default AreaSerch;
