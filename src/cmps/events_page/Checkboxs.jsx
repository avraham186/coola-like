import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import {CATEGORIES} from '../../utils/constant'
//useSelector -> במקום map.stateToProps רשימה מהרידקס
//useDispatch -> map.dispatchToProps
const allTags = {
   development: false, uiux: false, qa: false, hardware: false,
   system: false, cybersecurity: false, all: false
}
   

const checkBoxProp = CATEGORIES;

const Checkboxs = ({ setCheckBoxes, setSearchValue }) => {

   const { events } = useSelector((state) => state.entities.eventsModule);
   const [checkboxSelected, setCheckboxSelected] = useState({ ...allTags });

   const checkboxClick = (e) => {
      let tag = e.target.id;//hold the key
      setSearchValue('')//init the search bar to avoid conflicts
      if (tag === 'all') {
         const tmpCheck = checkboxSelected;// equals to the selected values flag
         if ((checkboxSelected[tag])) { // if the tag is selected (true)
            setCheckboxSelected({ ...allTags }) //set ceckboxes
            setCheckBoxes({})
            return;
         }
         Object.keys(tmpCheck).forEach(k => tmpCheck[k] = true)
         setCheckboxSelected({ ...tmpCheck })
         setCheckBoxes({ ...tmpCheck })
         return;
      }
      setCheckboxSelected(p => ({ ...p, [tag]: !p[tag] }))
      setCheckBoxes(p => ({ ...p, [tag]: !p[tag] }))
   }


   return (
      <>
         <div className="checkboxs">
            <div className="row_checkbox_events flex">
               {checkBoxProp.map(({ name, tag }) => {
                  return <label key={tag} htmlFor={tag} className="col">
                     {name}
                     <input 
                        type="checkbox" 
                        id={tag}
                        name="checkbox" 
                        checked={checkboxSelected[tag]}
                        onChange={checkboxClick}
                     />
                  </label>

               })}
            </div>
         </div>

         
            <h4 className="choose_HL">:בחר תחומי עניין</h4>
      

      </>

   )
}

export default Checkboxs