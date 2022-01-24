import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EventCard from "../cmps/events_page/EventCard.jsx";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";
import AddEvent from "../cmps/events_page/AddEvent.jsx";
import { loadEvents } from "../store/events";
import AddNewEvent from "../cmps/project_page/sideBarAdmin/new_event/AddNewEvent";

const AdminEventsPage = () => {
  const { events } = useSelector((state) => state.entities);
  //state of events object. events.list is the events cards
  const [editEventToggle, setEditEventToggle] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [open, setOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(events.list)
    console.log(events.loading)
  },[events.loading])

  // useEffect(()=> dispatch(loadEvents()),[] ) // invokes function to update events state from user. State updats after call is finished

  let applyCards = useCallback(() => {
    if (searchValue) {
      return events.list.filter((event) =>
        event.subject.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return events.list;
  }, [searchValue]);

  return (
    <section className="eventsPage full">
      <div className="admin main-layout wrapper">
        {open ? (
          // <AddEvent open={open} setOpen={setOpen} />
          <AddNewEvent
            open={open}
            setOpen={setOpen}
            toggleLinks={toggleLinks}
            setToggleLinks={setToggleLinks}
          />
        ) : null}

        <div className="headlines">
          <h2>לוח_אירועים#</h2>
        </div>

        <div className="selectors">
          <button
            className="addEvent-btn"
            onClick={() => {
              setOpen(true);
              //   setAddProjToggle();
              setToggleLinks(!toggleLinks);
            }}
          >
            הוספת אירוע חדש
            <BiEdit style={{ margin: "0 5px" }} />
          </button>

          <div className="eventsSearchBar">
            <IconButton className="search_logo">
              <SearchIcon />
            </IconButton>

            <input
              type="search"
              className="searchInput"
              placeholder="רשום מילת חיפוש"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>

          {/* <Checkboxs setCheckBoxes={setCheckBoxes} setSearchValue={setSearchValue} /> */}
        </div>

        <div className="eventsCards">
          {
          events.loading?
          <span>Loading...</span>
          :
          applyCards().map((event) => (
            <EventCard key={event._id} event={event} adminIndicator={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminEventsPage;
