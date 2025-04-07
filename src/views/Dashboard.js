import React from "react";
import CaseCard from "../components/CaseCard";

const Dashboard = ({ searchQuery, setSearchQuery }) => {
  const sampleCases = [
    {
      title: "People v. Juan Dela Cruz",
      client: "Juan Dela Cruz",
      status: "Pending",
      updatedAt: "Apr 5, 2025",
    },
    {
      title: "Ma. Mercedes v. Oriz Metro",
      client: "Ma. Mercedes",
      status: "Pending",
      updatedAt: "Apr 7, 2025",
    },
    {
      title: "People v. Maria",
      client: "Maria Santos",
      status: "Closed",
      updatedAt: "Mar 30, 2025",
    }
  ];

  // Filter cases based on search query
  const filteredCases = sampleCases.filter((caseItem) => {
    return (
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="p-6 w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search cases, keywords, details..."
        className="w-full max-w-4xl mb-6 px-6 py-3 border-2 border-[#9400D3] outline-none rounded-full shadow-sm text-lg"
      />
      <div className="flex flex-wrap gap-6">
        {filteredCases.length > 0 ? (
          filteredCases.map((c, i) => <CaseCard key={i} {...c} />)
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
