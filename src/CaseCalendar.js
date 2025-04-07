// File: views/CaseCalendar.js
import React from "react";
import { Calendar, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import { dateFnsLocalizer } from "react-big-calendar/lib/localizers/date-fns"; // ✅ This is the correct import
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
    client: "Juan Dela Cruz",
    status: "Pending",
    start: new Date(2025, 3, 10, 9, 0),
    end: new Date(2025, 3, 10, 10, 0),
  },
  {
    title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
    client: "Ma. Mercedes",
    status: "Pending",
    start: new Date(2025, 3, 12, 14, 0),
    end: new Date(2025, 3, 12, 15, 30),
  },
];

const CaseCalendar = () => {
  const getCalendarEvents = () =>
    sampleCases.map((c) => ({
      title: c.title,
      start: c.start,
      end: c.end,
      resource: c.status,
    }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Case Calendar</h2>
      <Calendar
        localizer={localizer}
        events={getCalendarEvents()}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        style={{ height: 600 }}
        eventPropGetter={(event) => {
          const backgroundColor =
            event.resource === "Pending" ? "#f59e0b" : "#10b981";
          return { style: { backgroundColor, color: "white" } };
        }}
      />
    </div>
  );
};

export default CaseCalendar;
