import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = ({ events }) => {
  const calendarEvents = events.map((event) => ({
    title: `${event.title} - ${event.court} Branch ${event.branch} (${event.status})`,
    start: new Date(event.intakeDate),
    end: new Date(event.intakeDate),
  }));

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "20px" }}
      />
    </div>
  );
};

export default CalendarView;
