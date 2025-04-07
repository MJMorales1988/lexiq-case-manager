import React, { useState } from "react";

const dummyEvents = [
  {
    title: "People v. Juan Dela Cruz (RTC Branch 1)",
    start: new Date(2025, 3, 10, 9, 0),
    end: new Date(2025, 3, 10, 10, 0),
  },
  {
    title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
    start: new Date(2025, 3, 12, 14, 0),
    end: new Date(2025, 3, 12, 15, 30),
  },
];

const CalendarView = ({ events }) => (
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-2">Calendar</h3>
    <ul className="list-disc pl-6">
      {events.map((event, i) => (
        <li key={i}>
          <strong>{event.title}</strong> - {event.start.toLocaleString()} to {event.end.toLocaleString()}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [activeView, setActiveView] = useState("list");
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");
  const [searchQuery, setSearchQuery] = useState("");
  const [cases, setCases] = useState([
    {
      title: "People v. Juan Dela Cruz (RTC Branch 1)",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
      notes: [],
      files: [],
      pleadings: [],
    },
    {
      title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
      client: "Ma. Mercedes",
      status: "Pending",
      lastUpdated: "Apr 7, 2025",
      notes: [],
      files: [],
      pleadings: [],
    },
  ]);
  const [newNote, setNewNote] = useState("");
  const [newFile, setNewFile] = useState(null);
  const [newCase, setNewCase] = useState({ title: "", client: "" });

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const updatedCases = cases.map((c) => {
      if (c.title === selectedCase.title) {
        return {
          ...c,
          notes: [...(c.notes || []), newNote],
        };
      }
      return c;
    });
    setCases(updatedCases);
    setSelectedCase(
      updatedCases.find((c) => c.title === selectedCase.title)
    );
    setNewNote("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const updatedCases = cases.map((c) => {
      if (c.title === selectedCase.title) {
        return {
          ...c,
          files: [...(c.files || []), file.name],
        };
      }
      return c;
    });
    setCases(updatedCases);
    setSelectedCase(
      updatedCases.find((c) => c.title === selectedCase.title)
    );
    setNewFile(null);
  };

  const handleAddNewCase = () => {
    if (!newCase.title.trim() || !newCase.client.trim()) return;
    const newEntry = {
      ...newCase,
      status: "Pending",
      lastUpdated: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      notes: [],
      files: [],
      pleadings: [],
    };
    setCases([...cases, newEntry]);
    setNewCase({ title: "", client: "" });
    setActiveView("dashboard");
  };

  const renderView = () => {
    if (activeView === "calendar") {
      return <CalendarView events={dummyEvents} />;
    }

    if (activeView === "dashboard") {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p>Welcome to your legal case management dashboard.</p>
        </div>
      );
    }

    if (activeView === "new") {
      return (
        <div className="p-4 max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Add New Case</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Case Title"
              className="w-full border p-2 rounded"
              value={newCase.title}
              onChange={(e) => setNewCase({ ...newCase, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Client Name"
              className="w-full border p-2 rounded"
              value={newCase.client}
              onChange={(e) => setNewCase({ ...newCase, client: e.target.value })}
            />
            <button
              className="bg-teal-700 text-white py-2 px-4 rounded"
              onClick={handleAddNewCase}
            >
              Save Case
            </button>
          </div>
        </div>
      );
    }

    if (activeView === "files") {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Files</h2>
          <p>All uploaded files will be displayed here.</p>
        </div>
      );
    }

    if (activeView === "users") {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <p>Manage your law firm's users here.</p>
        </div>
      );
    }

    if (selectedCase) {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{selectedCase.title}</h2>
          <div className="flex space-x-4 mb-4">
            <button className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${activeTab === "notes" ? "bg-teal-800" : ""}`} onClick={() => setActiveTab("notes")}>Notes</button>
            <button className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${activeTab === "files" ? "bg-teal-800" : ""}`} onClick={() => setActiveTab("files")}>Files</button>
            <button className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${activeTab === "pleadings" ? "bg-teal-800" : ""}`} onClick={() => setActiveTab("pleadings")}>Pleadings</button>
            <button className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${activeTab === "calendar" ? "bg-teal-800" : ""}`} onClick={() => setActiveTab("calendar")}>Calendar</button>
          </div>

          {activeTab === "notes" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Notes</h3>
              <ul className="list-disc pl-6">
                {(selectedCase.notes || []).map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
              <textarea
                className="w-full border p-2 mt-4 rounded"
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              ></textarea>
              <button className="mt-2 bg-teal-600 text-white py-1 px-3 rounded" onClick={handleAddNote}>Add Note</button>
            </div>
          )}

          {activeTab === "files" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Files</h3>
              <ul className="list-disc pl-6">
                {(selectedCase.files || []).map((file, i) => (
                  <li key={i}>{file}</li>
                ))}
              </ul>
              <input type="file" className="mt-4" onChange={handleFileUpload} />
            </div>
          )}

          {activeTab === "pleadings" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Pleadings</h3>
              <p>No pleadings available.</p>
            </div>
          )}

          {activeTab === "calendar" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Case Calendar</h3>
              <CalendarView events={dummyEvents} />
            </div>
          )}
        </div>
      );
    }

    const filteredCases = cases.filter((caseItem) =>
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Case List</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search cases, keywords, details..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="space-y-4">
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow cursor-pointer"
                onClick={() => {
                  setSelectedCase(caseItem);
                  setActiveTab("notes");
                }}
              >
                <h3 className="text-lg font-semibold">{caseItem.title}</h3>
                <p className="text-gray-600">Client: {caseItem.client}</p>
                <p className="text-gray-600">Status: {caseItem.status}</p>
                <p className="text-gray-400">Last updated: {caseItem.lastUpdated}</p>
              </div>
            ))
          ) : (
            <p>No cases found.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-teal-700 text-white p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-purple-600">LexiQ</span> Manager
        </h1>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("dashboard"); setSelectedCase(null); }}>Dashboard</button>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("list"); setSelectedCase(null); }}>Case List</button>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("new"); setSelectedCase(null); }}>Add New Case</button>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("calendar"); setSelectedCase(null); }}>Calendar</button>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("files"); setSelectedCase(null); }}>Files</button>
        <button className="rounded-full py-2 px-4 bg-teal-600 shadow" onClick={() => { setActiveView("users"); setSelectedCase(null); }}>Users</button>
      </div>
      <div className="flex-1 bg-gray-100 overflow-auto">{renderView()}</div>
    </div>
  );
};

export default App;