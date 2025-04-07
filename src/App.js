// src/App.js
import React, { useState } from "react";
import CalendarView from "./CalendarView";
import "./index.css";

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

const App = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");
  const [searchQuery, setSearchQuery] = useState("");
  const [cases, setCases] = useState([
    {
      title: "People v. Juan Dela Cruz (RTC Branch 1)",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
    },
    {
      title: "Ma. Mercedes v. Oriz Metro (MTC Branch 3)",
      client: "Ma. Mercedes",
      status: "Pending",
      lastUpdated: "Apr 7, 2025",
    },
  ]);

  const [newCase, setNewCase] = useState({
    title: "",
    client: "",
    status: "",
    lastUpdated: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCase({
      ...newCase,
      [name]: value,
    });
  };

  const handleAddCase = (e) => {
    e.preventDefault();
    const updatedCases = [
      ...cases,
      { ...newCase, lastUpdated: new Date().toLocaleDateString() },
    ];
    setCases(updatedCases);
    setActiveView("dashboard");
    setNewCase({ title: "", client: "", status: "", lastUpdated: "" });
  };

  const renderView = () => {
    if (activeView === "calendar") {
      return <CalendarView events={dummyEvents} />;
    }

    if (activeView === "new") {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Add New Case</h2>
          <form onSubmit={handleAddCase} className="space-y-4">
            <div>
              <label htmlFor="title" className="block mb-2">
                Case Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newCase.title}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="client" className="block mb-2">
                Client Name
              </label>
              <input
                type="text"
                id="client"
                name="client"
                value={newCase.client}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="status" className="block mb-2">
                Case Status
              </label>
              <input
                type="text"
                id="status"
                name="status"
                value={newCase.status}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="lastUpdated" className="block mb-2">
                Last Updated
              </label>
              <input
                type="date"
                id="lastUpdated"
                name="lastUpdated"
                value={newCase.lastUpdated}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-full py-2 px-4 bg-teal-600 text-white shadow"
            >
              Add Case
            </button>
          </form>
        </div>
      );
    }

    if (selectedCase) {
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">{selectedCase.title}</h2>
          <div className="flex space-x-4 mb-4">
            <button
              className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${
                activeTab === "notes" ? "bg-teal-800" : ""
              }`}
              onClick={() => setActiveTab("notes")}
            >
              Notes
            </button>
            <button
              className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${
                activeTab === "files" ? "bg-teal-800" : ""
              }`}
              onClick={() => setActiveTab("files")}
            >
              Files
            </button>
            <button
              className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${
                activeTab === "pleadings" ? "bg-teal-800" : ""
              }`}
              onClick={() => setActiveTab("pleadings")}
            >
              Pleadings
            </button>
            <button
              className={`py-2 px-4 bg-teal-600 text-white rounded-lg ${
                activeTab === "calendar" ? "bg-teal-800" : ""
              }`}
              onClick={() => setActiveTab("calendar")}
            >
              Calendar
            </button>
          </div>

          {activeTab === "notes" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Notes</h3>
              <p>No notes available.</p>
            </div>
          )}
          {activeTab === "files" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Files</h3>
              <p>No files available.</p>
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
          placeholder="Search cases, keywords, details..."
          className="mb-4 p-2 border rounded"
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
                  setActiveTab("notes"); // Default tab on case click
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
        <button
          className="rounded-full py-2 px-4 bg-teal-600 shadow"
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </button>
        <button
          className="rounded-full py-2 px-4 bg-teal-600 shadow"
          onClick={() => setActiveView("new")}
        >
          Add New Case
        </button>
        <button
          className="rounded-full py-2 px-4 bg-teal-600 shadow"
          onClick={() => setActiveView("calendar")}
        >
          Calendar
        </button>
        <button
          className="rounded-full py-2 px-4 bg-teal-600 shadow"
          onClick={() => setActiveView("files")}
        >
          Files
        </button>
        <button
          className="rounded-full py-2 px-4 bg-teal-600 shadow"
          onClick={() => setActiveView("users")}
        >
          Users
        </button>
      </div>
      <div className="flex-1 bg-gray-100 overflow-auto">{renderView()}</div>
    </div>
  );
};

export default App;
