import  React,{ useState, useEffect } from 'react'
import  {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Checkboxs from '../cmps/events_page/Checkboxs'
import EventCard from '../cmps/events_page/EventCard'
import imgs from '../assets/images/images.js';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';


const EventsPage = () => {

    const {events} = useSelector((state) => state.entities.eventsModule);

    const [searchValue,setSearchValue] = useState('');

    useEffect(() => {
          console.log(searchValue);
       }, [searchValue])

    return ( 
    <section className="eventsPage">
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
                   placeholder="חפש תחום/מיקום/תפקיד"
                   onChange={e=>{
                     setSearchValue(e.target.value);
                  }}
            />   
        </div>
        
        <Checkboxs />

    </div>

         <div className="eventsCards">
            {events.filter(event=>{
                if(searchValue != ''){
                if(event.subject.includes(searchValue))
                return event }
                else return event
                
            })
            .map((event)=>{
                return (
                <EventCard event={event} />
                )
            })}
            
        </div>

    </section>
    )
}

export default EventsPage