import React from "react";

const CaseCalendarSidebar = ({ caseData }) => (
  <div className="bg-white p-4 rounded shadow w-72">
    <h3 className="text-lg font-bold mb-2">Calendar</h3>
    <p><strong>Case:</strong> {caseData.title}</p>
    <p><strong>Court:</strong> {caseData.court}</p>
    <p><strong>Branch:</strong> {caseData.branch}</p>
    <p><strong>Status:</strong> {caseData.status}</p>
  </div>
);

export default CaseCalendarSidebar;
