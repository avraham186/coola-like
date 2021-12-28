import React, { useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import EventCard from '../cmps/events_page/EventCard.jsx'
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";
import AddEvent from "../cmps/events_page/AddEvent.jsx";
import { loadEvents } from '../store/events'

const AdminEventsPage = () => {
    const { events } = useSelector((state) => state.entities.eventsModule);
    const [searchValue, setSearchValue] = useState('');
    const [editEventToggle, setEditEventToggle] = useState(false);
    const [toggleLinks, setToggleLinks] = useState(false);
    const [open, setOpen] = useState(false);

//const [events, setEvents] = useState(data) // when the server side updated a mocked jobs details you can delete this line
    // const { list: jobs } = useSelector(({ entities }) => entities.jobs) // remove comment this line when above comment is done
    const dispatch = useDispatch();
    useEffect(() => { dispatch(loadEvents()) }, [])
    
    useEffect(() => {
    if (editEventToggle) {
      setToggleLinks(true);
    }
    if (!toggleLinks) {
      setEditEventToggle((p) => !p);
    }
  }, []);


    let applyCards = useCallback(() => {
        if (searchValue) {
            return events.filter(event => event.subject.toLowerCase().includes(searchValue.toLowerCase()))
        }
        return events
    }, [searchValue])


    return (
        <section className="eventsPage full">
            <div className="admin main-layout wrapper">
                {open? 
                    <AddEvent open={open} setOpen={setOpen} />
                : null}
                    
                <div className="headlines">
                    <h2>לוח_אירועים#</h2>
                </div>

                <div className="selectors">
                    
                    <button className="addEvent-btn"
                    onClick={() => {
                      setOpen(true);
                      // setAddProjToggle();
                      // setToggleLinks(!toggleLinks);
                    }}
                    >
                    הוספת אירוע חדש
                    <BiEdit style={{ margin: "0 5px" }} />
                    </button>

                    <div className="eventsSearchBar">
                        <IconButton className="search_logo">
                            <SearchIcon />
                        </IconButton>

                        <input type="search"
                            className="searchInput"
                            placeholder="רשום מילת חיפוש"
                            onChange={e => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>

                    {/* <Checkboxs setCheckBoxes={setCheckBoxes} setSearchValue={setSearchValue} /> */}
                    
                </div>

                <div className="eventsCards">
                    {applyCards().map(event =>
                        <EventCard
                        key={event._id}
                        event={event}
                        adminIndicator={true}
                        
                        />
                        )}
                </div>

            </div>
        </section>
    )
}

export default AdminEventsPage;