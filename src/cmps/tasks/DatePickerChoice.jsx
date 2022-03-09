import React, { useState, useEffect } from 'react'
import 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const filterWeekends = (date) => {
    return date.getDay() !== 5 && date.getDay() !== 6;
}
export const DatePickerChoice = ({ handleDate,dateName,dateToSave }) => {
    const [date, setDate] = useState(new Date())

    const choosenDate = (d) => {
        console.log('d',d);
        handleDate({
            name: dateName,
            date: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
        })
        setDate(d)
    }

// }
return (
    <div>
        <DatePicker
            selected={date}
            value={dateToSave||date}
            dateFormat="dd/MM/yyyy"
            onChange={choosenDate}
            onSelect={choosenDate} //when day is clicked
            minDate={new Date()}
            filterDate={filterWeekends}
        />
    </div>
)
}
