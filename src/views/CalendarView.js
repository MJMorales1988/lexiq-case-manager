
import React from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
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

const sampleCases = [
  {
    title: "People v. Juan Dela Cruz (RTC Branch 1)",
    start: new Date(2025, 3, 10, 9, 0),
    end: new Date(2025, 3, 10, 10, 0),
    resource: "Pending"
  },
  {
    title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
    start: new Date(2025, 3, 12, 14, 0),
    end: new Date(2025, 3, 12, 15, 30),
    resource: "Pending"
  }
];

const CalendarView = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Case Calendar</h2>
      <Calendar
        localizer={localizer}
        events={sampleCases}
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
