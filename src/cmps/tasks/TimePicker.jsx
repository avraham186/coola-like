import React, { useState, useEffect } from "react";
import "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TimePicker = ({ handleDate, dateName, timeToSave }) => {
  const [date, setDate] = useState(new Date());

  const choosenDate = (d) => {
    console.log("d", d);
    handleDate({
      name: dateName,
      date: `${d.getHours()}:${d.getMinutes()}`,
    });
    setDate(d);
  };

  // }
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={choosenDate}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={10}
        timeCaption="Time"
        dateFormat="hh:mm"
        timeFormat="HH:mm"
      />
    </div>
  );
};
