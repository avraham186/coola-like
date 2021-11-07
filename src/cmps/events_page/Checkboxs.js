import React from "react"


const Checkboxs = () => {

 
   
   const checkAll = ()=> {
      let checkboxArr = document.getElementsByName("checkbox");
      let value =  document.getElementById('all').checked;
        checkboxArr.forEach((element,index) => {
            if(index<checkboxArr.length-1)
               element.checked = value;
            }) }

   
  return (
    
<>
        <div className="checkboxs">
            <div className="row">
            <label htmlFor="hrdwr"  className="col">      חומרה  
               <input type="checkbox" id="hrdwr"  name="checkbox" defaultValue="hrdware" />
            </label>

            <label htmlFor="ui"  className="col">     UI/UX       
               <input type="checkbox" id="ui" name="checkbox" defaultValue="ui" />
            </label>

            <label htmlFor="sys" className="col">   הנדסת מערכות    
               <input type="checkbox" id="sys" name="checkbox" defaultValue="system" />
            </label>

            </div>
            
            <div className="row">

            <label htmlFor="prgrm" className="col"> פיתוח תוכנה  
               <input type="checkbox" id="prgrm" name="checkbox" defaultValue="program" />
            </label>

            <label htmlFor="cyber" className="col"> אבטחת מידע וסייבר 
               <input type="checkbox" id="cyber" name="checkbox" defaultValue="cyber" />
            </label>

            <label htmlFor="qa" className="col">     בדיקות תוכנה 
               <input type="checkbox" id="qa" name="checkbox" defaultValue="qa" />
            </label>

            <label htmlFor="all" className="col">   סמן הכל 
               <input type="checkbox" id="all"  onClick={checkAll} name="checkbox" defaultValue="all"/>
            </label>
            
            </div>

        </div>

        <h4 className="choose_HL">:בחר תחומי עניין</h4>

 </>
    
)
  }

export default Checkboxs