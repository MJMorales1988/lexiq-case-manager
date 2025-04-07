import { useState } from "react";
import AddCaseModal from "./AddCaseModal";

export default function CaseManager() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [caseList, setCaseList] = useState([
    {
      id: 1,
      title: "People v. Juan Dela Cruz",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
      court: "Regional Trial Court - Branch 1",
      docketNumber: "RTC-2025-00123",
      hearings: [],
      notes: []
    }
  ]);

  const addNewCase = (caseData) => {
    setCaseList((prev) => [...prev, { id: prev.length + 1, ...caseData }]);
  };

  const filteredCases = caseList.filter(c =>
    [c.title, c.client, c.status, c.court, c.docketNumber]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-[#9400D3]">LexiQ</span> <span className="text-[#14919F]">Case Manager</span>
        </h1>
        <button
          className="bg-[#14919F] text-white px-4 py-2 rounded shadow"
          onClick={() => setShowModal(true)}
        >
          Add New Case
        </button>
      </header>

      <main className="max-w-6xl mx-auto">
        {!selectedCase ? (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search cases, keywords, details..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 rounded shadow focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 flex-1">
              {filteredCases.map((c) => (
                <div
                  key={c.id}
                  className="bg-white shadow p-4 rounded cursor-pointer"
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
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#14919F]">{selectedCase.title}</h2>
              <button onClick={() => setSelectedCase(null)} className="bg-[#14919F] text-white px-4 py-2 rounded">
                Back to Dashboard
              </button>
            </div>
            <div className="flex gap-4 mb-6">
              <button className="bg-[#14919F] text-white px-4 py-2 rounded">Notes</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded">Documents</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded">Pleadings Filed</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded">Calendar</button>
            </div>
            <p className="text-gray-500">(Detailed case view placeholder.)</p>
          </div>
        )}
      </main>

      <AddCaseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={addNewCase}
      />
    </div>
  );
}
