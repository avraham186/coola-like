import React, {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Checkboxs from '../cmps/events_page/Checkboxs.jsx'
import EventCard from '../cmps/events_page/EventCard.jsx'
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import {Box, Modal} from "@mui/material";

const EventsPage = () => {
    const {events} = useSelector((state) => state.entities.eventsModule);
    const [checkBoxes, setCheckBoxes] = useState({})
    const [searchValue, setSearchValue] = useState('');

    const [open, setOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState({
        label: false,
        pplAssigned: false,
        dueDate: false,
        file: false
    })


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
            <div className="main-layout wrapper">

                <div>
                    {/* {
            <button onClick={setOpen((p)=> !p)}>
                press for card
            </button>
        } */}
                    <Modal
                        className="modals"
                        open={open}
                        onClose={() => setToggleMode(p => ({...p, file: !p.file}))}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="box-modal">
                            <button className="save-modal-button"
                                    onClick={() => setToggleMode(p => ({...p, file: !p.file}))}>
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
                    <div className="searchBar">

                        <IconButton aria-type="search" className="search_logo">
                            <SearchIcon/>
                        </IconButton>

                        <input type="search"
                               className="searchInput"
                               placeholder="רשום מילת חיפוש"
                               onChange={e => {
                                   setSearchValue(e.target.value);
                               }}
                        />
                    </div>

                    <Checkboxs setCheckBoxes={setCheckBoxes} setSearchValue={setSearchValue}/>

                </div>

                <div className="eventsCards">
                    {applyCards().map(event => <EventCard event={event}/>)}

                </div>

            </div>
        </section>
    )
}

export default EventsPage
