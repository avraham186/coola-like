import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

//useSelector -> במקום map.stateToProps רשימה מהרידקס
//useDispatch -> map.dispatchToProps

const Checkboxs = () => {
  const dispatch = useDispatch();
   const checkboxArr = document.getElementsByName("checkbox");
   const { events } = useSelector((state) => state.entities.eventsModule);
   const [checkboxSelected, setCheckboxSelected] = useState(['all']);

   const checkboxClick = (e)=>{
      let checkbox = e.target;
      if(checkbox.checked){
         setCheckboxSelected([...checkboxSelected, `${checkbox.id}`]);
         //setCheckboxSelected(checkboxSelected.push(`${checkbox.id}`));
        
      }else{
         setCheckboxSelected(checkboxSelected.filter(tag=> tag !== checkbox.id ));
      }
   }

   const markAll = () => {
      console.log("I'm CheckALl");
      let value = document.getElementById('all').checked;
      checkboxArr.forEach(element => element.checked = value)
   }

   useEffect(() => {
      const setEvents = (events) => {
         try{  
         dispatch(
            {type:'SET_events',
            events: [(
            events.filter(event => {
            if (!checkboxSelected.includes('all')) {
               if (checkboxSelected.includes(event.tag))
                  return event
            }
            else return event

         }
         )
         )
         ]
         })
   }//try
   catch(err){
      console.log(err);
   }
}
   
      //setEvents(events);
   
   },
      [checkboxSelected]
   )


   return (

      <>
         <div className="checkboxs">
            <div className="row_checkbox_events">
               <label htmlFor="hrdwr" className="col">      חומרה
                  <input type="checkbox" id="hrdwr" name="checkbox" defaultValue="hrdware" onClick={checkboxClick}/>
               </label>

               <label htmlFor="ui" className="col">     UI/UX
                  <input type="checkbox" id="ui" name="checkbox" defaultValue="ui" onClick={checkboxClick}/>
               </label>

               <label htmlFor="sys" className="col">   הנדסת מערכות
                  <input type="checkbox" id="sys" name="checkbox" defaultValue="system" onClick={checkboxClick}/>
               </label>

            </div>

            <div className="row_checkbox_events">

               <label htmlFor="prgrm" className="col"> פיתוח תוכנה
                  <input type="checkbox" id="prgrm" name="checkbox" defaultValue="program" onClick={checkboxClick}/>
               </label>

               <label htmlFor="cyber" className="col"> אבטחת מידע וסייבר
                  <input type="checkbox" id="cyber" name="checkbox" defaultValue="cyber" onClick={checkboxClick}/>
               </label>

               <label htmlFor="qa" className="col">     בדיקות תוכנה
                  <input type="checkbox" id="qa" name="checkbox" defaultValue="qa" onClick={checkboxClick}/>
               </label>

               <label htmlFor="all" className="col">   סמן הכל
                  <input type="checkbox" id="all" onClick={e=> {checkboxClick(e);markAll(e)}} name="checkbox" defaultValue="all" />
               </label>

            </div>

         </div>

         <h4 className="choose_HL">:בחר תחומי עניין</h4>

      </>

   )
}

export default Checkboxs