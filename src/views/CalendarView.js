import React from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Localizer setup
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = ({ casesData }) => {  // Accept casesData as props to make it dynamic
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Case Calendar</h2>
      <Calendar
        localizer={localizer}
        events={casesData}  // Use casesData to pass dynamic events
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        style={{ height: 600 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: "#059669",
            color: "white",
            borderRadius: "5px",
            padding: "2px 4px"
          }
        })}
      />
    </div>
  );
};

export default CalendarView;
