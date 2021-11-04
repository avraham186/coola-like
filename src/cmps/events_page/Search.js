import React from "react"
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
    <div className="selectors">
        
        <div className="searchBar">
            <IconButton aria-type="search" className="search_logo">
                <SearchIcon />
            </IconButton>
            <input type="search" className="searchInput" placeholder="חפש תחום/מיקום/תפקיד"/>
        </div>

        <form action="#" method="POST" className="checkboxs">
            
             <label htmlFor="hrdwr">      חומרה  
               <input type="checkbox" name="hrdwr" defaultValue="hrdware" /></label>

             <label htmlFor="ui">     UI/UX       
               <input type="checkbox" name="ui" defaultValue="ui" />
               
               </label>

             <label htmlFor="sys">   הנדסת מערכות    
               <input type="checkbox" name="sys" defaultValue="system" /></label>

             <label htmlFor="prgrm"> פיתוח תוכנה  
               <input type="checkbox" name="prgrm" defaultValue="program" /></label>

             <label htmlFor="cyber"> אבטחת מידע וסייבר 
               <input type="checkbox" name="cyber" defaultValue="cyber" /></label>

             <label htmlFor="qa">     בדיקות תוכנה 
               <input type="checkbox" name="qa" defaultValue="qa" /></label>

             <label htmlFor="all">   סמן הכל 
               <input type="checkbox" name="all" defaultValue="all" /></label>

        </form>

        <h4 className="choose_HL">:בחר תחומי עניין</h4>

    </div>
)

export default Search