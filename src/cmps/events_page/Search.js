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

            <div className="row">
            <label htmlFor="hrdwr"  className="col">      חומרה  
               <input type="checkbox" name="hrdwr" defaultValue="hrdware" />
            </label>

            <label htmlFor="ui" className="col">     UI/UX       
               <input type="checkbox" name="ui" defaultValue="ui" />
            </label>

            <label htmlFor="sys" className="col">   הנדסת מערכות    
               <input type="checkbox" name="sys" defaultValue="system" />
            </label>

            </div>
            
            <div className="row">

            <label htmlFor="prgrm" className="col"> פיתוח תוכנה  
               <input type="checkbox" name="prgrm" defaultValue="program" />
            </label>

            <label htmlFor="cyber" className="col"> אבטחת מידע וסייבר 
               <input type="checkbox" name="cyber" defaultValue="cyber" />
            </label>

            <label htmlFor="qa" className="col">     בדיקות תוכנה 
               <input type="checkbox" name="qa" defaultValue="qa" />
            </label>

            <label htmlFor="all" className="col">   סמן הכל 
               <input type="checkbox" name="all" defaultValue="all" />
            </label>
            
            </div>

        </form>

        <h4 className="choose_HL">:בחר תחומי עניין</h4>

    </div>
)

export default Search