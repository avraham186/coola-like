import React from 'react';
import {Link} from 'react-router-dom'
import RecipeReviewCard from "./temp/Event_card";

const Events = () => {

    return (
        <div className="events">
            <span className="events-title">#לא כדאי_לפספס</span>
            <div className="events-sub-title-container">
                        <span className="events-sub-title">אירועי השבוע</span>
                        <span className="events-sub-title-link"><Link to="/">לכל האירועים← </Link></span>
            </div>
                <div className="events-cards">
                    <RecipeReviewCard />
                    <RecipeReviewCard />
                    <div >
                        card 1
                    </div>
                    <div>
                        card 2
                    </div>
                    <div >
                        card 3
                    </div>
                    <div >
                        card 4
                    </div>
                </div>
        </div>
    );
};

export default Events;