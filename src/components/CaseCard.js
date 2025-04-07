
import React from "react";

const CaseCard = ({ title, client, status, updatedAt }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg w-full max-w-sm">
      <h3 className="text-lg font-semibold text-teal-700 mb-1">{title}</h3>
      <p className="text-sm text-gray-700">Client: {client}</p>
      <p className="text-sm text-gray-700">Status: {status}</p>
      <p className="text-xs text-gray-500 mt-2">Last updated: {updatedAt}</p>
    </div>
  );
};

export default CaseCard;
