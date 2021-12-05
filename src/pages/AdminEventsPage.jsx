import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EventCard from '../cmps/events_page/EventCard.jsx'
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";

const AdminEventsPage = () => {
    const { events } = useSelector((state) => state.entities.eventsModule);
    const [checkBoxes, setCheckBoxes] = useState({})
    const [searchValue, setSearchValue] = useState('');
    const [editEventToggle, setEditEventToggle] = useState(false);
    const [toggleLinks, setToggleLinks] = useState(false);
    const [open, setOpen] = useState(false);
    
    
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
        if (!Object.keys(checkBoxes).length) return events
        return events.filter(event =>
            checkBoxes[event.tag]
            && event.subject.toLowerCase().includes(searchValue.toLowerCase()))
    }, [checkBoxes, searchValue])


    return (
        <section className="eventsPage full">
            <div className="admin main-layout wrapper">
                {open? 
                <Modal
                    className="modals"
                    open={open}
                    onClose={() => setOpen(false)}>
                    <Box className="box-modal">
                        <button className="ad-event" onClick={()=> setOpen(false)}>
                            הוסף אירוע וסגור
                        </button>
                    </Box>
                </Modal> 
                : null}
                    
                <div className="headlines">
                    <h2>לוח_אירועים#</h2>
                </div>

                <div className="selectors">
                    
                    <button className="editEvent-btn"
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
                        <IconButton aria-type="search" className="search_logo">
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
                        event={event}
                        adminIndicator={true}
                        
                        />)}
                </div>

            </div>
        </section>
    )
}

export default AdminEventsPage;