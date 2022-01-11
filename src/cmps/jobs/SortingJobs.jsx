import React from "react";
import { arrow_down } from "../../assets/images/icons";
import { useSelector } from "react-redux";

export const SortingJobs = () => {
  const { list: jobs } = useSelector(({ entities }) => entities.jobs);
  const titlesArr = jobs.map((jobs) => jobs.title);
  const typeArr = jobs.map((jobs) => jobs.type);
  const locationsArr = jobs.map((jobs) => jobs.location);
  const uniqueTitlesArr = titlesArr.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  const uniqueTypesArr = typeArr.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  const uniqueLocationsArr = locationsArr.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  function titleChangeHandler(eventValue) {
    const selectedTitle = eventValue.target.value;
  }
  function typeChangeHandler(eventValue) {
    const selectedType = eventValue.target.value;
  }
  function locationChangeHandler(eventValue) {
    const selectedLocation = eventValue.target.value;
  }
  return (
    <div className="sorting-jobs flex ">
      <div className="search-job-by-buttons">
        <select
          onChange={(event) => {
            titleChangeHandler(event);
          }}
        >
          <option value="">Title</option>
          {uniqueTitlesArr.map((title, i) => {
            return (
              <option key={i} value={title}>
                {title}
              </option>
            );
          })}
        </select>
        <select
          onChange={(event) => {
            typeChangeHandler(event);
          }}
        >
          <option value="">Type</option>
          {uniqueTypesArr.map((type, i) => {
            return (
              <option key={i} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <select
          onChange={(event) => {
            locationChangeHandler(event);
          }}
        >
          <option value="">Location</option>
          {uniqueLocationsArr.map((location, i) => {
            return (
              <option key={i} value={location}>
                {location}
              </option>
            );
          })}
        </select>
      </div>
      <div className="search-job-by-text">
        <input type="text" placeholder="חפש תחום/מיקום/תפקיד" />
      </div>
    </div>
  );
};

/*
category: "FULLSTACK"
date: (5) [2021, 10, 31, 0, 0]
description: "asdad"
experience: 0
id: 10
location: "tel aviv"
title: "FullStack"
type: "Full Time"
*/

/*
 <span id="by-interest">
                    <img src={arrow_down} alt="arrow_down" />
                    תחום</span>
                <span id="by-job-type">
                    <img src={arrow_down} alt="arrow_down" />
                    סוג משרה</span>
                <span id="by-area">
                    <img src={arrow_down} alt="arrow_down" />
                    איזור</span>
*/
