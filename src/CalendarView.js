import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView({ caseList }) {
  const events = caseList.map((c) => ({
    title: `${c.title} (${c.status})`,
    start: new Date(), // Placeholder
    end: new Date(),   // Placeholder
    allDay: true,
    court: c.court || "Unknown Court",
    branch: c.branch || "Branch N/A",
  }));

  const EventComponent = ({ event }) => (
    <span>
      <strong>{event.title}</strong>
      <div className="text-sm text-gray-600">{event.court} - {event.branch}</div>
    </span>
  );

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold text-[#14919F] mb-4">Calendar View</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{ event: EventComponent }}
      />
    </div>
  );
}
