import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { filterJobs } from "../../store/jobs";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SortingJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [_title, setTitle] = useState("");
  const [_type, setType] = useState("");
  const [_location, setLocation] = useState("");
  const [_openSearch, setOpenSearch] = useState("");
  const [filJobList, setFilJobList] = useState([]);

  const dispatch = useDispatch();

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
    const result = arr
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      )
      .filter(Boolean);
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
    setOpenSearch(openSearchValue);
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
        .filter((job) => {
          if (_openSearch !== "") {
            return job.description.includes(_openSearch);
          } else {
            return (job) => job;
          }
        })
    );
  }, [_title, _type, _location, _openSearch]);

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
          <option value="">תחום</option>
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
          <option value="">סוג משרה</option>
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
          <option value="">איזור</option>
          {uniqueLocationsArr.map((location, i) => {
            return (
              <option key={i} value={location}>
                {location}
              </option>
            );
          })}
        </select>
        <div className="open_search_div">
          <IconButton className="search_logo">
            <SearchIcon fontSize="large" />
          </IconButton>
          <input
            onChange={(event) => {
              openSearch(event);
            }}
            type="text"
            placeholder="חפש תחום/מיקום/תפקיד"
          />
        </div>
      </div>
      {/* <div className="search-job-by-text"></div> */}
    </div>
  );
};
