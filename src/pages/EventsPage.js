import  React from 'react'
import { Link } from 'react-router-dom'
import Search from '../cmps/events_page/Search'
import EventCard from '../cmps/events_page/EventCard'

const EventsPage = () => {
    return ( 
    <section className="eventsPage">
        
        <div className="headlines">

            <Link to='/'><span>לתצוגת לוח שנה</span></Link>

            <h2>לוח_אירועים#</h2>

        </div>

        <Search />
        <div className="eventsCards">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        </div>

    </section>
    )
}

export default EventsPage