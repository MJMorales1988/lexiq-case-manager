
import React from "react";

const Sidebar = ({ setActiveView }) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">LexiQ Manager</h1>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => setActiveView("calendar")}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            📅 Calendar
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveView("clients")}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            👤 Clients
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveView("cases")}
            className="w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            📂 Cases
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
