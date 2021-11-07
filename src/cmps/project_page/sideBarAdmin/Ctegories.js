import React, { useEffect, useState } from "react";

const categoriesData = [
  { name: "בדיקת תוכנה" },
  { name: "אבטחת מידע וסייבר" },
  { name: "פיתוח תוכנה" },
  { name: "הנדסת מערכות" },
  { name: "UX/UI" },
  { name: "חומרה" },
  { name: "סמן הכל" },
];

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleChange = (e) => {
    const { checked, name } = e.target;
    if (name === "סמן הכל") {
      let tempCategory = categories.map((category) => {
        return { ...category, isChecked: checked };
      });
      setCategories(tempCategory);
    } else {
      let tempCategory = categories.map((category) =>
        category.name === name ? { ...category, isChecked: checked } : category
      );
      setCategories(tempCategory);
    }
  };

  return (
    <>
      <form className="form w-100">
        <div className="selectBox">
          <select>
            <option>תחום</option>
          </select>
          <div>
            <div class="overSelect"></div>
          </div>
        </div>
        <div id="checkboxes">
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
      </form>
    </>
  );
}

export default Categories;
