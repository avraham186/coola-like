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

            
            <label for="hrdwr">      חומרה <input type="checkbox"  name="hrdwr" value="hrdware"/>    </label>

            
            <label for="ui">     UI/UX <input type="checkbox" name="ui" value="ui"/>    </label>

            
            <label for="sys">   הנדסת מערכות <input type="checkbox" name="sys" value="system"/>     </label>

            
            <label for="prgrm"> פיתוח תוכנה <input type="checkbox" name="prgrm" value="program"/>     </label>

            
            <label for="cyber"> אבטחת מידע וסייבר <input type="checkbox" name="cyber" value="cyber"/>     </label>

            
            <label for="qa">     בדיקות תוכנה <input type="checkbox" name="qa" value="qa"/>    </label>

            
            <label for="all">   סמן הכל <input type="checkbox" name="all" value="all"/>     </label>
        
        </form>

       

        <h4>:בחר תחומי עניין</h4>

    </div>
)

export default Search