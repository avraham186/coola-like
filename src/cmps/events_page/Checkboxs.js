import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

//useSelector -> במקום map.stateToProps רשימה מהרידקס
//useDispatch -> map.dispatchToProps
const allTags = {
   development: false, uiux: false, qa: false, hardware: false,
   system: false, cybersecurity: false, all: false
}
const checkBoxProp = [
   { name: 'סמן הכל', tag: 'all' },
   { name: 'חומרה', tag: 'hardware' },
   { name: 'UI/UX', tag: 'uiux' },
   { name: 'הנדסת מערכות', tag: 'system' },
   { name: 'פיתוח תוכנה', tag: 'development' },
   { name: 'אבטחת מידע וסייבר', tag: 'cybersecurity' },
   { name: 'בדיקות תוכנה', tag: 'qa' }

]
const Checkboxs = ({ setCheckBoxes, setSearchValue }) => {

   const { events } = useSelector((state) => state.entities.eventsModule);
   const [checkboxSelected, setCheckboxSelected] = useState({ ...allTags });


   const checkboxClick = (e) => {
      let tag = e.target.id;
      setSearchValue('')
      if (tag === 'all') {
         const tmpCheck = checkboxSelected;
         if ((checkboxSelected[tag])) {
            setCheckboxSelected({ ...allTags })
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
   useEffect(() => {
      console.log(checkboxSelected)
   }, [checkboxSelected])


   return (
      <>
         <div className="checkboxs">
            <div className="row_checkbox_events flex">
               {checkBoxProp.map(({ name, tag }) => {
                  return <label key={tag} htmlFor={tag} className="col"> {name}
                     <input type="checkbox" id={tag}
                        name="checkbox" checked={checkboxSelected[tag]}
                        onClick={checkboxClick}
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