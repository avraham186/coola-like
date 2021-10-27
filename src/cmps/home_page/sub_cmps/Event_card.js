import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import event_img from '../../../assets/images/lectures/lecture2.png';

export default function EventCard() {

    return (
        <Card className="card">
            <CardMedia
                className="events-card-img"
                component="img"
                height="200"
                image={event_img}
                alt="event"
            />

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <input type="button" value="הירשם עכשיו" className="events-button"/>
            </CardActions>
        </Card>
    );
}
