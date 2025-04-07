import { useState } from "react";

export default function CaseManager() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const currentUser = "Atty. Mark Joseph Morales";

  const caseList = [
    {
      id: 1,
      title: "People v. Juan Dela Cruz",
      client: "Juan Dela Cruz",
      status: "Pending",
      lastUpdated: "Apr 5, 2025",
      court: "Regional Trial Court - Branch 1",
      docketNumber: "RTC-2025-00123",
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
      ],
      notes: [
        {
          text: "Awaiting arraignment. Motion for bail filed.",
          date: "Apr 5, 2025",
          author: "Atty. Mark Joseph Morales"
        },
        {
          text: "Initial review completed. Client advised of rights.",
          date: "Apr 2, 2025",
          author: "Atty. Mark Joseph Morales"
        }
      ]
    },
    {
      id: 2,
      title: "Republic v. Maria Clara",
      client: "Maria Clara",
      status: "Active",
      lastUpdated: "Mar 20, 2025",
      court: "Regional Trial Court - Branch 2",
      docketNumber: "RTC-2025-00456",
      hearings: [],
      notes: []
    },
    {
      id: 3,
      title: "Estate of Andres Bonifacio",
      client: "Estate Representative",
      status: "Closed",
      lastUpdated: "Jan 10, 2025",
      court: "Regional Trial Court - Branch 3",
      docketNumber: "RTC-2025-00789",
      hearings: [],
      notes: []
    },
    {
      id: 4,
      title: "National Bank v. Jose Rizal",
      client: "Jose Rizal",
      status: "Pending",
      lastUpdated: "Feb 18, 2025",
      court: "Regional Trial Court - Branch 4",
      docketNumber: "RTC-2025-00321",
      hearings: [],
      notes: []
    },
    {
      id: 5,
      title: "People v. Gregorio del Pilar",
      client: "Gregorio del Pilar",
      status: "Appealed",
      lastUpdated: "Apr 1, 2025",
      court: "Court of Appeals",
      docketNumber: "CA-2025-00555",
      hearings: [],
      notes: []
    },
    {
      id: 6,
      title: "Pedro Penduko v. Philippine Airlines",
      client: "Pedro Penduko",
      status: "Active",
      lastUpdated: "Mar 15, 2025",
      court: "Metropolitan Trial Court - Branch 1",
      docketNumber: "MTC-2025-00111",
      hearings: [],
      notes: []
    }
  ];

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
        <button className="bg-[#14919F] text-white px-4 py-2 rounded shadow">Add New Case</button>
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
    </div>
  );
}
