import React from "react"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import founder_img from '../../assets/images/coola_like_logo.png';
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VideocamIcon from '@mui/icons-material/Videocam';


const EventCard = () => {
    return (
    <div className="event-card"> 
    
        <Card className="card">
            <CardMedia
                className="card-img"
                component="img"
                height="200"
                image={founder_img}
                alt="event"
            />

            <IconButton className="inButton" >
                    <LinkedInIcon className="inIcon" fontSize="small"/>
            </IconButton>

            <CardActions className="card-footer">
                    
                    <h3 className="date_HL">יום ראשון 24/10</h3>
                    <span className="time_HL">בשעה 20:00</span>

                    <h3 className="subject_HL">לבנות מותג בלינדקאין כדי למצוא עבודה ראשונה</h3>

                    <hr/>
                    <h5 className="lecture_HL">מציג: #כולא_לייק</h5>
                    
                    
                    <span className="video">
                        <IconButton className="videoIcon">
                            <VideocamIcon fontSize="small"/>
                        </IconButton>
                        קישור יישלח בסמוך לשעה 
                    </span>

                    <input type="button" value="הירשם עכשיו" className="events-button" />
                
                    
                    

            </CardActions>

        </Card>
    </div>
    )
}

export default EventCard