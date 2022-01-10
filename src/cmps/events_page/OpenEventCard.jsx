import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { BiEdit } from "react-icons/bi";
import { Box, Modal } from "@mui/material";


const OpenEventCard = () => {
  const [open, setOpen] = useState(false);
  

  return (
    
        <Modal
          className="modals"
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="boxStyle editEvent-box">
           <h2>open Modal</h2>
          </Box>
        </Modal>
     


  );
};

export default OpenEventCard;
