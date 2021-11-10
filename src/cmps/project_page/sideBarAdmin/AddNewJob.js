import React, { useState, useEffect } from "react";
import "./AddNewJob.scss";
import Categories from "./Ctegories.js";

function AddNewJob({ handleChange }) {
  return (
    <div className="adding-job-container">
      <form action="adding-job">

        <label className='event-title'>
          כותרת הארוע
          <br />
          <input type="text" />
        </label>

        <label className="data-and-time">
          <br />
          מועד הארוע
          <br />
          <div className="data-and-time-input">
            <input type="date" placeholder="dd/mm/yyyy" />
            <input type="time" placeholder="00:00" />
          </div>
        </label>

        <label>
          תחום
          <br />
          <Categories />
          {/* <option value="1"><input type="checkbox" checked={} /></option>
            <option value="2">Test 2</option> */}
        </label>
        <br />

        <label className='Description'>
          תיאור
          <br />
          <textarea name="" id="" cols="40" rows="10"></textarea>
        </label>
        <br />

        <label className='add-file'>
          העלאת גרפיקה
          <br />
          <input type="file" name="" id="" />
        </label>

        <label className='link-To-Linkedin'>
          קישור לעמוד הלינקדאין של המרצה
          <br />
          <input type="text" placeholder="www.linkedin//shaharpolak" />
        </label>
        <br />

        <button className="save-btn">שמור וסגור</button>
      </form>
    </div>
  );
}

export default AddNewJob;
