import React, { useState, useEffect } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const DummyCalendar = () => {
   const localizer = momentLocalizer(moment);
   const [events, setEvents] = useState([]);
   
  return (
    <div className="flex justify-center">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="h-screen w-11/12 text-dark-pink text-xs p-3"
      />
    </div>
  );
};

export default DummyCalendar;
