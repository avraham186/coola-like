import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export default function EventCard({ event }) {
    console.log(event);
    return (
        <Card className="card">
            <CardMedia
                className="card-img"
                component="img"
                // height="200"
                image={event.img}
                alt="event"
            />

            <CardActions className="card-footer flex justify-center">
                <input type="button" value="הירשם עכשיו" className="events-button" />
            </CardActions>
        </Card>
    );
}
