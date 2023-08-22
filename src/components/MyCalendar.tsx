import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

function MyCalendar() {
  const [value, onChange] = useState<any>(new Date());

  return <div>{/* <Calendar onChange={onChange} value={value} /> */}</div>;
}
export default MyCalendar;
