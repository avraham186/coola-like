import  React,{ useState, useEffect } from 'react'
import  {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Checkboxs from '../cmps/events_page/Checkboxs'
import EventCard from '../cmps/events_page/EventCard'
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const EventsPage = () => {

    const {events} = useSelector((state) => state.entities.eventsModule);

    const [searchValue,setSearchValue] = useState('');

    return ( 
<section className="eventsPage full">
    <div className="main-layout wrapper">
        <div className="headlines">
            <Link to='/'><span>לתצוגת לוח שנה</span></Link>
            <h2>לוח_אירועים#</h2>
        </div>

        <div className="selectors">
            <div className="searchBar">

            <IconButton aria-type="search" className="search_logo">
                <SearchIcon />
            </IconButton>

            <input type="search"
                   className="searchInput"
                   placeholder="רשום מילת חיפוש"
                   onChange={e=>{
                     setSearchValue(e.target.value);
                  }}
            />   
        </div>
        
        <Checkboxs />

    </div>

         <div className="eventsCards">
            {
            events.filter(event=>{
                if(searchValue != ''){
                    if(event.subject.toLowerCase().includes(searchValue.toLowerCase()))
                return event }
                else return event
                
            })
            .map((event)=>{
                return (
                <EventCard event={event} />
                )
            })}
            
        </div>
    </div>
    </section>
    )
}

export default EventsPage