import { useState } from "react";
import AddCaseModal from "./AddCaseModal";
import CalendarView from "./CalendarView";
import CaseCalendarSidebar from "./CaseCalendarSidebar";

export default function CaseManager() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [caseList, setCaseList] = useState([
    {
      id: 1,
      title: "People v. Juan Dela Cruz",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
      court: "Regional Trial Court",
      branch: "Branch 1",
      hearings: [
        {
          id: '1',
          title: "Arraignment Hearing",
          date: "2025-04-10T10:00:00",
          location: "RTC Br. 1, CDO",
          notes: "Motion to quash pending"
        },
        {
          id: '2',
          title: "Pre-trial Conference",
          date: "2025-04-25T14:00:00",
          location: "RTC Br. 1, CDO",
          notes: "Preparation of witness list"
        }
      ]
    },
    {
      id: 2,
      title: "Ma. Mercedes v. Oriz Metro",
      client: "Ma. Mercedes",
      status: "Pending",
      lastUpdated: "Apr 7, 2025",
      court: "Metropolitan Trial Court",
      branch: "Branch 3",
      hearings: []
    }
  ]);

  const addNewCase = (caseData) => {
    setCaseList((prev) => [...prev, { id: prev.length + 1, ...caseData }]);
  };

  const updateCase = (updatedData) => {
    setCaseList(prev =>
      prev.map(c => (c.id === updatedData.id ? updatedData : c))
    );
    setSelectedCase(updatedData);
  };

  const deleteCase = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this case?");
    if (!confirmDelete) return;
    setCaseList(prev => prev.filter(c => c.id !== id));
    setSelectedCase(null);
  };

  const filteredCases = caseList.filter(c =>
    [c.title, c.client, c.status]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white p-4 shadow flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-[#9400D3]">
          LexiQ <span className="text-[#14919F]">Manager</span>
        </h1>
        <button onClick={() => { setSelectedCase(null); setShowCalendar(false); }} className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl shadow-md">Dashboard</button>
        <button onClick={() => { setShowModal(true); setIsEditing(false); }} className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl shadow-md">Add New Case</button>
        <button onClick={() => { setShowCalendar(true); setSelectedCase(null); }} className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl shadow-md">Calendar</button>
        <button className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl shadow-md">Files</button>
        <button className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl shadow-md">Users</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {showCalendar ? (
          <CalendarView caseList={caseList} />
        ) : !selectedCase ? (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search cases, keywords, details..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 rounded-full shadow focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className="bg-white shadow p-4 rounded-lg cursor-pointer"
                  onClick={() => setSelectedCase(c)}
                >
                  <h2 className="text-xl font-semibold text-[#14919F]">{c.title}</h2>
                  <p className="text-sm text-gray-600">Client: {c.client}</p>
                  <p className="text-sm text-gray-600">Status: {c.status}</p>
                  <p className="text-sm text-gray-400">Last updated: {c.lastUpdated}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex">
            <div className="flex-1 pr-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#14919F]">{selectedCase.title}</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setIsEditing(true);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-2xl shadow"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCase(selectedCase.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-2xl shadow"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl shadow">Notes</button>
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl shadow">Documents</button>
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl shadow">Pleadings Filed</button>
              </div>
              <p className="text-gray-500">(Detailed case view placeholder.)</p>
            </div>
            <CaseCalendarSidebar hearings={selectedCase.hearings} />
          </div>
        )}
      </main>

      <AddCaseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={isEditing ? updateCase : addNewCase}
        initialData={isEditing ? selectedCase : null}
      />
    </div>
  );
}
