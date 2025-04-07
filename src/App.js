import React, { useState } from "react";
import AddCaseModal from "./AddCaseModal";
import CalendarView from "./CalendarView";
import CaseCalendarSidebar from "./CaseCalendarSidebar";

export default function App() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [caseList, setCaseList] = useState([]);

  const handleSaveCase = (newCase) => {
    setCaseList((prev) => [...prev, { ...newCase, id: Date.now() }]);
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen">
      <aside className="bg-[#9400D3] text-white w-60 p-4 shadow-xl">
        <h1 className="text-xl font-bold mb-8">LexiQ Manager</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => {
              setSelectedCase(null);
              setShowCalendar(false);
            }}
            className="rounded-2xl shadow px-4 py-2 bg-white text-[#9400D3] hover:bg-purple-100"
          >
            Dashboard
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="rounded-2xl shadow px-4 py-2 bg-white text-[#9400D3] hover:bg-purple-100"
          >
            Add New Case
          </button>
          <button
            onClick={() => setShowCalendar(true)}
            className="rounded-2xl shadow px-4 py-2 bg-white text-[#9400D3] hover:bg-purple-100"
          >
            Calendar
          </button>
          <button className="rounded-2xl shadow px-4 py-2 bg-white text-[#9400D3] hover:bg-purple-100">
            Files
          </button>
          <button className="rounded-2xl shadow px-4 py-2 bg-white text-[#9400D3] hover:bg-purple-100">
            Users
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-50">
        {showCalendar ? (
          <CalendarView events={caseList} />
        ) : selectedCase ? (
          <div className="flex gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#14919F] mb-4">
                {selectedCase.title}
              </h2>
              <div className="flex gap-4 mb-6">
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">
                  Notes
                </button>
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">
                  Documents
                </button>
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">
                  Pleadings
                </button>
                <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">
                  Calendar
                </button>
              </div>
            </div>
            <CaseCalendarSidebar caseData={selectedCase} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {caseList.map((c) => (
              <div
                key={c.id}
                className="bg-white shadow p-4 rounded-2xl cursor-pointer"
                onClick={() => setSelectedCase(c)}
              >
                <h2 className="text-xl font-semibold text-[#14919F]">
                  {c.title}
                </h2>
                <p className="text-sm text-gray-600">Client: {c.client}</p>
                <p className="text-sm text-gray-600">Status: {c.status}</p>
                <p className="text-sm text-gray-400">
                  Intake: {c.intakeDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
      {showModal && (
        <AddCaseModal
          onSave={handleSaveCase}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
