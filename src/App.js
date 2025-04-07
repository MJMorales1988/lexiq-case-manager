import { useState } from "react";
import AddCaseModal from "./AddCaseModal";

export default function CaseManager() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [caseList, setCaseList] = useState([
    {
      id: 1,
      title: "People v. Juan Dela Cruz",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
    },
    {
      id: 2,
      title: "Ma. Mercedes v. Oriz Metro",
      client: "Ma. Mercedes",
      status: "Pending",
      lastUpdated: "Apr 7, 2025",
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
        <h1 className="text-2xl font-bold mb-4">
          <span className="text-[#9400D3]">LexiQ</span>
        </h1>
        <button onClick={() => setSelectedCase(null)} className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl">Dashboard</button>
        <button onClick={() => { setShowModal(true); setIsEditing(false); }} className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl">Add New Case</button>
        <button className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl">Calendar</button>
        <button className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl">Files</button>
        <button className="text-left px-4 py-2 bg-[#14919F] text-white rounded-2xl">Users</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {!selectedCase ? (
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
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#14919F]">{selectedCase.title}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setIsEditing(true);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-2xl"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCase(selectedCase.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-2xl"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">Notes</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">Documents</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">Pleadings Filed</button>
              <button className="bg-[#14919F] text-white px-4 py-2 rounded-2xl">Calendar</button>
            </div>
            <p className="text-gray-500">(Detailed case view placeholder.)</p>
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
