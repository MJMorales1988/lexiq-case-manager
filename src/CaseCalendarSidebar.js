import React from "react";

const CaseCalendarSidebar = ({ caseData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <h3 className="font-bold text-lg mb-4">Case Calendar</h3>
      <p><strong>Case:</strong> {caseData.title}</p>
      <p><strong>Court:</strong> {caseData.court}</p>
      <p><strong>Branch:</strong> {caseData.branch}</p>
      <p><strong>Status:</strong> {caseData.status}</p>
      <p className="text-sm text-gray-500 mt-2">Calendar functionality here...</p>
    </div>
  );
};

export default CaseCalendarSidebar;
