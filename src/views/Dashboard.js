
import React from "react";
import CaseCard from "../components/CaseCard";

const Dashboard = () => {
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
    }
  ];

  return (
    <div className="p-6 w-full">
      <input
        type="text"
        placeholder="Search cases, keywords, details..."
        className="w-full max-w-4xl mb-6 px-6 py-3 border-2 border-[#9400D3] outline-none rounded-full shadow-sm text-lg"
      />
      <div className="flex flex-wrap gap-6">
        {sampleCases.map((c, i) => (
          <CaseCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
