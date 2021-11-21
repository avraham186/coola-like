import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton  {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const JobCard = ({ job }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="card">
            <CardContent>
                <div className="card-content flex align-center justify-center">
                    <span>{job.title}</span>
                </div>
                <div className="card-content-info flex align-center justify-center space-between">
                    <span>{job.location}<LocationOnIcon className="job-icon" /></span>
                    <span>{job.type}<WorkIcon className="job-icon" /></span>
                    {/* <span>{job.location}<LocationOnIcon className="job-icon" /></span>
                    <span>{job.misra}<WorkIcon className="job-icon" /></span> */}
                </div>
            </CardContent>
            <CardActions disableSpacing className="card-footer">
                <span>לכל הפרטים</span>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{job.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
