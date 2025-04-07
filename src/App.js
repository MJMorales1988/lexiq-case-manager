import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: enUS }),
  getDay,
  locales: { 'en-US': enUS }
});

const App = () => {
  const [activeView, setActiveView] = useState("list");
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");
  const [searchQuery, setSearchQuery] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newFile, setNewFile] = useState(null);
  const [newCase, setNewCase] = useState({
    title: "",
    client: "",
    start: "",
    end: "",
  });

  const [cases, setCases] = useState([
    {
      title: "People v. Juan Dela Cruz (RTC Branch 1)",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
      start: new Date(2025, 3, 10, 9, 0),
      end: new Date(2025, 3, 10, 10, 0),
      notes: [],
      files: [],
      pleadings: [],
    },
    {
      title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
      client: "Ma. Mercedes",
      status: "Pending",
      lastUpdated: "Apr 7, 2025",
      start: new Date(2025, 3, 12, 14, 0),
      end: new Date(2025, 3, 12, 15, 30),
      notes: [],
      files: [],
      pleadings: [],
    },
  ]);

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const updatedCases = cases.map((c) => {
      if (c.title === selectedCase.title) {
        return { ...c, notes: [...c.notes, newNote] };
      }
      return c;
    });
    setCases(updatedCases);
    setSelectedCase(updatedCases.find((c) => c.title === selectedCase.title));
    setNewNote("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const updatedCases = cases.map((c) => {
      if (c.title === selectedCase.title) {
        return { ...c, files: [...c.files, file.name] };
      }
      return c;
    });
    setCases(updatedCases);
    setSelectedCase(updatedCases.find((c) => c.title === selectedCase.title));
    setNewFile(null);
  };

  const handleAddNewCase = () => {
    const { title, client, start, end } = newCase;
    if (!title.trim() || !client.trim() || !start || !end) return;

    const newEntry = {
      title,
      client,
      status: "Pending",
      lastUpdated: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      start: new Date(start),
      end: new Date(end),
      notes: [],
      files: [],
      pleadings: [],
    };
    setCases([...cases, newEntry]);
    setNewCase({ title: "", client: "", start: "", end: "" });
    setActiveView("dashboard");
  };

  const getCalendarEvents = () =>
    cases.map((c) => ({
      title: c.title,
      start: new Date(c.start),
      end: new Date(c.end),
      resource: c.status
    }));

  const renderView = () => {
    if (activeView === "calendar") {
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
              const backgroundColor = event.resource === "Pending" ? "#f59e0b" : "#10b981";
              return { style: { backgroundColor, color: "white" } };
            }}
          />
        </div>
      );
    }
    return <div className="p-4">Other views not implemented here.</div>;
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-teal-700 text-white p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-purple-600">LexiQ</span> Manager
        </h1>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("calendar"); setSelectedCase(null); }}>Calendar</button>
      </div>
      <div className="flex-1 bg-gray-100 overflow-auto">{renderView()}</div>
    </div>
  );
};

export default App;
