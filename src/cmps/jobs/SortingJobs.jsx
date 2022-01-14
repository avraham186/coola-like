import React, { useState, useEffect } from "react";
import { arrow_down } from "../../assets/images/icons";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { filterJobs } from "../../store/jobs";

export const SortingJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [_title, setTitle] = useState("");
  const [_type, setType] = useState("");
  const [_location, setLocation] = useState("");
  const [filJobList, setFilJobList] = useState([]);

  const dispatch = useDispatch();
  // const { list: jobs } = useSelector(({ entities }) => entities.jobs);

  async function getAllJobs() {
    const result = await axios.get(
      "https://cula-like-master.herokuapp.com/api/jobs"
    );
    setAllJobs(result.data);
  }
  useEffect(() => {
    getAllJobs();
  }, []);

  /////////// make unique arrs for selectors ////////////////

  const titlesArr = allJobs.map((jobs) => jobs.title);
  const typeArr = allJobs.map((jobs) => jobs.type);
  const locationsArr = allJobs.map((jobs) => jobs.location);

  function uniqueArr(arr) {
    const result = arr.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
    return result;
  }

  const uniqueTitlesArr = uniqueArr(titlesArr);
  const uniqueTypesArr = uniqueArr(typeArr);
  const uniqueLocationsArr = uniqueArr(locationsArr);

  //////////////////////////////////////////////////////////////////

  function titleChangeHandler(eventValue) {
    const selectedTitle = eventValue.target.value;
    setTitle(selectedTitle);
  }
  function typeChangeHandler(eventValue) {
    const selectedType = eventValue.target.value;
    setType(selectedType);
  }
  function locationChangeHandler(eventValue) {
    const selectedLocation = eventValue.target.value;
    setLocation(selectedLocation);
  }
  function openSearch(eventValue) {
    const openSearchValue = eventValue.target.value;
  }

  useEffect(() => {
    setFilJobList(
      allJobs
        .filter((job) => {
          if (_title !== "") {
            return job.title === _title;
          } else {
            return (job) => job;
          }
        })
        .filter((job) => {
          if (_type !== "") {
            return job.type === _type;
          } else {
            return (job) => job;
          }
        })
        .filter((job) => {
          if (_location !== "") {
            return job.location === _location;
          } else {
            return (job) => job;
          }
        })
    );
  }, [_title, _type, _location]);

  useEffect(() => {
    if (filJobList.length > 0) {
      dispatch(filterJobs(filJobList));
    } else {
      dispatch(filterJobs([{}]));
    }
  }, [filJobList]);

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
        <input
          onChange={(event) => {
            openSearch(event);
          }}
          type="text"
          placeholder="חפש תחום/מיקום/תפקיד"
        />
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
