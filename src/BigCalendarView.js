// File: BigCalendarView.js
import React from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

const BigCalendarView = ({ events }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Case Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        style={{ height: 600 }}
        popup
        eventPropGetter={(event) => {
          const backgroundColor =
            event.resource === "Pending" ? "#f59e0b" : "#10b981";
          return {
            style: {
              backgroundColor,
              color: "white",
              borderRadius: "6px",
              padding: "4px",
            },
          };
        }}
      />
    </div>
  );
};

export default BigCalendarView;
