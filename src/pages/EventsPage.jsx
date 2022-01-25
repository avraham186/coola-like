import React, { useCallback,useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkboxs from '../cmps/events_page/Checkboxs.jsx'
import EventCard from '../cmps/events_page/EventCard.jsx'
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Modal } from "@mui/material";
import { loadEvents } from '../store/events.js';

const EventsPage = () => {

    const [checkBoxes, setCheckBoxes] = useState({})
    const [searchValue, setSearchValue] = useState('');
    
    const { events } = useSelector((state) => state.entities)
    //state of events object. events.list is the events cards
    console.log(events)
    const dispatch = useDispatch()

    // uncomment this to set the events from server
    // useEffect(() => { dispatch(loadEvents()) }, []) // invokes function to fetch events from user. State updats after call is finished
    
    const [open, setOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })


    let applyCards = useCallback(() => {
        if (searchValue) {
            return events.list.filter(event => event.subject.toLowerCase().includes(searchValue.toLowerCase()))
        }
        if (!Object.keys(checkBoxes).length) return events.list
        return events.list.filter(event =>
            checkBoxes[event.tag]
            && event.subject.toLowerCase().includes(searchValue.toLowerCase()))
    }, [checkBoxes, searchValue])


    return (
        <div className="eventsUser full">
        <section className="eventsPage full">
            <div className="main-layout wrapper">
                
                <div>
                   <Modal
                        className="modals"
                        open={open}
                        onClose={() => setToggleMode(p => ({ ...p, file: !p.file }))}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="box-modal">
                            <button className="save-modal-button"
                                onClick={() => setToggleMode(p => ({ ...p, file: !p.file }))}>
                                שמור
                            </button>
                        </Box>
                    </Modal>
                </div>

                <div className="headlines">
                    <Link to='/'><span>לתצוגת לוח שנה</span></Link>
                    
                    <h2>לוח_אירועים#</h2>
                </div>

                <div className="selectors">
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

                    <Checkboxs setCheckBoxes={setCheckBoxes} setSearchValue={setSearchValue} />

                </div>

                <div className="eventsCards">
                    {
                    events.loading?
                    <span>Loading...</span>
                    :
                    applyCards()
                    .map(event => 
                        <EventCard 
                        key={event._id}
                        event={event}
                        // openInfo={() => handleCardInfo(event._id)}
                        
                        />
                        )}
                        
                        
                </div>

            </div>
        </section>
        </div>
    )
}

export default EventsPage;
